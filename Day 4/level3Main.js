//Level 3

let month = prompt("Enter a month:")
month = month.toLowerCase()

switch (true) {
    case month == "january":
        console.log("January has 31 days")
        break;
    case month == "februrary":
        console.log("Februrary has 28 days...except when it has 29")
        break;
    case month == "march":
        console.log("March has 31 days")
        break;
    case month == "april":
        console.log("April has 30 days")
        break;
    case month == "may":
        console.log("May has 31 days")
        break;
    case month == "june":
        console.log("June has 30 days")
        break;
    case month == "july":
        console.log("July has 31 days")
        break;
    case month == "august":
        console.log("August has 31 days")
        break;
    case month == "september":
        console.log("September has 30 days")
        break;
    case month == "october":
        console.log("October has 31 days")
        break;
    case month == "november":
        console.log("November has 30 days")
        break;
    case month == "december":
        console.log("December has 31 days")
        break;
    default:
        console.log(`${month} is not a month`)
}