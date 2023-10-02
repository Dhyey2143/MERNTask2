function reverseNumber(number) {
    const numString = number.toString();
    const reversedString = numString.split('').reverse().join('');
    const reversedNumber = parseInt(reversedString, 10);
    return reversedNumber;
  }