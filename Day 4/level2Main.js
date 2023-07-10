//Level 2

let grade = prompt("Enter your grade here:")

switch (true) {
    case grade >= 80:
        console.log("A");
        break;
    case grade >= 70:
        console.log("B");
        break;
    case grade >= 60:
        console.log("C");
        break;
    case grade >= 50:
        console.log("D");
        break;
    case grade < 50:
        console.log("F");
        break;
    default:
        console.log(`${grade} is not a number`);
}


