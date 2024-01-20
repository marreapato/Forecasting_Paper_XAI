var Holidays = require('date-holidays');
const fs = require('fs');
const { DataFrame } = require('dataframe-js');
const Papa = require('papaparse');
const iconv = require('iconv-lite');

// Define the list of countries with ISO-2 codes
const iso2Codes = [
  'BR', // Brazil
];

var hd = new Holidays();

// Create an array to store all holidays for all countries
const allHolidays = [];

// Iterate through the list of ISO-2 codes and retrieve holidays for each country
iso2Codes.forEach(countryCode => {
  // Set the year range (since 1970)
  const startYear = 2007;
  const endYear = new Date().getFullYear(); // Get the current year

  // Loop through the years and retrieve holidays
  for (let year = startYear; year <= endYear; year++) {
    hd = new Holidays(countryCode);
    const holidaysForYear = hd.getHolidays(year);
    if (holidaysForYear.length > 0) {
      // Add the country code, ISO-2 code, and full country name to each holiday data
      holidaysForYear.forEach(holiday => {
        holiday.countryCode = countryCode;
        holiday.fullCountryName = iso2Codes.find((code) => code === countryCode);
        holiday.iso2Code = iso2Codes.find((code) => code === countryCode);
      });
      allHolidays.push(...holidaysForYear);
    }
  }
});

// Create a DataFrame with all the holidays
const df = new DataFrame(allHolidays);

// Convert the DataFrame to a CSV string
const csvData = Papa.unparse(df.toArray(), { header: true }); // Keep the header

// Convert the CSV string to a buffer with UTF-8 encoding
const csvBuffer = iconv.encode(csvData, 'utf8');

// Save the CSV to a single file
const fileName = 'C://Users//lucas//OneDrive//Área de Trabalho//holidays_all_countries.csv';
fs.writeFileSync(fileName, csvBuffer);

console.log("Saved holidays for all countries in a single CSV file.");


// Read the CSV file
const csvDataread = fs.readFileSync(fileName, 'utf8');

// Parse the CSV data using PapaParse
const parsedDataread = Papa.parse(csvDataread, { header: false });

// Create a DataFrame from the parsed data
const dfread = new DataFrame(parsedDataread.data);

// Display the DataFrame
dfread.show();
