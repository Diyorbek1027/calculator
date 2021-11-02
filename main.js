let dipslay = document.querySelector("#display");
let buttons = Array.from(document.getElementsByClassName("button"));

// console.log(buttons)

buttons.map(button => 
    button.addEventListener("click",(e) =>{
        // console.log(e.target);
        switch(e.target.innerText){
            case "C":
                dipslay.innerText = '';
                break;
                case "=":
                  try{dipslay.innerText = eval(dipslay.innerText)
                }catch{
                    dipslay.innerText = "Error!";
                }
                break;
                case "←":
                    if(dipslay.innerText){
                        dipslay.innerText = dipslay.innerText.slice(0,1);
                    }
                    break;
                    default:
                        dipslay.innerText  +=e.target.innerText; 
                        
                        console.log(e.target);
        }
    }))