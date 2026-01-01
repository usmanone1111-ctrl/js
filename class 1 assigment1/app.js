// Take input from user
        var userName = prompt("Enter your name:");

        // Greet the user
        if (userName) {
            alert("Hello, " + userName + "! Welcome!");
            document.write("<h2>Hello, " + userName + "! Welcome!</h2>");
        } else {
            alert("Hello! Welcome!");
            document.write("<h2>Hello! Welcome!</h2>");
        }
// Take input from user
        var num = prompt("Enter a number for multiplication table:");

        // If user doesn't enter a number, use default 5
        if (!num) {
            num = 5;
        }

        num = parseInt(num); // Convert string input to number

        document.write("<h2>Multiplication Table of " + num + "</h2>");

        for (var i = 1; i <= 10; i++) {
            document.write(num + " x " + i + " = " + (num * i) + "<br>");
        }
// a) Take 3 subject names
        var subject1 = prompt("Enter the name of subject 1:");
        var subject2 = prompt("Enter the name of subject 2:");
        var subject3 = prompt("Enter the name of subject 3:");

        // b) Total marks for each subject
        var totalMarks = 100;

        // c & d) Take obtained marks for all subjects
        var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
        var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
        var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

        // e) Calculate total marks and percentage
        var totalObtained = marks1 + marks2 + marks3;
        var totalPossible = totalMarks * 3;
        var percentage = (totalObtained / totalPossible) * 100;

        // Display result in a table
        document.write("<h2>Marks Sheet</h2>");
        document.write("<table border='1' cellpadding='10'>");
        document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
        document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td></tr>");
        document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td></tr>");
        document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td></tr>");
        document.write("<tr><th>Total</th><th>" + totalPossible + "</th><th>" + totalObtained + "</th></tr>");
        document.write("<tr><th colspan='2'>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
        document.write("</table>");