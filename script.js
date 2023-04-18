// function Odd(a){
//     if(a % 2 == 0){
//         return "Juft son"
//     }else if(a % 2 == 1){
//         return "Toq son"
//     };
// }
// console.log(Odd(11));



// 1-MISOL

// function Power(a,b,c,d,e){
//     console.log(a**3);
//     console.log(b**3);
//     console.log(c**3);
//     console.log(d**3);
//     console.log(e**3);
// }
// Power(1,2,3,4,5)

// 2-MISOL

// function Power(a,b,c){
//     console.log(a**2);
//     console.log(b**3);
//     console.log(c**4);
// }
// Power(2,3,4);


const piyodaTezlik = 3.6
const VelosipedTezlik = 20.1
const MoshinaTezlik = 70
const SamalyotTezlik = 800
var input = document.getElementById("input")
var Piyoda = document.getElementById("Piyoda")
var btn = document.getElementById("btn")
var Velosiped = document.getElementById("Velosiped")
var Moshina = document.getElementById("Moshina")
var Samalyot = document.getElementById("Samalyot")

btn.addEventListener("click",()=>{
    var res = input.value
    Piyoda.textContent = res / piyodaTezlik
    Velosiped.textContent = res /VelosipedTezlik
    Moshina.textContent = res /MoshinaTezlik
    Samalyot.textContent = res / SamalyotTezlik
})