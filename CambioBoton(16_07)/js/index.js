let seguirBtn = document.getElementById("botonSeguir");

seguirBtn.addEventListener('mouseover',()=>{
    seguirBtn.style.backgroundColor="steelblue";
    seguirBtn.style.color="white";
    seguirBtn.style.border="solid 2px black";
})

seguirBtn.addEventListener('mouseout',()=>{
    seguirBtn.style.backgroundColor="#ffffff";
    seguirBtn.style.color="steelblue";
    seguirBtn.style.border="solid 2px steelblue";
})

function presionar(seguirBtn){
    //al presionar seguir, se vuelve siguiendo
    seguirBtn.addEventListener('click',()=>{

        if(seguirBtn.innerText==='SEGUIR'){
                seguirBtn.innerText='SIGUIENDO';
                     
            }else{
                //Al presionar de nuevo, se deja de seguir
                seguirBtn.addEventListener('mouseover',()=>{
                    seguirBtn.style.backgroundColor="steelblue";
                    seguirBtn.style.color="white";
                    seguirBtn.style.border="solid 2px black";
                    seguirBtn.innerText="SEGUIR";
                }) 
                seguirBtn.addEventListener('mouseout',()=>{
                    seguirBtn.style.backgroundColor="white";
                    seguirBtn.style.color="steelblue";
                    seguirBtn.style.border="solid 2px steelblue";
                    seguirBtn.innerText="SEGUIR";
                })   
             }
             //Al estar siguiendo, poner encima de mouse, pone el efecto dejar de seguir
             if(seguirBtn.innerText==='SIGUIENDO'){
                seguirBtn.addEventListener('mouseover',()=>{
                    seguirBtn.style.backgroundColor="#FF2400";
                    seguirBtn.style.color="#fa8072";
                    seguirBtn.style.border="solid 2px #D30000";
                    seguirBtn.innerText="DEJAR DE SEGUIR";
                })  
                //Se le da el efecto de hacer click
                seguirBtn.addEventListener('click',()=>{
                    seguirBtn.style.backgroundColor="Blue";
                    seguirBtn.style.color="white";
                    seguirBtn.style.border="solid 2px black";
                })     
                  seguirBtn.addEventListener('mouseout',()=>{
                        seguirBtn.style.backgroundColor="white";
                        seguirBtn.style.color="steelblue";
                        seguirBtn.innerText="SIGUIENDO";
                        seguirBtn.style.border="solid 2px steelblue";
                    })  
            }
    })
    
}
presionar(seguirBtn);