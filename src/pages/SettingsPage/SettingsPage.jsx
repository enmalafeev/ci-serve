import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { navigate } from 'hookrouter';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/settings';
import './settings.css';

const validate = values => {
  const errors = {};
  if (!values.repoName) {
    errors.repoName = 'Required';
  }

  if (!values.command) {
    errors.command = 'Required';
  }

  return errors;
};

function SettingsPage() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      repoName: '',
      command: '',
      branchName: '',
      syncTime: 0
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      dispatch(actions.setSettings(values));
      resetForm({values: ''});
      navigate('/build');
    },
  });
  const cancelHandle = () => {
    dispatch(actions.setSettings(null));
    formik.resetForm({ values: ''});
  }
  return ( 
    <div className="wrapper">
      <Header />
      <main className="settings">
        <div className="settings__wrapper">
          <h3 className="settings__title">Settings</h3>
          <p className="settings__description">Configure repository connection and synchronization settings.</p>
          <form className="settings-form" onSubmit={formik.handleSubmit}>
            <Input
              id="repoName"
              name="repoName"
              type="text"
              label="GitHub repository *"
              placeholder="user-name/repo-name"
              onChange={formik.handleChange}
              clearInput={() => formik.setFieldValue('repoName', '')}
              value={formik.values.repoName}
            />
            {formik.errors.repoName ? <div className="error">{formik.errors.repoName}</div> : null}
            <Input
              id="command"
              name="command"
              type="text"
              label="Build command *"
              placeholder="enter command"
              onChange={formik.handleChange}
              clearInput={() => formik.setFieldValue('command', '')}
              value={formik.values.command}
            />
            {formik.errors.command ? <div className="error">{formik.errors.command}</div> : null}
            <Input 
              id="branchName"
              name="branchName" 
              type="text" 
              label="Main branch" 
              placeholder="branch name"
              onChange={formik.handleChange}
              clearInput={() => formik.setFieldValue('branchName', '')}
              value={formik.values.branchName}
            />
            <div className="settings-form__field settings-form--row">
              <label className="settings-form__label" htmlFor="sync">Synchronize every</label>
              <input
                id="syncTime"
                name="syncTime"
                className="settings-form__input"
                type="number"
                min="1"
                max="999"
                onChange={formik.handleChange}
                value={formik.values.syncTime}  
              />
              <p className="settings-form__caption">minutes</p>
            </div>
            <div className="settings-form__field settings-form--row settings-form--narrow">
              <Button type="primary" btnType="submit">
                <span>Save</span>
              </Button>
              <Button type="accent" onClick={cancelHandle}>
                <span>Cancel</span>
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
   );
}

export default SettingsPage;