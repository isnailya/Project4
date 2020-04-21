// global var for storing valuta 
let strValueFrom = 'RUB';
let strValueTo = 'USD';

let fromButtons = document.querySelectorAll('.from_button');
let toButtons = document.querySelectorAll('.to_button');

//setup start valuta (RUB and USD turn lights on)
fromButtons.forEach((item)=> {
   item.addEventListener('click',changeValuta);
   if (item.innerText == strValueFrom)
   item.style.background =  "rgba(230,0,0,0.6)";
})

toButtons.forEach((item)=> {
   item.addEventListener('click',changeValuta);
   if (item.innerText == strValueTo)
   item.style.background =  "rgba(230,0,0,0.6)";
})

/// function that change valuta with button
function changeValuta (evt) {
   let x = evt.target;
   let similar = false;
   if(x.className == 'from_button')
   {
      if(x.innerText != strValueTo)
      {
      //turn of selector
      selectValue = document.getElementById('selectValue_from');
      selectValue.style.background = "rgba(0,0,0,0.6)";

      let a = document.querySelectorAll('.from_button');
      a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)"
      strValueFrom = x.innerText;
////// create input event for updateValue event handler function
      let targetLeft = new EventTarget();
      targetLeft.id = 'left_input';
      let event1 = new Event('input', {
         bubbles: true,
         cancelable: true,
      });
      Object.defineProperty(event1, 'target', {writable: false, value: targetLeft});
      updateValue(event1);
   });
   }
   else{
      alert('similar values');
      similar = true;
    }
   }

   if(x.className == 'to_button')
   {
      if(x.innerText != strValueFrom)
      {
      selectValue = document.getElementById('selectValue_to');
      selectValue.style.background = "rgba(0,0,0,0.6)";
      let a = document.querySelectorAll('.to_button');
      a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";
      strValueTo = x.innerText;
      let targetRight = new EventTarget();
      targetRight.id = 'right_input';
      let event2 = new Event('input', {
         bubbles: true,
         cancelable: true,
      });
      Object.defineProperty(event2, 'target', {writable: false, value: targetRight});
      updateValue(event2);
   });
   }
   else{
     alert('similar values');
    similar = true;
   }
   }

   if(!similar)
   evt.target.style.background =  "rgba(230,0,0,0.6)";
//////// activate and deactivate selector
   if(evt.target.className == 'from_button')
   {
      left_selectorIsActive = false;
   }
   else if (evt.target.className == 'to_button')
   {
      right_selectorIsActive = false;
   }
   console.log( x.innerText);

}

let arrow = document.getElementById('arrow_right');
arrow.addEventListener('click',changeArrow);

function changeArrow()
{
 let valueFromMemory; // memory for selected button
 let valueFromSelectorIndex; // memory for selector index
 let memoryForInput ;
 let memoryForExchange;
   selector_left = document.getElementById('selectValue_from') ;
  selectorOptions_left = selector_left.children;

  selector_right = document.getElementById('selectValue_to');
  selectorColection_right = selector_right.children;

  let a = document.querySelectorAll('.from_button');
  let b = document.querySelectorAll('.to_button');

  memoryForInput = document.getElementById('right_input').value;
  document.getElementById('right_input').value = document.getElementById('left_input').value;
  document.getElementById('left_input').value = memoryForInput;

  memoryForExchange =  document.getElementById('value_r').innerText;
  document.getElementById('value_r').innerText =  document.getElementById('value_l').innerText;
  document.getElementById('value_l').innerText = memoryForExchange;
    

 
if(!right_selectorIsActive&&!left_selectorIsActive){
   a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";

      if(item.innerText == strValueTo)
      {
         item.style.background = "rgba(255,0,0,0.6)";
         valueFromMemory = strValueFrom;
         strValueFrom = strValueTo;
      }
   });

  
   b.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";

   if(item.innerText == valueFromMemory)
   {
      item.style.background = "rgba(255,0,0,0.6)";
      strValueTo = valueFromMemory;
   }
   });
   return;
}

   if(right_selectorIsActive&&!left_selectorIsActive){

   b.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";

      if(item.innerText == strValueFrom)
      {
         item.style.background = "rgba(255,0,0,0.6)";
         valueFromMemory = strValueTo;
         strValueTo = strValueFrom;
      }
   });

   selector_right.style.background = "rgba(0,0,0,0.6)";
   a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";
   });

   selector_left.style.background = "rgba(255,0,0,0.6)";
   selector_left.style.background = "rgba(255,0,0,0.6)";
   selector_left.selectedIndex = selector_right.selectedIndex;
   strValueFrom = valueFromMemory;

      right_selectorIsActive = false;
      left_selectorIsActive = true;
      return;
}

if(!right_selectorIsActive&&left_selectorIsActive){

   a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";

      if(item.innerText == strValueTo)
      {
         item.style.background = "rgba(255,0,0,0.6)";
         valueFromMemory = strValueTo;
         strValueTo = strValueFrom;
      }
   });
   selector_left.style.background = "rgba(0,0,0,0.6)";
         b.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";
         });
         selector_right.style.background = "rgba(255,0,0,0.6)";
         selector_right.selectedIndex = selector_left.selectedIndex;
         strValueFrom = valueFromMemory;

         right_selectorIsActive = true;
         left_selectorIsActive = false;
         return;
   }

      if (right_selectorIsActive && left_selectorIsActive) {

        // turn off all buttons Graphics
         a.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";
         });
         
         b.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";
         });      

         valueFromSelectorIndex = selector_left.selectedIndex;
         selector_left.selectedIndex = selector_right.selectedIndex;
         valueFromMemory = strValueFrom;
         strValueFrom = strValueTo;

         selector_right.selectedIndex = valueFromSelectorIndex;
         strValueTo = valueFromMemory;
         return;

      }

}



function calculateExchange_left()
{

timeout().then(currencies => {
   console.log(currencies);
   let element = document.getElementById('loading');
   //if(element.classList=='hidden')
   element.style.visibility    = "hidden";
   });


fetch(getNewLink(strValueFrom,strValueTo))
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    //console.log(json);
    //calculator(Object.values(json.rates));
    let leftVal = document.querySelector('.left_input').value;
    document.querySelector('.right_input').value = Object.values(json.rates)*leftVal;
    let valueL = document.getElementById('value_l');
    valueL.innerHTML= '1 '+ strValueFrom +' =' + Object.values(json.rates) +' ' + strValueTo;
    let valueR = document.getElementById('value_r');
    valueR.innerHTML= '1 '+ strValueTo +' =' + 1/Object.values(json.rates) +' '  + strValueFrom;
    //return json;
  })
  .then()
  .catch((error) => {
     alert('Mistake');
  });  
}

function timeout() {
   let element = document.getElementById('loading');
   element.style.visibility='visible';
   return new Promise((resolve, reject) => {
      setTimeout(() => resolve(2),300);
    })
 }

function calculateExchange_right()
{

   timeout().then(currencies => {
      console.log(currencies);
      let element = document.getElementById('loading');
      //if(element.classList=='hidden')
      element.style.visibility    = "hidden";
      });

   fetch(getNewLink(strValueTo,strValueFrom))
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let rightVal = document.querySelector('.right_input').value;
    document.querySelector('.left_input').value = Object.values(json.rates)*rightVal  ; //toFixed(3); 
    let valueL = document.getElementById('value_l');
    valueL.innerHTML= '1 '+ strValueFrom +' =' + 1/ Object.values(json.rates) +' '  + strValueTo;
    let valueR = document.getElementById('value_r');
    valueR.innerHTML= '1 '+ strValueTo +' =' + Object.values(json.rates) +' ' + strValueFrom;
    //return json;
  });
}

const inputLeft = document.getElementById("left_input");
inputLeft.addEventListener('input', updateValue);
const inputRight = document.getElementById('right_input');
inputRight.addEventListener('input', updateValue);
inputRight.value=1;

//create fake 'input' event
let event = new Event('input', {
   bubbles: true,
   cancelable: true,

});



//call event handler in first start (called once in start)
updateValue(event);

function updateValue(evt)
{
  
   let a =  evt.target;
   //error handling with if()
 if( a != null ){
  if(evt.target.value!=null)
   evt.target.value = evt.target.value.replace(/,/g, '.');  /// replace ',' to dot
  if(a.id == 'left_input')
  {

   calculateExchange_left();
  }
  if(a.id == 'right_input')
  {
  // console.log(a.value);
  calculateExchange_right();
  }
  
  if (isNaN(evt.target.value)) 
  {
   evt.target.value ='';
  }
}
   else {
   calculateExchange_right();
   }
}

// get a new link 
function getNewLink (from,to) {
   //link = 'https://api.ratesapi.io/api/latest?base=RUB&symbols=EUR';
   return newlink = 'https://api.ratesapi.io/api/latest?base=' + from + '&symbols=' + to;
}



left_selectorIsActive = false;
right_selectorIsActive = false;

// choose valuta by select
function chooseValuta(evt) {

   selectorIsActive = false;
   if(evt.id == 'selectValue_from')
   {
      let a = document.querySelectorAll('.from_button');
      a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)";
      if(item.innerText == evt.value)
      item.style.background =  "rgba(230,0,0,0.6)";
      selectorIsActive = true;

      
   });
   strValueFrom = evt.value;
   evt.style.background =  "rgba(230,0,0,0.6)";
   left_selectorIsActive = true;


   let targetLeft = new EventTarget();
   targetLeft.id = 'left_input';
   let event1 = new Event('input', {
      bubbles: true,
      cancelable: true,
   });
   Object.defineProperty(event1, 'target', {writable: false, value: targetLeft});
   updateValue(event1);

   }


   if(evt.id == 'selectValue_to')
   {
      let a = document.querySelectorAll('.to_button');
      a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)"
      if(item.innerText == evt.value)
      item.style.background =  "rgba(230,0,0,0.6)";
   });
   
   strValueTo = evt.value;
   evt.style.background =  "rgba(230,0,0,0.6)";
   right_selectorIsActive = true;



      let targetRight = new EventTarget();
      targetRight.id = 'right_input';
      let event2 = new Event('input', {
         bubbles: true,
         cancelable: true,
      });
      Object.defineProperty(event2, 'target', {writable: false, value: targetRight});
      updateValue(event2);
   
   }
}
