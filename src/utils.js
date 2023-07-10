import { nameLetterMap, luckyNumbersMap, zodiacMap } from "./constants";

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

// Helper function to get the month index from month abbreviation
const getMonthIndex = (abbreviation) =>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ].indexOf(abbreviation);

function isDateInRange(inputDate, startDate, endDate) {
  // Convert inputDate to a Date object
  const date = new Date(inputDate);

  // Extract the day and month from the start and end dates
  const startDay = parseInt(startDate.split("-")[0]);
  const startMonth = getMonthIndex(startDate.split("-")[1]);
  const endDay = parseInt(endDate.split("-")[0]);
  const endMonth = getMonthIndex(endDate.split("-")[1]);

  // Set the year of the inputDate to the current year
  date.setFullYear(new Date().getFullYear());

  // Set the start and end dates
  const startDateObj = new Date(date.getFullYear(), startMonth, startDay);
  const endDateObj = new Date(date.getFullYear(), endMonth, endDay);

  // Check if the inputDate is within the range
  return date >= startDateObj && date <= endDateObj;
}

export function getZodiacDetails(inputDate) {
  if (!inputDate) {
    return null;
  }

  return zodiacMap.find(({ startDate, endDate }) =>
    isDateInRange(inputDate, startDate, endDate)
  );
}

export const tableStyle = {
  fontFamily: "Raleway, sans-serif",
  fontWeight: 300,
};

export const labelStyle = {
  marginBottom: "5px",
  fontSize: "16px",
  fontWeight: 300,
};

export const resultStyle = { fontWeight: 500, marginLeft: "2px" };

export const inputStyle = {
  marginBottom: "5px",
  padding: "5px",
  fontSize: "14px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};
