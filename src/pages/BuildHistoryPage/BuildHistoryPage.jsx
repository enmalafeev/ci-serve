import React from 'react';
import './buildHistory.css';
import Footer from '../../components/Footer/Footer';
import BuildHeader from '../../components/Button/BuildHeader/BuildHeader';

function BuildHistoryPage() {
  return (
    <div className="wrapper">
      <BuildHeader />
      <main className="build-content">
        main content
      </main>
      <Footer />
    </div>
   );
}

export default BuildHistoryPage;