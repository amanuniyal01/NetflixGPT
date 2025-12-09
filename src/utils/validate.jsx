export const checkValidData = (email, password, name = null) => {
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isEmailValid) return "Email is not valid";

  if (!password || password.length < 6)
    return "Password must be at least 6 characters";

  if (name !== null && name.trim().length < 3)
    return "Full name must be at least 3 characters";

  return null;
};
