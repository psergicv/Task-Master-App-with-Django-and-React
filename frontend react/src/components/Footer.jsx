import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Task Management App. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem',
  },
};

export default Footer;
