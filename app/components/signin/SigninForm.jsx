"use client";
import useValidation from "@/app/hooks/useValidation";
import styles from "./signinForm.module.css";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SigninForm() {
  const { validateForm, validateField, errors, setErrors } = useValidation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear specific field error on change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate field on blur
    const fieldError = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: true,
    });
    console.log("SignIn result:", result);
    if (result.error) {
      setError(result.error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur} // Validate on blur
        className={styles.input}
      />
      {errors.email && <p className={styles.error}>{errors.email}</p>}{" "}
      <label htmlFor="password" className={styles.label}>
        Password
      </label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styles.input}
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}{" "}
      <button type="submit" className={styles.signinButton}>
        Sign In
      </button>
    </form>
  );
}
