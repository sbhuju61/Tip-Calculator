 //input TextBox
 var billTextBox = document.getElementById("billTextBox");
 var tipTextBox = document.getElementById("tipTextBox");
 var numPeopleTextBox = document.getElementById("numPeopleTextBox");
 var classTextBox = document.getElementsByClassName("textBox");
 //Display Section
 var tipSection = document.getElementById("tip");
 var billSection = document.getElementById("total");
 // Minus and Plus Button for textbox
 var minusTip = document.getElementById("minusTip");
 var plus = document.getElementById("plus");
 var minusPeopleNum = document.getElementById("minusPeopleNum");
 var plusPeopleNum = document.getElementById("plusPeopleNum");
 //Event handler for Minus and Plus buttons   
 minusTip.addEventListener("click", function () {
     decreaseNum(tipTextBox, 0);
     });
 plus.addEventListener("click", function () {
     increaseNum(tipTextBox, 100)
 });
 minusPeopleNum.addEventListener("click", function (){
     decreaseNum(numPeopleTextBox, 1);
 });
 plusPeopleNum.addEventListener("click", function (){
     increaseNum(numPeopleTextBox, 1000);
 });
 

 function decreaseNum (element, min){
     if (Number(element.value) > min){
         element.value = Number(element.value) - 1;
     }
 }

 function increaseNum (element, max){
     if (Number(element.value) < max){
     element.value = Number(element.value) + 1;
     }
 }

 // Prevent bad user input
 function onChangeOfValue(element, min, max) {
   var oldValue = element.defaultValue;
   var newValue = element.value;
   if (Number(newValue) >= min && Number(newValue) <= max) {
     element.defaultValue = newValue;
   } else {
     element.value = element.defaultValue;
   } 
 }

 //updating tip and bill section javacript
 for (var i = 0; i < classTextBox.length; i++){
     classTextBox[i].addEventListener("change", updateTipAndBillSection );
 }
 
//updating the input text box and display after if there is a new input in any of the textbox.
 function updateTipAndBillSection (){
     onChangeOfValue(tipTextBox, 0, 100);
     onChangeOfValue(numPeopleTextBox, 1, 1000);
 
     tipTextBox.value = Math.round((tipTextBox.value));
     numPeopleTextBox.value = Math.round((numPeopleTextBox.value));
     
    var oldValue = billTextBox.defaultValue;
    var newValue = billTextBox.value;

   if(hasNumber(billTextBox.value)){
     billTextBox.defaultValue = newValue;
   } else {
     billTextBox.value = billTextBox.defaultValue;
   } 
     
     var removeAlpha = billTextBox.value.replace(/[^\d.-]/g, '');
     billTextBox.value = parseFloat(removeAlpha).toFixed(2);

     tipSection.innerHTML = calculateTip ().toFixed(2);
     billSection.innerHTML = calculateTotal ().toFixed(2);
 }
 //using javascript test function to see if the input has numbers
 function hasNumber(myString) {
     return /\d/.test(myString);
 }
 function calculateTip (){
  
     return ((Number(billTextBox.value) * Number(tipTextBox.value)) / 100) / Number(numPeopleTextBox.value);
     
 }
 function calculateTotal (){
     return ( (calculateTip() * Math.floor(Number(numPeopleTextBox.value))) + Number(billTextBox.value) ) / Number(numPeopleTextBox.value);
 }