// Step One, get the information (controller, accept requests)
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    displayValues(startValue, endValue);
}



// Final Step, display the information (view, displays stuff on screen)
function displayValues(start, end) {

    // convert inputs to numbers; javascript will do this automatically
    // in the for loop below, but i want to be explicit
    let startNum = parseInt(start);
    let endNum = parseInt(end);

    // clear previous run
    clrScreen();

    // first get the ol element from the page
    element = document.getElementById("results");

    for (let i = startNum; i <= endNum; i++) {

        // next create a new li element
        let item = document.createElement("div");

        if (i % 2 == 0) {
            item.classList.add("even-style");
        } else {
            item.classList.add("odd-style");
        }

        // add classes to li element
        item.classList.add("col");

        // set the message for the li element
        item.innerHTML = i;

        // add item to list
        element.appendChild(item);
    }
}

// this function clears the screen
function clrScreen() {
    document.getElementById("results").innerHTML = '';
}