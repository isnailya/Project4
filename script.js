

let strValueFrom = 'RUB';
let strValueTo = 'USD';

let fromButtons = document.querySelectorAll('.from_button');
let toButtons = document.querySelectorAll('.to_button');

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



function changeValuta (evt) {
   let x = evt.target;
   if(x.className == 'from_button')
   {
      selectValue = document.getElementById('selectValue_from');
      selectValue.style.background = "rgba(0,0,0,0.6)";
      let a = document.querySelectorAll('.from_button');
      a.forEach((item)=>{
      item.style.background = "rgba(0,0,0,0.6)"
      strValueFrom = x.innerText;

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

   if(x.className == 'to_button')
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

   evt.target.style.background =  "rgba(230,0,0,0.6)";

   

   if(evt.target.className == 'from_button')
   {
      left_selectorIsActive = false;
   }
   else{
      right_selectorIsActive = false;
   }
   //selectorIsActive = false; right_selectorIsActive
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
    

 //let leftSelectorMemory;
      if(!right_selectorIsActive&&!left_selectorIsActive){
        //let a = document.querySelectorAll('.from_button');
         a.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";

            if(item.innerText == strValueTo)
            {
               item.style.background = "rgba(255,0,0,0.6)";
               valueFromMemory = strValueFrom;
               strValueFrom = strValueTo;
               //leftTextMemory = document.querySelector('.left_input').value;
               //document.querySelector('.left_input').value = document.querySelector('.right_input').value;
            }
         });
      
      
        // let b = document.querySelectorAll('.to_button');
         b.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";

         if(item.innerText == valueFromMemory)
         {
            item.style.background = "rgba(255,0,0,0.6)";
            strValueTo = valueFromMemory;
            //document.querySelector('.right_input').value=leftTextMemory;
         }
         });
         return;
      }

      if(right_selectorIsActive&&!left_selectorIsActive){

         //let a = document.querySelectorAll('.to_button');
         b.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";

            if(item.innerText == strValueFrom)
            {
               item.style.background = "rgba(255,0,0,0.6)";
               valueFromMemory = strValueTo;
               strValueTo = strValueFrom;
               //leftTextMemory = document.querySelector('.left_input').value;
               //document.querySelector('.left_input').value = document.querySelector('.right_input').value;
            }
         });

         selector_right.style.background = "rgba(0,0,0,0.6)";
         //let b = document.querySelectorAll('.from_button');
               a.forEach((item)=>{
                  item.style.background = "rgba(0,0,0,0.6)";
               });

             selector_left.style.background = "rgba(255,0,0,0.6)";
               // if (left_selectorIsActive)
               // leftTextMemory =  strValueFrom;
               // else
               selector_left.style.background = "rgba(255,0,0,0.6)";
               selector_left.selectedIndex = selector_right.selectedIndex;
               strValueFrom = valueFromMemory;

                right_selectorIsActive = false;
                left_selectorIsActive = true;
                return;
      }

      if(!right_selectorIsActive&&left_selectorIsActive){

         //let a = document.querySelectorAll('.to_button');
         a.forEach((item)=>{
            item.style.background = "rgba(0,0,0,0.6)";

            if(item.innerText == strValueTo)
            {
               item.style.background = "rgba(255,0,0,0.6)";
               valueFromMemory = strValueTo;
               strValueTo = strValueFrom;
               //leftTextMemory = document.querySelector('.left_input').value;
               //document.querySelector('.left_input').value = document.querySelector('.right_input').value;
            }
         });
         selector_left.style.background = "rgba(0,0,0,0.6)";
         //let b = document.querySelectorAll('.from_button');
               b.forEach((item)=>{
                  item.style.background = "rgba(0,0,0,0.6)";
               });

             //selector_left.style.background = "rgba(255,0,0,0.6)";
               // if (left_selectorIsActive)
               // leftTextMemory =  strValueFrom;
               // else
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


// function getCurrentExchange () {
//   fetch(getNewLink(strValueFrom,strValueTo))
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(json) {
//     console.log(json);
//     return json;
//   });
// return x;
// }
// setTimeout(function() {
//    let element = document.getElementById('loading');
//    element.classList += "hidden";
//  }, 2000)

function calculateExchange_left()
{
  // let errorBrat = false;
 
//   fetch('https://ratesapi.io/documentation/').catch((error) => {
//       alert('Mistake');
//       errorBrat = true;
//    });


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
  .catch((error) => {
     alert('Mistake');
  });
  
   
}



function calculateExchange_right()
{
   fetch(getNewLink(strValueTo,strValueFrom))
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    //console.log(json);
    //calculator(Object.values(json.rates));
    let rightVal = document.querySelector('.right_input').value;
    document.querySelector('.left_input').value = Object.values(json.rates)*rightVal;
    let valueL = document.getElementById('value_l');
    valueL.innerHTML= '1 '+ strValueFrom +' =' + 1/ Object.values(json.rates) +' '  + strValueTo;
    let valueR = document.getElementById('value_r');
    valueR.innerHTML= '1 '+ strValueTo +' =' + Object.values(json.rates) +' ' + strValueFrom;
    //return json;
  });
}
//calculateExchange();
// function calculator(rate)
// {
//    let leftVal = document.querySelector('.left_input').value;
    //console.log(calculateExchange_left());

// }

const inputLeft = document.getElementById("left_input");
inputLeft.addEventListener('input', updateValue);
const inputRight = document.getElementById('right_input');
inputRight.addEventListener('input', updateValue);

inputRight.value=1;


// let target1 = new EventTarget({
//    id:'right_input'
// })

//create fake 'input' event
let event = new Event('input', {
   //target:{id:'right_input'},
   //target:target1,
   bubbles: true,
   cancelable: true,

});

//call event handler in first start (called once in start)
updateValue(event);

function updateValue(evt)
{
  
   let a =  evt.target;
if( a!=null ){
   evt.target.value = evt.target.value.replace(/,/g, '.');  
  if(a.id == 'left_input')
  {
   //calculateExchange()
   calculateExchange_left();

  // console.log(a.value);
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


function getNewLink (from,to) {
   //link = 'https://api.ratesapi.io/api/latest?base=RUB&symbols=EUR';
   return newlink = 'https://api.ratesapi.io/api/latest?base=' + from + '&symbols=' + to;
}

// let onclickFired = false;
// let onchangeFired = false;
function changeDesign() {
   // let selectValue = document.getElementById('selectValue_from');
   // if (onclickFired ==true && onchangeFired == false)
   // {
   // selectValue.style.background =  "rgba(0,0,0,0.6)";
   // onclickFired = false;
   // }
   // onclickFired = true;
}

left_selectorIsActive = false;
right_selectorIsActive = false;

function chooseValuta(evt) {
   //onchangeFired = true;
   //evt.style.background =  "rgba(0,0,0,0.6)";
   //let selectValue = document.getElementById('selectValue');
   //console.log( evt.value);

   // let a = document.querySelectorAll('.from_button');
   // a.forEach((item)=>{
   // item.style.background = "rgba(0,0,0,0.6)";

   //   if(item.innerText == selectValue.value)
   //   {
   //    item.style.background = "rgba(255,0,0,0.6)";
   //   }
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

   // let targetRight = new EventTarget();
   //    targetRight.id = 'right_input';
   //    let event2 = new Event('input', {
   //       bubbles: true,
   //       cancelable: true,
   //    });
   //    Object.defineProperty(event2, 'target', {writable: false, value: targetRight});
   //    updateValue(event2);

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

   // let targetLeft = new EventTarget();
   //    targetLeft.id = 'left_input';
   //    let event1 = new Event('input', {
   //       bubbles: true,
   //       cancelable: true,
   //    });
   //    Object.defineProperty(event1, 'target', {writable: false, value: targetLeft});
   //    updateValue(event1);

      let targetRight = new EventTarget();
      targetRight.id = 'right_input';
      let event2 = new Event('input', {
         bubbles: true,
         cancelable: true,
      });
      Object.defineProperty(event2, 'target', {writable: false, value: targetRight});
      updateValue(event2);
   
   }
   // if(evt.id == 'to_button')
   // {
   //    let a = document.querySelectorAll('.to_button');
   //    a.forEach((item)=>{
   //    item.style.background = "rgba(0,0,0,0.6)";
   //    strValueTo = x.innerText;
   // });
    


   // evt.target.style.background =  "rgba(230,0,0,0.6)";
   // console.log( x.innerText);

}
