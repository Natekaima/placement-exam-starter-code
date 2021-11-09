// First, tell us your name
let yourName = "Nathan Kaimathiri" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0   // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
var total = 0;

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//Code to update total 
function updateTotal(){
    if(total >= 0)
    document.getElementById('qty-total').textContent = gb + cc + sugar;
}

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
   
    if(gb >= 0)
    (
        gb++
    )
    gbQuantitiy = document.getElementById('qty-gb');
    gbQuantitiy.textContent = gb;
    totalgbQuantity = document.getElementById('qty-total');
    total = total + 1;
    totalgbQuantity.textContent = total;

});

//Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click',function(){

if(gb > 0)
(
    gb -- 
)
gbQuantity = document.getElementById('qty-gb');
gbQuantitiy.textContent = gb;
totalgbQuantity = document.getElementById('qty-total');
total = total -1;
totalgbQuantity.textContent =total;
})
//Event listener for clicks on the "+" button for Chocolate Chip Cookies 
document.getElementById('add-cc').addEventListener('click', function() {
   
    if(cc >= 0)
    (
        cc++
    )
    ccQuantitiy = document.getElementById('qty-cc');
    ccQuantitiy.textContent = cc;
    totalccQuantity = document.getElementById('qty-total');
    total = total + 1;
    totalccQuantity.textContent = total;

})
//Event listener for clicks on the "-" button for the Chocolate Chip cookies 
document.getElementById('minus-cc').addEventListener('click',function(){

    if(cc > 0)
    (
        cc -- 
    )
    ccQuantity = document.getElementById('qty-cc');
    ccQuantitiy.textContent = cc;
    totalccQuantity = document.getElementById('qty-total');
    total = total -1;
    totalccQuantity.textContent =total;
    })
//Event listener for clicks on the "+" button for the Sugar cookies 
    document.getElementById('add-sugar').addEventListener('click', function() {
   
        if( sugar >= 0)
        (
            sugar++
        )
        sugarQuantitiy = document.getElementById('qty-sugar');
        sugarQuantitiy.textContent = sugar;
        totalsugarQuantity = document.getElementById('qty-total');
        total = total + 1;
        totalsugarQuantity.textContent = total;
    
    })
//Event listener for clicks on the "-" button for the Sugar Cookies 
    document.getElementById('minus-sugar').addEventListener('click', function() {
   
        if( sugar > 0)
        (
            sugar--
        )
        sugarQuantitiy = document.getElementById('qty-sugar');
        sugarQuantitiy.textContent = sugar;
        totalsugarQuantity = document.getElementById('qty-total');
        total = total -1;
        totalsugarQuantity.textContent = total;
    
    })
