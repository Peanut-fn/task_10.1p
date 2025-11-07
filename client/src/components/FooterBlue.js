// client/src/components/FooterBlue.js
import React from 'react';

function SocialIcon({ children, title }) {
  return (
    <div className="social-icon" title={title} aria-hidden>
      {children}
    </div>
  );
}

export default function FooterBlue() {
  return (
    <footer className="footer-blue">
      <div className="footer-inner">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Stay connected</h3>
          <div className="social-row">
            <SocialIcon title="Facebook">
              {/* simple facebook-like svg */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#ffffff22"/>
                <path d="M15 8h-1.5c-.6 0-1 .4-1 1V10h2.5l-.4 2H12.5v6h-2v-6H8.5v-2h2v-1.5C10.5 6.67 11.84 5 13.8 5H15v3z" fill="#fff"/>
              </svg>
            </SocialIcon>
            <SocialIcon title="Twitter">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#ffffff22"/>
                <path d="M19 7.5c-.5.2-1 .3-1.6.4.6-.4 1-1 1.2-1.7-.6.4-1.3.6-2 .8C16 6 15 5.5 14 5.5c-1.6 0-2.8 1.4-2.8 3.1 0 .2 0 .3.1.5C8.6 9 6.1 7.7 4.5 5.6c-.2.4-.3.9-.3 1.5 0 1 0 1.9.6 2.7.6.9 1.5 1.5 2.6 1.8-.4 0-.8.1-1.2.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.6 3.3-1.6 1.3-3.6 2-5.6 2-.4 0-.8 0-1.2-.1 2.1 1.4 4.6 2.2 7.3 2.2 8.8 0 13.6-7.8 13.6-14.5v-.7c.9-.6 1.6-1.4 2.2-2.2-.8.5-1.7.9-2.6 1.1z" fill="#fff"/>
              </svg>
            </SocialIcon>
            <SocialIcon title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#ffffff22"/>
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.2A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zM17.6 7.1a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z" fill="#fff"/>
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="brand">DEV@Deakin</div>
        <div className="footer-links">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Code of Conduct</span>
        </div>
      </div>
    </footer>
  );
}
