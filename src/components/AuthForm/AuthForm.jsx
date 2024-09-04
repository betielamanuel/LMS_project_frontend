import { useState } from "react";
import styles from "./AuthForm.module.css"; // Ensure to import the CSS module

export function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    // Implement your backend logic here, such as authentication API calls.
  };

  return (
    <div className={styles.authForm}>
      <h1>{isLogin ? "Login" : "Signup"}</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            required
            className={styles.input}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)} className={styles.button}>
        {isLogin
          ? "Need an account? Sign up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
}
