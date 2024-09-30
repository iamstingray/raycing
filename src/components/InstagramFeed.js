// src/components/InstagramFeed.js
import React, { useEffect } from 'react';

const InstagramFeed = () => {
  useEffect(() => {
    if (!document.getElementById('lightwidget-script')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
      script.id = 'lightwidget-script';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      {/* The iframe for the Instagram feed */}
      <iframe
        title="Instagram Feed"
        src="//lightwidget.com/widgets/11e2b937e4585c06849d352e3ff99612.html"
        scrolling="no"
        allowTransparency="true"
        className="lightwidget-widget"
        style={{ width: '100%', border: 0, overflow: 'hidden' }}
      ></iframe>
    </div>
  );
};

export default InstagramFeed;
