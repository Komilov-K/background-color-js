let elInp = document.querySelector('.inp')
let elBtn = document.querySelector('.btn')
let elBi = document.querySelector('.bi')
let result = document.querySelector('.result')


 // этот код изменяет цвет background-color //

elBtn.addEventListener('click', ()=>{
    let inpValue = elInp.value
    let styleBgc = inpValue;
    
    result.style.backgroundColor = styleBgc;
    elInp.value =""
    console.log(inpValue);
})





// elBtn.addEventListener('click', ()=>{ 
//     // этот код добавляет новый class ПРИ КЛИКЕ и удаляет новый class //
//     elInp.classList.toggle('newclass');
    
   
    
// })
// elBtn.addEventListener('click', ()=>{ 
//     // этот код изменяет  class ПРИ КЛИКЕ и добавляет новый class в обратном клике вернет старай класс //
//     if(elInp.classList.contains('inp') ){
//         elInp.classList.remove('inp')
//         elInp.classList.add('text') 
//     }else if(elInp.classList.contains('text')) {
//         elInp.classList.remove('text')
//         elInp.classList.add('inp')
//     }
    
   
    
// })

// // этот код изменяет type инпута //

// let statuss = false
// elBtn.addEventListener('click', ()=> {
//     if(statuss == false ){
//         elInp.type = 'text'
//         elBi.classList = 'bi bi-eye-slash'
//     }else {
//         elInp.type = 'password'
//         elBi.classList = 'bi bi-eye'
//     }
//     statuss = !statuss
// })



