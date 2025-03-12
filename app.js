
let buttons= document.querySelectorAll("button");
let input= document.querySelector("input");

for(let button of buttons)
    { 
        button.addEventListener("click", function(e)
    {
       let btnText= e.target.innerText;
       if(btnText==="C")
        {
            input.value="";
        }
        else if(btnText=="+/-")
        {
        
              input.value= -(input.value);
            

        }
        else if(btnText==="=")
            {
                try{
               input.value= eval(input.value);
                }
                catch(err)
                {
                    input.value= "OOPS";
                }
            }
        else
        {
            input.value +=btnText;
        }    
    });

    }