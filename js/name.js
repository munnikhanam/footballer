 const arr=[];

 function displayLi(newLi){
    // console.log(newLi)
    const olContainer=document.getElementById('ol-container');
    olContainer.innerHTML= '';

    for(let i= 0; i< newLi.length; i++){
    const mainLi=arr[i].productName;
    // console.log(mainLi)
    const li=document.createElement('li');
    li.innerHTML=`<p>${mainLi}</p>`;
    olContainer.appendChild(li);
        
    }
 };


 function getElementvalueById(value){
    const mainCost=document.getElementById(value);
    const mainCostValueString=mainCost.value;
    const mainCostValue=parseFloat(mainCostValueString);
    return mainCostValue
};


 
 function addToLi(name){
const liName =name.parentNode.children[0].innerText;
const productObj={
    productName:liName
}
// console.log(name.parentNode.children[0].inn
arr.push(productObj)


displayLi(arr)
};


document.getElementById('total-person').addEventListener('click',function(){
    const perPersonPrice=getElementvalueById('single-player');
    
    const perPersonPriceTotal=perPersonPrice * arr.length;
    const playerCost=document.getElementById('player-cost');
    playerCost.innerHTML =perPersonPriceTotal;
});


document.getElementById('all-expence').addEventListener('click',function(){
    const manegerCost =getElementvalueById('maneger-cost');
    const coachCost =getElementvalueById('coach-cost');
    const perPersonPrice=getElementvalueById('single-player');
    const perPersonPriceTotal=perPersonPrice * arr.length;

    const allCost=manegerCost +coachCost + perPersonPriceTotal ;
    const totalExpence =document.getElementById('total-expence');
    totalExpence.innerHTML=allCost
})
