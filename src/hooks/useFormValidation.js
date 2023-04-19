export const useFormValidation = ({ email, password }) => {
  const isEmailValid = email.includes("@");
  const isPasswordValid = password.length >= 8;

  return {
    isFormValid: isEmailValid && isPasswordValid,
    email: {
      isValid: isEmailValid,
      errorMessage: "@ 포함",
    },
    password: {
      isValid: isPasswordValid,
      errorMessage: "8자 이상",
    },
  };
};
