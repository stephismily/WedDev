const prompt = require("prompt-sync")();
let myQueue = [];

while (true) {
    process.stdout.write(
        "\nQueue Menu:\n" +
        "1. Insert element (push)\n" +
        "2. Remove element (shift)\n" +
        "3. Print total elements\n" +
        "4. Sort elements into another array\n" +
        "5. Remove 'n' elements from 'i' and insert 2 new items\n" +
        "6. Divide into two Queues (slice)\n" +
        "7. Join all elements into a string\n" +
        "8. Exit\n" +
        "Enter your choice: "
    );

    let choice = parseInt(prompt(""));

    switch (choice) {
        case 1: {
            let val = prompt("Enter element (number or string) to insert: ");
            if (val.trim() !== "") {
                let num = Number(val);
                if (!isNaN(num) && val !== "") {
                    myQueue.push(num);
                } else {
                    myQueue.push(val);
                }
                console.log("Inserted:", val);
            } else {
                console.log("Empty input not allowed!");
            }
            break;
        }

        case 2: {
            if (myQueue.length === 0) {
                console.log("Queue is empty!");
            } else {
                console.log("Removed:", myQueue.shift());
            }
            break;
        }

        case 3: {
            console.log("Total elements in Queue:", myQueue.length);
            break;
        }

        case 4: {
            let sortedQueue = [...myQueue].sort();
            console.log("Original Queue:", myQueue);
            console.log("Sorted Queue:", sortedQueue);
            break;
        }

        case 5: {
            let i = parseInt(prompt("Enter starting index (i): "));
            let n = parseInt(prompt("Enter number of elements to remove (n): "));
            let newItem1 = prompt("Enter first new item: ");
            let newItem2 = prompt("Enter second new item: ");
            let removed = myQueue.splice(i, n, newItem1, newItem2);
            console.log("Removed elements:", removed);
            console.log("Updated Queue:", myQueue);
            break;
        }

        case 6: {
            let mid = Math.floor(myQueue.length / 2);
            let firstQueue = myQueue.slice(0, mid);
            let secondQueue = myQueue.slice(mid);
            console.log("First Queue:", firstQueue);
            console.log("Second Queue:", secondQueue);
            break;
        }

        case 7: {
            let joined = myQueue.join(" ");
            console.log("Joined string:", joined);
            break;
        }

        case 8: {
            console.log("Exiting...");
            process.exit(0);
        }

        default: {
            console.log("Converted all elements to string:");
            myQueue = myQueue.map(el => String(el));
            console.log(myQueue);
        }
    }
}
