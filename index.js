//Requuiring the module
const reader = require('xlsx')

const fs = require('fs')

//Reading excel from file
const file = reader.readFile('./employeedata2.xlsx')

let data = []

 //Retrieve the names in the sheet
const sheets = file.SheetNames

//For loop is run until the end of the excel file
for(let i = 0; i < sheets.length; i++) {
	//Utils module accepts the worksheet object as a
	// parameter and returns an array of JSON objects.

	const temp = reader.utils.sheet_to_json(
		file.Sheets[file.SheetNames[i]])
	//the forEach loop iterates through ever JSON object
	//in the arraytemp and pushes into a variable data

	temp.forEach((res) => {
		data.push(res)
	})
}

//printing data or other modification can be done here
console.log(data)

// Function to store our excel data to JSON server
var jsonContent = JSON.stringify(data)
console.log(jsonContent)

fs.writeFile("db.json", jsonContent, 'utf8', function(err){
	if (err) {
		console.log("An error occured while writing json object")
		return console.log(err)


	}

	console.log("JSON file has been saved.")

})