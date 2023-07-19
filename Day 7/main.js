//Level 1

//This is what a standard function looks like in JS
function fullName () {
    console.log("Koby James Grah");
}

//This is what an arrow function looks like in JS
//These functions are ananymous meaning they have no name and typically have their result assigned to some var.
() => {
    console.log("This is an arrow function");
}


//Level 2

function solveLinEquation (a, b, c) {
    console.log(`${a}x + ${b}y + ${c} = 0`);
    return;
}

function printArray (array) {
    console.log(array);
    return;
}

function reverseArray (array) {
    let i = array.length - 1;
    let temp = 0;

    for (index in array) {
        temp = index;
        index = array[i];
        array[i--] = temp;
    }

    return;
}




