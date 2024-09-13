        function checkOddOrEven() {
            var number = prompt("Enter a number:");

            number = parseInt(number, 10);

            if (isNaN(number)) {
                alert("Invalid input. Please enter a valid number.");
                return;
            }

            if (number % 2 === 0) {
                alert(`The number ${number} is even.`);
            } else {
                alert(`The number ${number} is odd.`);
            }

            number++;

            alert(`After incrementing, the number is ${number}.`);
        }

        checkOddOrEven();