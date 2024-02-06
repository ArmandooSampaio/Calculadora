let runnigTotal = 0;
let buffer = '0';
let previusOperator;

const screen = document.querySelector('.screen');

function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer = '0';
            runnigTotal = 0;
            break;
        case '=':
            if(previusOperator === null){
                return
            }
            operation(parseInt(buffer));
            previusOperator = null;
            buffer = runnigTotal;
            runnigTotal = 0;
            break;
        case '←':
            if(buffer.length === 1){
                buffer = '0';
            }else{
                buffer = buffer.slice(0, -1);
            }
            break;
        case'+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;

    }
}
function handleMath(symbol){
    if(buffer === '0'){
        return;
    }

    const intBuffer = parseInt(buffer);

    if(runnigTotal === 0){
        runnigTotal = intBuffer;
    }else{
        operation(intBuffer);
    }
    previusOperator = symbol;
    buffer = '0';
}

function operation(intBuffer){
    if(previusOperator === '+'){
        runnigTotal +=intBuffer;
    }else if( previusOperator ==='−'){
        runnigTotal -= intBuffer;
    }else if(previusOperator ==='×'){
        runnigTotal *= intBuffer;
    }else{
        runnigTotal /= intBuffer;
    }
}

function handleNumber(num){
    if(buffer === '0'){
        buffer = num;
    }else{
        buffer += num;
    }
}

function init(){
    document.querySelector('.calc-buttons').
    addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })


}

init();

