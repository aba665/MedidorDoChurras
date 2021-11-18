var adulto = window.document.querySelector("input#ad")
var crianca = window.document.querySelector("input#cr")
var horas = window.document.querySelector("input#hrs")
var carnead = 400
var carnecr = 200
var refriad = 1000
var refricr = 500 
var aguaad = 500
var aguacr = 250
var qtdhoras = 50 * horas.value

function Qtdcarne(){

    return ((carnead*adulto.value) + qtdhoras) + ((carnecr * crianca.value) + qtdhoras)

}

function Qtdrefri(){

    return ((refriad * adulto.value) + qtdhoras) + ((refricr * crianca.value) + qtdhoras)

}

function Qtdagua(){

    return ((aguaad * adulto.value) + qtdhoras) + ((aguacr * crianca.value) + qtdhoras)

}

function qtdCerveja(){
    let cerveja = 4
    let qthoras =  2
    return (cerveja * adulto.value) + ( qthoras * horas.value)
}


function Medir() {



        if(adulto.value.length == 0 && crianca.value.length == 0 && horas.value.length == 0){
            alert("[Erro] Digite os valores para continuar!")
        }else{
        
            if(Qtdcarne() >= 1000 && Qtdagua() >= 1000 && Qtdrefri() >= 1000){

                let img1 = document.createElement("img")
                img1.innerHTML = " "
                img1.setAttribute("src", "image/Meat.png")
                resultado.appendChild(img1)
        
                var totalcarne = Qtdcarne()
                totalcarne = totalcarne / 1000
        
                 var adu = document.createElement("p")
                adu.innerHTML = `A quantidade necessária de carne é ${totalcarne} kilo(s)`
                resultado.appendChild(adu)
                adu.style.color = `white`
        
                let img2 = document.createElement("img")
                img2.innerHTML = " "
                img2.setAttribute("src", "image/Water.png")
                resultado.appendChild(img2)
        
                var totalagua = Qtdagua()
                totalagua = totalagua / 1000
        
                var water = document.createElement("p")
                water.innerHTML = `A quantidade necessária de água é ${totalagua} litro(s)`
                resultado.appendChild(water)
                water.style.color = `white`
        
                let img3 = document.createElement("img")
                img3.innerHTML = " "
                img3.setAttribute("src", "image/Soda.png")
                resultado.appendChild(img3)
        
                var totalrefri = Qtdrefri()
                totalrefri = totalrefri / 1000
        
                var refri = document.createElement("p")
                refri.innerHTML = `A quantidade necessária de refrigerante é ${totalrefri} litro(s)`
                resultado.appendChild(refri)
                refri.style.color = `white`
        
                let img4 = document.createElement("img")
                img4.innerHTML = " "
                img4.setAttribute("src", "image/Beer.png")
                resultado.appendChild(img4)
        
                let beer = document.createElement("p")
                beer.innerHTML = `A quantidade necessária de cerveja é ${qtdCerveja()} copos`
                resultado.appendChild(beer)
                beer.style.color = `white`
        
        
            }else if(Qtdcarne() < 1000 || Qtdagua() < 1000 || Qtdrefri() < 1000){
                
                let img1 = document.createElement("img")
                img1.innerHTML = " "
                img1.setAttribute("src", "image/Meat.png")
                resultado.appendChild(img1)
        
                var adu = document.createElement("p")
                adu.innerHTML = `A quantidade necessária de carne é ${Qtdcarne()} gramas`
                resultado.appendChild(adu)
                adu.style.color = `white`
        
                let img2 = document.createElement("img")
                img2.innerHTML = " "
                img2.setAttribute("src", "image/Water.png")
                resultado.appendChild(img2)
        
                var water = document.createElement("p")
                water.innerHTML = `A quantidade necessária de água é ${Qtdagua()} mililitros`
                resultado.appendChild(water)
                water.style.color = `white`
        
                let img3 = document.createElement("img")
                img3.innerHTML = " "
                img3.setAttribute("src", "image/Soda.png")
                resultado.appendChild(img3)
        
                let refri = document.createElement("p")
                refri.innerHTML = `A quantidade necessária de refrigerante é ${Qtdrefri()} mililitros(s)`
                resultado.appendChild(refri)
                refri.style.color = `white`
        
                let img4 = document.createElement("img")
                img4.innerHTML = " "
                img4.setAttribute("src", "image/Beer.png")
                resultado.appendChild(img4)
        
                let beer = document.createElement("p")
                beer.innerHTML = `A quantidade necessária de cerveja é ${qtdCerveja()} copos`
                resultado.appendChild(beer)
                beer.style.color = `white`
        
            }
           setTimeout(function(){
            location.reload()
           },20000)
        }
        
            
 }