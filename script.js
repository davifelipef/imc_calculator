window.onload = function() {
    // Get the element with id "defaultOpen" and click on it
    document.getElementById("defaultOpen").click();
};

// Function the navigation between pages
function openPage(evt, linkName) {
    // Prevent form submission
    evt.preventDefault();
    
    // Declare all variables
    var i, pagecontent, links;
    
    // Get all elements with class="pagecontent" and hide them
    pagecontent = document.getElementsByClassName("pagecontent");
    for (i = 0; i < pagecontent.length; i++) {
        pagecontent[i].style.display = "none";
    }
    
    // Get all elements with class="links" and remove the class "active"
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
        links[i].className = links[i].className.replace(" active", "");
    }
    
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " active";
}

function imCalc() {
    weight = document.getElementById("weight").value;
    height = document.getElementById("height").value;
    resultElement = document.getElementById("result");
    resultInfo = document.getElementById("result_info");
    // IMC value calculation
    if (weight && height) {
        imc = (weight/(height*height)).toFixed(2);
        resultElement.innerHTML = imc;
    }
    // IMC information set up
    if (imc < 17) {
        // Too much lower than the ideal weight
        resultInfo.innerHTML = "Muito abaixo do peso"
    } else if (imc >= 17 && imc <=18.49 ) {
        // Lower than the ideal weight
        resultInfo.innerHTML = "Abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.99) {
        // Normal weight
        resultInfo.innerHTML = "Peso normal"
    } else if (imc >= 25 && imc <= 29.99) {
        // Above the ideal weight
        resultInfo.innerHTML = "Acima do peso"
    } else if (imc >= 30 && imc <= 34.99) {
        // Obesity I
        resultInfo.innerHTML = "Obesidade I"
    } else if (imc >= 35 && imc <= 39.99) {
        // Obesity II (severe)
        resultInfo.innerHTML = "Obesidade II (severa)"
    } else {
        // 40 or higher means morbid Obesity (or level III)
        resultInfo.innerHTML = "Obesidade III (mórbida)"
    }
    console.log(weight + ", " + height);
    console.log("IMC = " + imc);
}

function setFormat() {
    var input = document.getElementById('height');
    var value = input.value;

    // Remove any non-digit characters
    var digitsOnly = value.replace(/\D/g, '');

    // Add a comma before the last two digits
    var formattedValue = digitsOnly.replace(/^(\d+)(\d{2})$/, '$1.$2');

    // Update the input value
    input.value = formattedValue;
}