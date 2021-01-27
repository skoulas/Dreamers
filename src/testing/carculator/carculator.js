export function carculator(price) {
  let taxes;
  if (price <= 14000) {
    taxes = Math.floor(price * 0.04);
  } else if (price <= 17000) {
    taxes = 560 + Math.floor((price - 14000) * 0.26);
  } else if (price <= 20000) {
    taxes = 1340 + Math.floor((price - 17000) * 0.53);
  } else if (price <= 25000) {
    taxes = 2930 + Math.floor((price - 20000) * 0.62);
  } else if (price <= 30000) {
    taxes = 6030 + Math.floor((price - 25000) * 0.71);
  } else if (price > 30000) {
    taxes = 9580 + Math.floor((price - 30000) * 0.3);
  }
  return taxes;
}
