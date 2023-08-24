// const box = document.querySelector(".carrossel");
// const imagens = document.querySelectorAll(".carrossel img");

// let contador = 0;

// function slider(){
//     contador++;

//     if (contador > imagens.length - 1) {
//         contador = 0;
//     }

//     box.style.transform = `translateX(${-contador * 1250}px)`;
// }

// setInterval(slider, 3000);


// // // Carrossel Golf
// // var radio =  document.querySelector('.manual-btn')
// // var cont = 1

// // document.getElementById('radio1').checked = true

// // function proximaImg(){
// //     cont ++

// //     if(cont > 2){
// //         cont = 1
// //     }

// //     document.getElementById('radio'+cont).checked = true
// // }


// Painel

window.sr = ScrollReveal({ reset: true });

sr.reveal('.area-1', {
    rotate: {x: 100, y: 100, z: 0},
    duration: 2000,
});
