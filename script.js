
const screen = document.querySelector('.screen');

const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');
const b5 = document.querySelector('.b5');
const b6 = document.querySelector('.b6');
const b7 = document.querySelector('.b7');
const b8 = document.querySelector('.b8');
const b9 = document.querySelector('.b9');

const buttonReset = document.querySelector('.button');

let piece = true;


function buttonClick(value, name) {
    p2();
    if(value === '') {
        placeSymbol(turn(), name); 
    }else if(value === 'reset'){
        reset();
    }
    if(checkWin() != null || checkDraw() != null){
        over();
    }
    piece = !piece;

}

function placeSymbol(symbol, name) {

    if(name === "b1"){
        b1.innerText = symbol;
    }else if(name === "b2"){
        b2.innerText = symbol;
    }else if(name === "b3"){
        b3.innerText = symbol;
    }else if(name === "b4"){
        b4.innerText = symbol;
    }else if(name === "b5"){
        b5.innerText = symbol;
    }else if(name === "b6"){
        b6.innerText = symbol;
    }else if(name === "b7"){
        b7.innerText = symbol;
    }else if(name === "b8"){
        b8.innerText = symbol;
    }else if(name === "b9"){
        b9.innerText = symbol; 
    }

}

function reset(){
    piece = false;
    screen.innerText = "Tic Tac Toe";
    b1.innerText = '';
    b2.innerText = '';
    b3.innerText = '';
    b4.innerText = '';
    b5.innerText = '';
    b6.innerText = '';
    b7.innerText = '';
    b8.innerText = '';
    b9.innerText = '';

}

function turn() {

    if (piece) {
        return 'X';
    }
    else {
        return "0";
    }

}

function checkWin(){

    if((b1.innerText === 'X' && b2.innerText === 'X' && b3.innerText === 'X')||
    (b1.innerText === 'X' && b4.innerText === 'X' && b7.innerText === 'X')||
    (b3.innerText === 'X' && b6.innerText === 'X' && b9.innerText === 'X')||
    (b4.innerText === 'X' && b5.innerText === 'X' && b6.innerText === 'X')||
    (b7.innerText === 'X' && b8.innerText === 'X' && b9.innerText === 'X')||
    (b2.innerText === 'X' && b5.innerText === 'X' && b8.innerText === 'X')||
    (b1.innerText === 'X' && b5.innerText === 'X' && b9.innerText === 'X')||
    (b3.innerText === 'X' && b5.innerText === 'X' && b7.innerText === 'X')){
        screen.innerText = "X wins!";
        return "X wins!";
    }
    else if((b1.innerText === '0' && b2.innerText === '0' && b3.innerText === '0')||
    (b1.innerText === '0' && b4.innerText === '0' && b7.innerText === '0')||
    (b3.innerText === '0' && b6.innerText === '0' && b9.innerText === '0')||
    (b4.innerText === '0' && b5.innerText === '0' && b6.innerText === '0')||
    (b7.innerText === '0' && b8.innerText === '0' && b9.innerText === '0')||
    (b2.innerText === '0' && b5.innerText === '0' && b8.innerText === '0')||
    (b1.innerText === '0' && b5.innerText === '0' && b9.innerText === '0')||
    (b3.innerText === '0' && b5.innerText === '0' && b7.innerText === '0')){
        screen.innerText = "0 wins!";
        return "0 wins!";
    }
    return null;

}

function checkDraw(){
    if(b1.innerText !== '' && b2.innerText !== '' && b3.innerText !== '' 
    && b4.innerText !== '' && b5.innerText !== '' && b6.innerText !== ''
    && b7.innerText !== '' && b8.innerText !== '' && b9.innerText !== ''){
        screen.innerText = "Draw!";
        return "Draw!"
    }
}

function init() {
    b1.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b2.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b3.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b4.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b5.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b6.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });


    b7.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b8.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    b9.addEventListener('click', function (event) {
            buttonClick(event.target.innerText, event.target.name);
        });

    buttonReset.addEventListener('click', function (event) {
        buttonClick(event.target.innerText, event.target.name);
    });

    


}

function over(){
    if(b1.innerText === ""){
        b1.innerText = ' ';
    }else if(b2.innerText === ""){
        b2.innerText = ' ';
    }else if(b3.innerText === ""){
        b3.innerText = ' ';
    }else if(b4.innerText === ""){
        b4.innerText = ' ';
    }else if(b5.innerText === ""){
        b5.innerText = ' ';
    }else if(b6.innerText === ""){
        b6.innerText = ' ';
    }else if(b7.innerText === ""){
        b7.innerText = ' ';
    }else if(b8.innerText === ""){
        b8.innerText = ' ';
    }else if(b9.innerText === ""){
        b9.innerText = ' '; 
    }
}

init();