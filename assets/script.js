// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Tavyon Crawford" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = 0

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    gb = gb + 1;
    document.getElementById('qty-gb').textContent = gb;
    cookieTotal = cookieTotal + 1;
    document.getElementById('qty-total').textContent = cookieTotal;
    
})
document.getElementById('add-cc').addEventListener('click', function() {
    cc = cc + 1;
    document.getElementById('qty-cc').textContent = cc;
    cookieTotal = cookieTotal + 1;
    document.getElementById('qty-total').textContent = cookieTotal;
})
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar = sugar + 1;
    document.getElementById('qty-sugar').textContent = sugar;
    cookieTotal = cookieTotal + 1;
    document.getElementById('qty-total').textContent = cookieTotal;


  
})
document.getElementById('minus-gb').addEventListener('click', function() {
    gb = gb - 1;
    document.getElementById('qty-gb').textContent = gb;
    cookieTotal = cookieTotal - 1;
    document.getElementById('qty-total').textContent = cookieTotal;
})
document.getElementById('minus-cc').addEventListener('click', function() {
    cc = cc - 1;
    document.getElementById('qty-cc').textContent = cc;
    cookieTotal = cookieTotal - 1;
    document.getElementById('qty-total').textContent = cookieTotal;
   
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    sugar = sugar - 1;
    document.getElementById('qty-sugar').textContent = sugar;
    cookieTotal = cookieTotal - 1;
    document.getElementById('qty-total').textContent = cookieTotal;

})



// TODO: Hook up event listeners for the rest of the buttons