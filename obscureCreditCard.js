function obscureCreditCard(creditCardNumber) {
    const len = creditCardNumber.length;
    if (len < 12 || len > 16) {
      return "Invalid Credit Card";
    }
    const firstFour = creditCardNumber.slice(0, 4);
    const lastFour = creditCardNumber.slice(len - 4, len);
    const obscured = "X".repeat(len - 8);
    return `${firstFour}${obscured}${lastFour}`;
  }
  
  module.exports = obscureCreditCard;