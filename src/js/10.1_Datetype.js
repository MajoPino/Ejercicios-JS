//Aditional class

//Date type data

console.groupCollapsed("Date type example")
let isDate = new Date()
console.log(isDate) //Today's date

let isDate2 = new Date("2005/04/13") // yyyy/mm/dd - mm/dd/yyyy
console.log(isDate2)
console.groupEnd()

//getter

console.groupCollapsed("Getters")
let day = isDate.getDate() //Returns the day of the date
console.log(day)

let month = isDate.getMonth()+1 //Returns the month of the date (index/Jan = 0) (The +1 adds a number to the index)
console.log(month)

let dayWeek = isDate.getDay() // Returns a value between 0-6, indicating the day of the week (index/0 being Sunday)
console.log(dayWeek)

let year = isDate.getFullYear() //Returns the year of the date (getYear() returns only two numbers)
console.log(year)

let hour = isDate.getHours() //Returns the first digit from the hour of the date (Currently being 8:32 am and returning just "8") - Military hour
console.log(hour)

let minutes = isDate.getMinutes() //Returns the first digit from the minutes of the hour (Currently being 8:32 am and returning just "32") - 0/59
console.log(minutes)

let seconds = isDate.getSeconds() //Returns the seconds of the current hour/minutes - 0/59
console.log(seconds)

let milliseconds = isDate.getMilliseconds() //Returns the milliseconds of the current second - three digit number - 0/999
console.log(milliseconds)

console.log(isDate.getHours(), isDate.getMinutes(), isDate.getSeconds()) //Concatenate some of the above

console.groupEnd()

//Setter

console.groupCollapsed("Setters")

console.log(isDate.setDate(2,4))
console.log(isDate.setFullYear(1996)) //Modifies the date

//Date representation
console.log(isDate) //returns all the data
console.log(isDate.toDateString()) //Returns the basic data
console.log(isDate.toLocaleDateString()) //Returns the most basic data
console.log(isDate.toISOString()) //Returns the date in an ISO format
console.log(isDate.toJSON()) //Returns the date also in an ISO format
console.log(isDate.toString()) //Returns the time in an international format

console.groupEnd()

console.group("Exercise 1")

let newPrompt = prompt("Please, log a date")
let newPromptDate = new Date(newPrompt)

let isDayWeek

switch (newPromptDate.getDay()) {
    case 0:
        isDayWeek = "Sunday"
        break;

    case 1:
        isDayWeek = "Monday"
        break;
    case 2:
        isDayWeek = "Tuesday"
        break;
    case 3:
        isDayWeek = "Wednesday"
        break;
    case 4:
        isDayWeek = "Thursday"
        break;
    case 5:
        isDayWeek = "Friday"
        break;
    case 6:
        isDayWeek = "Saturday"
        break;
    default:
        break;
}
console.log("The day of the week from the date you registered is",isDayWeek)

console.groupEnd()