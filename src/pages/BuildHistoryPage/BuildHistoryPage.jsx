import React from 'react';
import './buildHistory.css';
import Footer from '../../components/Footer/Footer';
import BuildHeader from '../../components/BuildHeader/BuildHeader';
import BuildCard from '../../components/BuildCard/BuildCard';
import Button from '../../components/Button/Button';
import { useSelector } from 'react-redux';

function BuildHistoryPage() {
  const repoName = useSelector((state) => state.settings.settings.repoName);
  return (
    <div className="wrapper">
      {repoName && <BuildHeader title={repoName} />}
      <main className="build-content">
        <div className="build-container">
          {Array.from({length: 10}, (_, i) => i + 1).map((item, index) => <BuildCard key={index} />)}
          <div className="build-btn-group">
            <Button type="accent" size="small">
              <span>Show more</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
   );
}

export default BuildHistoryPage;