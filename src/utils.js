
export function formatCreditCardNumber(cardNumber) {
    return cardNumber.match(/.{1,4}/g).join(' ');
}