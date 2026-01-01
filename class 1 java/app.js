// alert("Your message here");
//  alert("Hello\nHow are you?");
// alert("Hello\tHow are you?");

// alert("location.hostname");



//  var firstName = "usman Farooq"
//  document.write(firstName);

// var _text correct



// document.write("<h1> hello world </h1>");





// var myName = "usman"

// document.writeln(myName)

// var titled = "Hello world"
// alert(titled)


// var data = "18 years old"
// var data2 = "collage student"


// alert(data +" "+data2)

// var data1 = "pizza"

// var data2 = "pizz"
// var data3 = "piz"
// var data4 = "pi"
// var data5 = "p"


// alert(data1+ "\n" +data2 + "\n"+ data3 + "\n"+ data4 + "\n"+data5)





// alert("---------- Message ----------");


// var age = 15

// alert(age);

// var visit = "you have visited this site 14 times"

// alert(visit);

// document.write("<h1> My birth  year is 1990 </h1>");
// document.write("<p> data type of my ddeclared veriable is num</p>");



// var wwwxyzclotingcom = "The Coca-Cola Company \n P.O. Box 1734 Atlanta, GA 30301 USA"

// document.write(wwwxyzclotingcom);






























//  document.write(" <h1>Rules for naming JS varibles</h1>");

//  document.write("Variable names can only contain,$ and _. For example:$my_!stVariable <br> Variable must begin with a latter,$ or_.For example:$name,_name or name<br> Variable names are case sensitive <br> Variable names should not be JS keywords");


// --------- Task 1 & 2 ---------

// var num1 = 10;
// var num2 = 3;

// document.write("<h2>Task 1 & 2 Results</h2>");

// var add = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + add + "<br>");

// var sub = num1 - num2;
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

// var mul = num1 * num2;
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + mul + "<br>");

// var div = num1 / num2;
// document.write("Division of " + num1 + " and " + num2 + " is " + div + "<br>");

// var mod = num1 % num2;
// document.write("Modulus of " + num1 + " and " + num2 + " is " + mod + "<br><br>");


// // --------- Task 3 ---------

// document.write("<h2>Task 3 Results</h2>");

// // a
// var myVar;

// // b
// document.write("Value after variable declaration is: " + myVar + "<br>");

// // c
// myVar = 5;

// // d
// document.write("Initial value: " + myVar + "<br>");

// // e
// myVar++;

// // f
// document.write("Value after increment is: " + myVar + "<br>");

// // g
// myVar = myVar + 7;

// // h
// document.write("Value after addition is: " + myVar + "<br>");

// // i
// myVar--;

// // j
// document.write("Value after decrement is: " + myVar + "<br>");

// // k
// var remainder = myVar % 3;

// // l
// document.write("The remainder is: " + remainder + "<br>");


















// var ticketPrice = 600;        // price of one ticket
// var quantity = 5;             // number of tickets

// var totalCost = ticketPrice * quantity;

// document.write("Cost of one movie ticket is " + ticketPrice + " PKR<br>");
// document.write("Cost of buying " + quantity + " tickets is " + totalCost + " PKR");





// var num = +prompt("Enter a number to show its multiplication table:");

// document.write("<h2>Multiplication Table of " + num + "</h2>");

// for (var i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }
















// // a) Store Celsius temperature in a variable
// var celsius = 25;

// // b) Convert Celsius to Fahrenheit
// var fahrenheitFromCelsius = (celsius * 9/5) + 32;

// // Output
// document.write(celsius + "°C is " + fahrenheitFromCelsius + "°F<br>");

// // c) Store Fahrenheit temperature in a variable
// var fahrenheit = 70;

// // d) Convert Fahrenheit to Celsius
// var celsiusFromFahrenheit = (fahrenheit - 32) * 5/9;

// // Output
// document.write(fahrenheit + "°F is " + celsiusFromFahrenheit + "°C");




































// // a. Price of item 1
// var priceItem1 = 650;

// // b. Price of item 2
// var priceItem2 = 100;

// // c. Ordered quantity of item 1
// var quantityItem1 = 3;

// // d. Ordered quantity of item 2
// var quantityItem2 = 7;

// // e. Shipping charges
// var shippingCharges = 100;

// // Calculate total cost
// var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

// // Display receipt
// document.write("Price of item 1 is " + priceItem1 + " PKR<br>");
// document.write("Quantity of item 1 is " + quantityItem1 + "<br><br>");

// document.write("Price of item 2 is " + priceItem2 + " PKR<br>");
// document.write("Quantity of item 2 is " + quantityItem2 + "<br><br>");

// document.write("Shipping Charges: " + shippingCharges + " PKR<br><br>");

// document.write("<b>Total cost of your order is " + totalCost + " PKR</b>");





























// var totalMarks = 500;

// // store obtained marks
// var obtainedMarks = 420;

// // compute percentage
// var percentage = (obtainedMarks / totalMarks) * 100;

// // show result
// document.write("<h2>Marks Sheet</h2>");
// document.write("Total Marks: " + totalMarks + "<br>");
// document.write("Marks Obtained: " + obtainedMarks + "<br>");
// document.write("Percentage: " + percentage + "%");





















// var totalPKR = (10 * 104.80) + (25 * 28);

// document.write("<h2>Currency in PKR</h2>");
// document.write("Total Currency in PKR: " + totalPKR);











var num = 8;   // you can change this number

var result = ((num + 5) * 10) / 2;

document.write("Initial number: " + num + "<br>");
document.write("Result after operations is: " + result);








var currentYear = 2026;   // change if needed
var birthYear = 2005;

var age1 = currentYear - birthYear;
var age2 = age1 - 1;

document.write("<h2>Age Calculator</h2>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("They are either " + age1 + " or " + age2 + " years old");








var radius = 20;          // you can change the radius value
var pi = 3.142;

// Calculate circumference
var circumference = 2 * pi * radius;

// Calculate area
var area = pi * radius * radius;

// Output results
document.write("<h2>The Geometrizer</h2>");
document.write("Radius of circle: " + radius + "<br>");
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area);



var favoriteSnack = "Chocolate Chip Cookies";

// b. Current age
var currentAge = 20;

// c. Maximum age
var maxAge = 80;

// d. Estimated amount per day
var amountPerDay = 3;

// e. Calculate total needed
var yearsRemaining = maxAge - currentAge;
var totalNeeded = yearsRemaining * 365 * amountPerDay;

// Output result
document.write("<h2>Lifetime Supply Calculator</h2>");
document.write("Favorite Snack: " + favoriteSnack + "<br>");
document.write("Current Age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount per day: " + amountPerDay + "<br><br>");
document.write("You will need " + totalNeeded + " " + favoriteSnack + 
               " to last you until the ripe old age of " + maxAge + ".");









// Step 1: Take a number in a variable
        var num = 10;

        // Step 2: Perform arithmetic
        var resultAddition = num + 5;       // 10 + 5 = 15
        var resultSubtraction = num - 3;    // 10 - 3 = 7
        var resultMultiplication = num * 2; // 10 * 2 = 20
        var resultDivision = num / 2;       // 10 / 2 = 5
        var resultModulus = num % 3;        // 10 % 3 = 1

        // Step 3: Display results in the browser
        document.write("Original Number: " + num + "<br>");
        document.write("After Addition (+5): " + resultAddition + "<br>");
        document.write("After Subtraction (-3): " + resultSubtraction + "<br>");
        document.write("After Multiplication (*2): " + resultMultiplication + "<br>");
        document.write("After Division (/2): " + resultDivision + "<br>");
        document.write("After Modulus (%3): " + resultModulus + "<br>");


