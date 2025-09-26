const prompt = require("prompt-sync")();
let myStack = [];

while (true) {
    process.stdout.write(
        "\nMenu:\n" +
        "1. Push element onto stack\n" +
        "2. Pop element from stack\n" +
        "3. Find element and its index\n" +
        "4. Print number of elements in stack\n" +
        "5. Count integers and floats in stack\n" +
        "6. Fix decimal places of floats\n" +
        "7. Exit\n" +
        "Enter your choice: "
    );

    let choice = parseInt(prompt(""));

    switch (choice) {
        case 1: {
            let val = prompt("Enter a number to push: ");
            let num = Number(val);
            if (!isNaN(num)) {
                myStack.push(num);
                console.log(`Pushed: ${num}`);
            } else {
                console.log("Only numbers allowed!");
            }
            break;
        }

        case 2: {
            if (myStack.length === 0) {
                console.log("Stack is empty!");
            } else {
                console.log("Popped:", myStack.pop());
            }
            break;
        }

        case 3: {
            let val = Number(prompt("Enter element to search: "));
            let found = myStack.find(e => e === val);
            let index = myStack.findIndex(e => e === val);
            if (found !== undefined) {
                console.log(`Element ${found} found at index ${index}`);
            } else {
                console.log("Element not found");
            }
            break;
        }

        case 4: {
            console.log("Number of elements in stack:", myStack.length);
            break;
        }

        case 5: {
            let intCount = 0, floatCount = 0;
            myStack.forEach(num => {
                if (Number.isInteger(num)) intCount++;
                else floatCount++;
            });
            console.log(`Integers: ${intCount}, Floats: ${floatCount}`);
            break;
        }

        case 6: {
            let n = parseInt(prompt("Enter number of decimal places: "));
            myStack = myStack.map(num =>
                Number.isInteger(num) ? num : Number(num.toFixed(n))
            );
            console.log("Updated stack:", myStack);
            break;
        }

        case 7: {
            console.log("Exiting...");
            process.exit(0);
        }

        default: {
            if (myStack.length === 0) {
                console.log("Stack is empty, sum = 0");
            } else {
                let sum = myStack.reduce((acc, val) => acc + val, 0);
                console.log("Sum of stack elements:", sum);
            }
        }
    }
}
