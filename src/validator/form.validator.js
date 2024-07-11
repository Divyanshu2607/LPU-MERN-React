export const isValidCredential = (credential) => {
  return (
    credential.registrationNumber > 9_999_999 &&
    credential.registrationNumber < 1_000_000_000 &&
    credential.password.length >= 8
  );
};
