import { useNavigate } from "react-router-dom";
import styles from "./css/ErrorPage.module.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page404}>
      <h2>404</h2>
      <h3>Look like you're lost</h3>
      <p>the page you are looking for not available!</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
