import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const isAuthenticated = () => {
  // Check if the user's authentication status is stored in localStorage
  return localStorage.getItem("isLoggedIn") === "true";
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleMenuClick = (event) => {
    event.preventDefault(); // Prevent default anchor click behavior
    if (!isAuthenticated()) {
      // Redirect user to login/signup page if not authenticated
      navigate("/auth"); // Use React Router's navigate function
    } else {
      // Close the menu and allow normal navigation if authenticated
      setMenuOpen(false);
      navigate(event.target.getAttribute("href").slice(1)); // Navigate without reloading the page
    }
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        RBT Study Hub
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#studyGuide" onClick={handleMenuClick}>
              Study Guide
            </a>
          </li>
          <li>
            <a href="#practiceTest" onClick={handleMenuClick}>
              Practice Test
            </a>
          </li>
          <li>
            <a href="#FAQ" onClick={handleMenuClick}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
