let display = document.getElementById('display');


let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( buttons => {
    buttons.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
                case '←':
                    display.innerText = display.innerText.slice(0, -1);
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch{
                        display.innerText = 'Syntax Error!'
                    }
                    break;
            default:
                display.innerText += e.target.innerText;    
        }

    })
})
