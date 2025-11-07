// client/src/components/NewsletterTop.js
import React, { useState } from 'react';
import axios from 'axios';
import './NewsletterTop.css'; // optional, but CSS below is in App.css so this is safe

export default function NewsletterTop() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return setMsg({ type: 'err', text: 'Enter email' });

    setMsg({ type: 'loading', text: 'Subscribing...' });
    try {
      const res = await axios.post('/api/subscribe', { email });
      const preview = res.data?.previewUrl ? ` Preview: ${res.data.previewUrl}` : '';
      setMsg({ type: 'ok', text: 'Subscribed!' + preview });
      setEmail('');
    } catch (err) {
      setMsg({ type: 'err', text: err.response?.data?.message || 'Server error' });
    }
  };

  return (
    <>
      <div className="signup-bar">
        <div className="signup-inner">
          <div className="signup-label">SIGN UP FOR OUR DAILY INSIDER</div>

          <form className="signup-form" onSubmit={handleSubscribe}>
            <input
              className="signup-input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="signup-button" type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {msg && (
        <div className={`signup-msg ${msg.type === 'err' ? 'err' : msg.type === 'loading' ? 'loading' : 'ok'}`}>
          {msg.text}
        </div>
      )}
    </>
  );
}
