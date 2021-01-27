export function carculator(price) {
  let taxes;
  if (price <= 14000) {
    taxes = Math.floor(price * 0.04);
  } else if (price <= 17000) {
    taxes = Math.floor(price * 0.26);
  } else if (price <= 20000) {
    taxes = Math.floor(price * 0.53);
  } else if (price <= 25000) {
    taxes = Math.floor(price * 0.62);
  } else if (price <= 30000) {
    taxes = Math.floor(price * 0.71);
  } else if (price > 30000) {
    taxes = Math.floor(price * 0.3);
  }
  return taxes;
}
