export const validateFirstName = (firstName: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(firstName)) {
    return "First name is invalid";
  }
  return "";
};

export const validateLastName = (lastName: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(lastName)) {
    return "Last name is invalid";
  }
  return "";
};

export const validateDateOfBirth = (dateOfBirth: Date | null) => {
  if (!dateOfBirth) {
    return "Date of birth is required";
  }
  return "";
};

export const validateStartDate = (startDate: Date | null) => {
  if (!startDate) {
    return "Start date is required";
  }
  return "";
};

export const validateStreet = (street: string) => {
  if (!/^[\dA-zÀ-ÿ\s-]+$/.test(street)) {
    return "Street is invalid";
  }
  return "";
};

export const validateCity = (city: string) => {
  if (!/^[a-zA-ZÀ-ÿ\s-]+$/.test(city)) {
    return "City is invalid";
  }
  return "";
};

export const validateZipCode = (zipCode: string) => {
  if (!/^[A-Za-z0-9\s-]+$/.test(zipCode)) {
    return "Zip code is invalid";
  }
  return "";
};
