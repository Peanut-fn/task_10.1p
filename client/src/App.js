// client/src/App.js
import React from 'react';
import './App.css';
import NewsletterTop from './components/NewsletterTop';
import FooterBlue from './components/FooterBlue';

function App() {
  return (
    <div className="app-root">
      <header className="header">
        <h1 className="site-title">Task 10.1P — Home</h1>
      </header>

      <NewsletterTop />

      <main className="main-content">
        <div className="demo-box">
          <h2>Welcome to DEV@Deakin</h2>
          <p>This demo shows the newsletter signup plus the styled blue dashboard/footer that matches the example image.</p>
        </div>
      </main>

      <FooterBlue />
    </div>
  );
}

export default App;
