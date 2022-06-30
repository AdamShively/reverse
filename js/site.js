//Get the user's input string.
function getValue() {

    //Get string that the user entered.
    let inputStr = document.getElementById("str").value;
    
    //Make sure user entered a string.
    if (inputStr.length > 0) {

        //Reverse the input string with function call.
        let reverseStr = generateReverse(inputStr);

        //Call function to display reverse string.
        displayValue(reverseStr);
    }
    else {
        //Show the alert box.
        alert("Please input a string to reverse.");
    }
}

//Reverse the input string.
function generateReverse(inputStr) {
    let reverseStr = "";

    //Loop through characters and add to a new string.
    for (let i = inputStr.length-1; i >= 0; i--) {

        reverseStr += inputStr[i];
    }

    return reverseStr;
}

//Display the reversed string.
function displayValue(reverseStr) {

    //Write reversed string to the page.
    document.getElementById("reversed").innerHTML = `Reversed String: ${reverseStr}`;

    //Allow display message to be displayed.
    document.getElementById("alert").classList.remove("invisible");
}