const button =document.getElementById("button");
console.log(button)
// const box =(Math.floor(Math.random()*3+1));
// console.log(box)
// const fun =()=>{
//     if(box==1){
//         button.style.background="green";

//     }
//    else if(box==2){
//         button.style.background="green";
        
//     }  
//   else{
//         button.style.background="green";
        
//     }
// }
button.addEventListener("click",()=>{ 
    button.style.backgroundColor="chartreuse";
},false)
