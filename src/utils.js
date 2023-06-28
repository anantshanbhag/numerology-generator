import { nameLetterMap, luckyNumbersMap } from "./constants";

//? unused
export function calculateAlphabetTotal(name) {
  // Convert the name to uppercase to handle both uppercase and lowercase letters
  name = name.toUpperCase();

  // Initialize the total count
  let total = 0;

  // Iterate through each character in the name
  for (let i = 0; i < name.length; i++) {
    // Get the ASCII code of the current character
    const charCode = name.charCodeAt(i);

    // Check if the character is a letter (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      // Subtract 64 from the ASCII code to get the corresponding number (A=1, B=2, ...)
      const alphabetValue = charCode - 64;

      // Add the alphabet value to the total
      total += alphabetValue;
    }
  }

  // Return the total count of the alphabets
  return total;
}

export function calculateDigitTotal(number) {
  let total = 0;

  while (number > 0 || total > 9) {
    if (number === 0) {
      number = total;
      total = 0;
    }

    total += number % 10;
    number = Math.floor(number / 10);
  }

  return total;
}

//! depricated
export function totalFunction(number) {
  // Convert the number to a string
  const numberString = String(number);

  // Initialize the total count
  let total = 0;

  // Iterate through each character in the number string
  for (let i = 0; i < numberString.length; i++) {
    // Parse the character as an integer
    const digit = parseInt(numberString[i]);

    // Check if the parsed digit is a valid number
    if (!isNaN(digit)) {
      // Add the digit to the total
      total += digit;
    }
  }

  return total;
}

export function convertNameToDigits(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    const letter = name[i].toUpperCase();
    let digitFound = false;

    for (const digit in nameLetterMap) {
      if (nameLetterMap[digit].includes(letter)) {
        result += digit;
        digitFound = true;
        break;
      }
    }

    if (!digitFound) {
      // If the letter doesn't have a corresponding digit, ignore it
      if (letter !== " ") {
        result += letter;
      }
    }
  }

  return result;
}

export function getLuckyNumbers(bn, dn) {
  // Find matching row in the dataset
  const row = luckyNumbersMap.find(
    (entry) => entry.bn === bn && entry.dn === dn
  );

  // If a matching row is found, return the Lucky Numbers
  if (row) {
    return row.luckyNumbers.split(",");
  }

  // If no matching row is found, return an empty array
  return [];
}

export const tableStyles = {
  fontFamily: "Raleway, sans-serif",
  fontWeight: 300,
};

export const labelStyles = {
  marginBottom: "5px",
  fontSize: "16px",
  fontWeight: 300,
};

export const inputStyles = {
  marginBottom: "5px",
  padding: "5px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
