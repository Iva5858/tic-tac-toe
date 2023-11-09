

let num = 0;



function p2(){
    if(!piece && (checkWin() === null || checkDraw() === null)){
        num = Math.floor(Math.random() * (9 - 1 + 1) + 1)
        let symbol = turn();
        setTimeout(function()
            {
                
                if(num === 1){
                    if(b1.innerText === ''){
                        b1.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 2){
                    if(b2.innerText === ''){
                        b2.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 3){
                    if(b3.innerText === ''){
                        b3.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 4){
                    if(b4.innerText === ''){
                        b4.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 5){
                    if(b5.innerText === ''){
                        b5.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 6){
                    if(b6.innerText === ''){
                        b6.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 7){
                    if(b7.innerText === ''){
                        b7.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 8){
                    if(b8.innerText === ''){
                        b8.innerText = symbol;
                    }else{
                        p2();
                    }
                }else if(num === 9){
                    if(b9.innerText === ''){
                        b9.innerText = symbol;
                    }else{
                        p2();
                    }
                }
            }, 500
       )
        
        
    }
}

init();