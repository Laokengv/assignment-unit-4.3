console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item){    
   if (isFull() === false){
    basket.push(item); 
    console.log(item);
    return true;
} else { 
    return false;
    }
}
addItem('apple');
addItem('banana');
addItem('kiwi');
addItem('peach');
addItem('strawberry');
addItem('orange');



function listItems() {
    for ( let item of basket ) {
    console.log(item);
    } 
}
//listItems();


function empty() {
    while (basket.length > 0){
        basket.pop();       
    }
    console.log(basket);
}
empty();
//console.log(basket);


// ****STRETCH GOALS****



function isFull() {
    console.log(basket.length);
    console.log(maxItems);
    if (basket.length >= maxItems) {
        return true;
    } else {
        return false;
    }
}
// isFull();
// console.log(basket);
// console.log(isFull());



