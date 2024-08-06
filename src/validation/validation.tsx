/**
 * Validates a first name to ensure it only contains letters, spaces, and hyphens.
 *
 * @param {string} firstName - The first name to validate.
 * @return {string} An error message if the first name is invalid, an empty string otherwise.
 */
export const validateFirstName = (firstName: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(firstName)) {
    return "First name is invalid";
  }
  return "";
};

/**
 * Validates a last name to ensure it only contains letters, spaces, and hyphens.
 *
 * @param {string} lastName - The last name to validate.
 * @return {string} An error message if the last name is invalid, an empty string otherwise.
 */
export const validateLastName = (lastName: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(lastName)) {
    return "Last name is invalid";
  }
  return "";
};

/**
 * Validates the date of birth.
 *
 * @param {Date | null} dateOfBirth - The date of birth to validate.
 * @return {string} An error message if the date of birth is required, an empty string otherwise.
 */
export const validateDateOfBirth = (dateOfBirth: Date | null) => {
  if (!dateOfBirth) {
    return "Date of birth is required";
  }
  return "";
};

/**
 * Validates the start date.
 *
 * @param {Date | null} startDate - The start date to validate.
 * @return {string} An error message if the start date is required, an empty string otherwise.
 */
export const validateStartDate = (startDate: Date | null) => {
  if (!startDate) {
    return "Start date is required";
  }
  return "";
};

/**
 * Validates a street name and returns an error message if it is invalid.
 *
 * @param {string} street - The street name to be validated.
 * @return {string} - An error message if the street name is invalid, otherwise an empty string.
 */
export const validateStreet = (street: string) => {
  if (!/^[\dA-zÀ-ÿ\s-]+$/.test(street)) {
    return "Street is invalid";
  }
  return "";
};

/**
 * Validates a city name and returns an error message if it is invalid.
 *
 * @param {string} city - The city name to be validated.
 * @return {string} An error message if the city name is invalid, otherwise an empty string.
 */
export const validateCity = (city: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(city)) {
    return "City is invalid";
  }
  return "";
};

/**
 * Validates a zip code by checking if it contains only alphanumeric characters, spaces, and hyphens.
 *
 * @param {string} zipCode - The zip code to be validated.
 * @return {string} - An error message if the zip code is invalid, otherwise an empty string.
 */
export const validateZipCode = (zipCode: string) => {
  if (!/^[A-Za-z0-9\s-]+$/.test(zipCode)) {
    return "Zip code is invalid";
  }
  return "";
};
