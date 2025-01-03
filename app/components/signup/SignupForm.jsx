"use client";

import { useState, useEffect } from "react";
import styles from "./signupForm.module.css";
import useValidation from "../../hooks/useValidation";
import EmailInput from "./EmailInput";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    promotions: false,
    requiredData: false,
  });
  const [error, setError] = useState(null);
  const [emailStatus, setEmailStatus] = useState("");
  const [success, setSuccess] = useState(null);
  const { validateForm, validateField, errors, setErrors } = useValidation();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "password") {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }

    // Validate confirmPassword on blur
    if (name === "confirmPassword") {
      const error =
        formData.password !== value ? "Passwords do not match." : null;
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!validateForm(formData)) {
      return;
    }

    if (!formData.requiredData) {
      setErrors((prev) => ({
        ...prev,
        requiredData: "You must agree to the required terms.",
      }));
      return;
    }

    try {
      const dataToSend = {
        email: formData.email,
        password: formData.password,
      };

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Something went wrong.");
        return;
      }

      setSuccess("Signup successful! You can now log in.");
      setFormData({
        email: "",
        password: "",
        confirmPassword: "",
        promotions: false,
        requiredData: false,
      });
      router.replace("/");
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  // Show success message as an alert when signup is successful
  useEffect(() => {
    if (success) {
      alert(success);
      setSuccess(null); // Reset success to prevent re-triggering
    }
  }, [success]);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="email" className={styles.label}>
        Email
      </label>
      <EmailInput
        value={formData.email}
        onChange={(e) => handleChange(e)}
        onBlur={(e) => handleBlur(e)}
        error={errors.email}
      />

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
        required
      />
      {errors.password && <p className={styles.error}>{errors.password}</p>}
      <label htmlFor="password" className={styles.label}>
        Confirm Password
      </label>
      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={styles.input}
        required
      />
      {errors.confirmPassword && (
        <p className={styles.error}>{errors.confirmPassword}</p>
      )}

      <div className={styles.inputWrapper}>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            name="promotions"
            id="promotions"
            checked={formData.promotions}
            onChange={handleChange}
            className={styles.checkbox}
          />
          [Optional] Promotions via push or email
        </div>
        <div className={styles.checkboxWrapper}>
          <input
            type="checkbox"
            name="requiredData"
            id="requiredData"
            checked={formData.requiredData}
            onChange={handleChange}
            className={styles.checkbox}
          />
          [Required] Required data for AceSpace use
        </div>
        {errors.requiredData && (
          <p className={styles.error}>{errors.requiredData}</p>
        )}
      </div>

      <button type="submit" className={styles.signupButton}>
        Sign Up
      </button>
    </form>
  );
}
