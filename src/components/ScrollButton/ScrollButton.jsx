import React, { useState, useEffect } from 'react';
import styles from './ScrollButton.module.css';

const ScrollButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  return (
    <button
      className={styles.scrollTop}
      onClick={handleScrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
    >
      &#8679;
    </button>
  );
};

export default ScrollButton;
