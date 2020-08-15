let buffer ='0';
let runningtotal = 0;
let prevoperator = null;

const screen = document.querySelector(".calc-screen");

//function two {buttonclick();}
function buttonclick(value){
    if(isNaN(value)){
       handlesymbol(value);
    }else{
        handlenumber(value);
    }
    screen.innerText = buffer;
}
//function three{handlenumber();}
function handlenumber(numberstring){
    if(buffer == '0'){
        buffer = numberstring;
    } else{
        buffer += numberstring;
    }
  }
  
//function four {handlesymbl();}
function handlesymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runningtotal = 0;
            break;

        case '=':
            if(prevoperator === null){
                return;
            }else{
                calcoperation(parseInt(buffer));
            }
            prevoperator = null;
            buffer =runningtotal;
            runningtotal = 0;
            break;

            case '←':
            if(buffer.length === 1){
                buffer = 0;
            }else{
                buffer = buffer.substring(0,buffer.length - 1);
            }
            break;
        case '+':
        case '-':
        case '×':
        case '÷':
            handlemath(symbol);
            break;
    }
}
//functioon five{handlemath();}
function handlemath(symbol){
    if(buffer === '0'){
        return;
    }
    let intbuffer = parseInt(buffer);
    if(runningtotal === 0){
        runningtotal = intbuffer;
    }else{
        calcoperation(intbuffer);
    }
    prevoperator = symbol;
    buffer = '0';
}
//function siz{calcoperation();}
function calcoperation(intbuffer){
    switch(prevoperator){
        case '+':
            runningtotal += intbuffer;
            break;
        case '-':
            runningtotal -= intbuffer;
             break;
        case '×':
            runningtotal *= intbuffer;
            break;
        case '÷':
            runningtotal /= intbuffer;
            break;
    }
}

// function one{init();}
function init(){
    document.querySelector('.calc-buttons').addEventListener('click',function(event){
        buttonclick(event.target.innerText);
    });
};
init();

