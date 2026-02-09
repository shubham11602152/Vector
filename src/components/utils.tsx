// Add this utility function for password validation
export function validatePassword(password: string, confirmPassword: string) {
  const errors: string[] = [];

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must include at least one uppercase letter.");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must include at least one number.");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Password must include at least one special character.");
  }

  return errors;
}
