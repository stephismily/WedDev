const fs = require('fs');
const path = require('path');

// ----- 1. Employee Login Management -----

const empLoginFile = path.join(__dirname, 'EmpLogin.txt');

// Add an employee login (write as JSON)
function logEmployee(empID, date, timeIn, timeOut) {
    let loginData = [];
    if (fs.existsSync(empLoginFile)) {
        loginData = JSON.parse(fs.readFileSync(empLoginFile, 'utf8'));
    }
    loginData.push({ empID, date, timeIn, timeOut });
    fs.writeFileSync(empLoginFile, JSON.stringify(loginData, null, 2));
}

// Count employees who logged in after 10AM on a given date
function countLateEmployees(date) {
    if (!fs.existsSync(empLoginFile)) return 0;
    const loginData = JSON.parse(fs.readFileSync(empLoginFile, 'utf8'));
    return loginData.filter(emp =>
        emp.date === date && Number(emp.timeIn.split(':')[0]) >= 10
    ).length;
}

// ----- 2. Retail Stock (CSV) Management -----

const prodFile = path.join(__dirname, 'Prod.csv');

// Create or reset CSV file for products
function createProdCSV() {
    fs.writeFileSync(prodFile, 'ProdID,Description,Price,Stock\n');
}

// Add a new product to CSV
function addProduct(prodID, description, price, stock) {
    const line = `${prodID},${description},${price},${stock}\n`;
    fs.appendFileSync(prodFile, line);
}

// Search for products below buffer stock of 10 units
function searchBufferStock() {
    if (!fs.existsSync(prodFile)) return [];
    const rows = fs.readFileSync(prodFile, 'utf8').trim().split('\n');
    const bufferProducts = [];
    for (let i = 1; i < rows.length; i++) {
        const [id, desc, price, stock] = rows[i].split(',');
        if (Number(stock) < 10) {
            bufferProducts.push({ id, desc, price, stock });
        }
    }
    return bufferProducts;
}

// Update stock for products below buffer
function updateStock(updates) {
    if (!fs.existsSync(prodFile)) return;
    let rows = fs.readFileSync(prodFile, 'utf8').trim().split('\n');
    let header = rows[0];
    let lines = [];
    for (let i = 1; i < rows.length; i++) {
        let [id, desc, price, stock] = rows[i].split(',');
        if (updates[id]) {
            stock = updates[id];
        }
        lines.push(`${id},${desc},${price},${stock}`);
    }
    fs.writeFileSync(prodFile, header + '\n' + lines.join('\n'));
}

// ----- 3. Food Delivery Orders Management -----

const ordersFile = path.join(__dirname, 'orders.json');

// Add Food Order
function addFoodOrder(orderID, item, quantity, price) {
    let orderData = [];
    if (fs.existsSync(ordersFile)) {
        orderData = JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    }
    orderData.push({ orderID, item, quantity, price });
    fs.writeFileSync(ordersFile, JSON.stringify(orderData, null, 2));
}

// Calculate and print total sales
function printTotalSales() {
    if (!fs.existsSync(ordersFile)) {
        console.log("Total Sales: 0");
        return 0;
    }
    const orderData = JSON.parse(fs.readFileSync(ordersFile, 'utf8'));
    const total = orderData.reduce((acc, order) => acc + order.price * order.quantity, 0);
    console.log("Total Sales:", total);
    return total;
}

// Exported functions for HTML UI (via Electron, child process, or API)
module.exports = {
    logEmployee,
    countLateEmployees,
    createProdCSV,
    addProduct,
    searchBufferStock,
    updateStock,
    addFoodOrder,
    printTotalSales
};
