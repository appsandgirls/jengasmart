// Navbar.jsx

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Smart Jenga</div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <a href="#dashboard" style={styles.navLink}>
            Dashboard
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#project-management" style={styles.navLink}>
            Project Management
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#cost-estimation" style={styles.navLink}>
            Cost Estimation
          </a>
        </li>
        <li style={styles.navItem}>
          <a href="#progress-tracking" style={styles.navLink}>
            Progress Tracking
          </a>
        </li>
      </ul>
    </nav>
  )
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#343a40",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "15px",
    margin: 0,
    padding: 0,
  },
  navItem: {},
  navLink: {
    textDecoration: "none",
    color: "#fff",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
}

export default Navbar
