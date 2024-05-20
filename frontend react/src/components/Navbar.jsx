import React from "react";

const Navbar = () => {
    return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
        <li style={styles.navItem}><a href="/about" style={styles.navLink}>About</a></li>
        <li style={styles.navItem}><a href="/tasks" style={styles.navLink}>Tasks</a></li>
      </ul>
    </nav>
    );
};


const styles = {
    navbar: {
      backgroundColor: '#333',
      padding: '1rem',
    },
    navList: {
      listStyle: 'none',
      display: 'flex',
      justifyContent: 'space-around',
    },
    navItem: {},
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1.2rem',
    },
  };
  
  export default Navbar;