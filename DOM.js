const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const inputFields = document.querySelectorAll('.input');
const priceInputFeilds = document.querySelectorAll('.total-price');


const arr = [inputFields.item(0), inputFields.item(1), inputFields.item(2)]
const pricesArr = [priceInputFeilds.item(0), priceInputFeilds.item(1), priceInputFeilds.item(2)]


minusButtons.forEach((btn)=>{
  btn.addEventListener('click', function(){
    for (inp of arr){
      if (btn.id === inp.id){
        if(inp.value > 0){
          inp.value = Number(inp.value);
          inp.value -= 1;
          for (priceInp of pricesArr){
            if(btn.id === priceInp.id){
            priceInp.value = Number(priceInp.value);
              if(inp.value > 0)
              priceInp.value = Number(priceInp.classList[1]) * inp.value 
            }
          }
        };
      };
    };
  });
});

plusButtons.forEach((btn)=>{
  btn.addEventListener('click', function(){
    for (inp of arr){
      if (btn.id === inp.id){
        let inputValue = Number(inp.value)
        inp.value = inputValue + 1;
        console.log(inp)
        for (priceInp of pricesArr){
          if(btn.id === priceInp.id){
            priceInp.value = Number(priceInp.value);
            if(inp.value > 0)
              priceInp.value = Number(priceInp.classList[1]) * inp.value
          }
        }
      };
    };
  });
});