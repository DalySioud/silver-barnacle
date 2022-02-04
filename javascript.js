let plus=document.querySelectorAll("#plus")
let moins=document.querySelectorAll("#moins")
let delBTN=document.querySelectorAll("#delete")
let like=document.querySelectorAll('.fa-heart')
let prix=document.querySelectorAll("h1")
let quantite=document.querySelectorAll("span")
let tot=document.querySelectorAll(".total")
console.log(quantite)

for(let i=0;i<plus.length;i++){
plus[i].addEventListener("click",function(){
plus[i].nextElementSibling.innerHTML++
totale()
})
console.log(plus[i].nextElementSibling.innerHTML)
}

for(let i=0;i<moins.length;i++){
    moins[i].addEventListener("click",function(){
       
        if(moins[i].previousElementSibling.innerHTML>0){
    moins[i].previousElementSibling.innerHTML--
    totale()}
})
    console.log(plus[i].nextElementSibling.innerHTML)
    }

for(let i=0;i<delBTN.length;i++){
delBTN[i].addEventListener("click",function(){
delBTN[i].parentElement.remove()
totale()
})
}
console.log(delBTN)


for(let i=0;i<like.length;i++){
    let x=0;
    like[i].addEventListener("click",function(){
    if(x==0)
    {
    x=x+1
    like[i].style.color="Red"
    }
    else
    { like[i].style.color="Black"
    x=0
    }
    })
}
for(let i=0;i<prix.length;i++){
    for(let j=0;j<quantite.length;j++){

    }
}


function totale(){
for (let i = 0; i < quantite.length; i++) {
    tot[i].innerHTML=quantite[i].innerHTML*prix[i].innerHTML
}
}
