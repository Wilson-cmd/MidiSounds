const controle = document.querySelectorAll('.controle-ajuste');
const estatisticas = document.querySelectorAll('[data-estatistica]')


const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elementoControle)=>{
    elementoControle.addEventListener('click', ()=>{  

        if(elementoControle.attributes[1].nodeValue === "subtrair"){
            elementoControle.parentElement.children[1].value --

            estatisticas.forEach((elementoEstatisticas)=>{
                elementoEstatisticas.textContent = 
                    parseInt(elementoEstatisticas.textContent) - 
                    pecas[elementoControle.attributes[2].nodeValue][elementoEstatisticas.attributes[1].value]
            })

        }else{
            elementoControle.parentElement.children[1].value ++

            estatisticas.forEach((elementoEstatisticas)=>{
                elementoEstatisticas.textContent = 
                    parseInt(elementoEstatisticas.textContent) + 
                    pecas[elementoControle.attributes[2].nodeValue][elementoEstatisticas.attributes[1].value]
            })

        }

       /* estatisticas.forEach((elementoEstatisticas)=>{
            elementoEstatisticas.textContent = 
                parseInt(elementoEstatisticas.textContent) + 
                pecas[elementoControle.attributes[2].nodeValue][elementoEstatisticas.attributes[1].value]
        })*/
    })
 
})


