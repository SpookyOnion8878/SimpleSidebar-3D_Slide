// components/Sidebar.tsx
import { useState } from "react";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.sidebarOpen : ""}`}
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <h2>Sidebar Menu</h2>
        </div>
        <div className={styles.sidebarContent}>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
