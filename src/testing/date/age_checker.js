export function isAgeValidBasedOnYear(birthYear, age) {
  let today = new Date();
  let currentYear = today.getFullYear();
  if (currentYear === birthYear + age) {
    return true;
  } else if (currentYear === birthYear + age + 1) {
    return true;
  } else {
    return false;
  }
}
