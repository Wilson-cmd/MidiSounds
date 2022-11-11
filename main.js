/* FUNÇÃO PARA CADA TECLA

function pom(){
    document.getElementById('som_tecla_pom').play()
}

function clap(){
    document.getElementById('som_tecla_clap').play()
}

function tim(){
    document.getElementById('som_tecla_tim').play()
}

function puff(){
    document.getElementById('som_tecla_puff').play()
}

function splash(){
    document.getElementById('som_tecla_splash').play()
}

function toim(){
    document.getElementById('som_tecla_toim').play()
}

function psh(){
    document.getElementById('som_tecla_psh').play()
}

function tic(){
    document.getElementById('som_tecla_tic').play()
}

function tom(){
    document.getElementById('som_tecla_tom').play()
}


//ESTRUTURA WHILE

// while(i < teclado.length){
//     const som = teclado[i].classList[1];
//     teclado[i].onclick = ()=>{
//         tocar(`som_${som}`)
//     }
//     i++
// }


*/

const teclado = document.querySelectorAll('.tecla');

 function tocar(id){
     const elemento = document.querySelector(id);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }

    else{
        console.log(`Elemento: ${elemento} não identificado.`);
    }
     
 };

for(let i = 0; i < teclado.length; i++){
    const som = `#som_${teclado[i].classList[1]}`;

    teclado[i]  .onclick = ()=>{
        tocar(som)
    };

    teclado[i].onkeydown = (Evento)=>{
        if(Evento.code === 'Space' || Evento.code === 'Enter'){
            teclado[i].classList.add('ativa');
        }
       
       }
    
    teclado[i].onkeyup = ()=>{
        teclado[i].classList.remove('ativa');
       
        }

        
}