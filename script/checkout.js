// not this localStorage
// let products = JSON.parse(localStorage.getItem('product-list'));
// this localStorage
let inCart = JSON.parse(localStorage.getItem("cart")) ?
JSON.parse(localStorage.getItem("cart")) : 
[];
let cartList = document.querySelector("#data"); //display
try{
    if(!inCart) throw "Put more books inside me!";
    let breakdown = inCart.sort((a, b)=> a.id - b-id)
    let collect = breakdown.reduce((a, b)=>{
        a[b.id] = a[b.id] ?? [];
        a[b.id].push(b)
        return a
    }, {});
    let totalSub = 0;
    let fullTotal = collect.length * collect[0].amount;
    totalSub += fullTotal;

    cartList.innerHTML +=
    `
    <td>${collect}[0]</td>
    <td>${collect}[0]</td>
    <td>${collect}.length</td>
    <td>R${fullTotal}</td>
    `
}catch(event){
    cartList.innerText = event;
}
