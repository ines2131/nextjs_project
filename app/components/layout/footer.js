import styles from "./footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <span>AceSpace</span>
        </div>
        <div className={styles.linksGroup}>
          <div>
            <h4>For Business</h4>
            <ul>
              <li>
                <a href="#facility-management">Facility Management</a>
              </li>
              <li>
                <a href="#schedule-demo">Schedule a Demo</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#help-center">Help Centre</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#terms">Terms of Use</a>
              </li>
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <p>&copy; 2024 | AceSpace Web Solutions</p>
        <div className={styles.socialIcons}>
          <a href="#whatsapp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#facebook">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#tiktok">
            <i className="fab fa-tiktok"></i>
          </a>
          <a href="#linkedin">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
