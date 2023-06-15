let inCart = JSON.parse(localStorage.getItem("cart")) ?
JSON.parse(localStorage.getItem("cart")) : [];
let cartList = document.querySelector("#data");
let itemPayed = JSON.parse(localStorage.getItem("checkout"));



// function displayCart(){
//     try {
//         let order = inCart.sort((money, person)=> money.id - person.id)
//         let bunch = order.reduce((money, person)=>{
//             money[person.id] = money[person.id] ?? [];
//             money[person.id].push(person)
//             return money
//         }, {});
//         let totalAmount = 0;
//         for(let idx in bunch){
//             let subtotalAmount = bunch[idx].length * bunch[idx][0].amount;
//             totalAmount += subtotalAmount;
//             cartList.innerHTML = 
//             `
//             <tr>
//                 <td>${bunch[idx][0].name}</td>
//                 <td>${bunch[idx].length}</td>
//                 <td>R${subtotalAmount}</td>
//             </tr>
//             `
//         }
//         cartList.innerHTML = 
//         `
//         <tr>
//             <td></td>
//             <td>Total Amount</td>
//             <td>R${totalAmount}</td>
//         </tr>
//         `
//     } catch (event) {
//         // location.reload()
//     }
// }




function displayCart() {
    cartList.innerHTML = ""
    try{
        if(!inCart) throw "Put more books inside me!";
        else 
            inCart.forEach( (item)=> {
                cartList.innerHTML += 
                `
                <tr>
                    <td>${item.name}</td>
                    <td></td>
                    <td>R${item.price}</td>
                </tr>
                `
                cartList.innerHTML = 
        `
        <tr>
            <td></td>
            <td>Total Amount</td>
            <td>R${totalAmount}</td>
        </tr>
        `
            })
    }catch(e) {
        location.reload()
    }
}
displayCart();
// Clear Order Button
let cleanCart = document.querySelector("#remove-order");
cleanCart.addEventListener("click", ()=>{
    localStorage.clear();
    localStorage.removeItem("cart");
},0)

let itemPrice = itemPayed.reduce((a, b)=>{
    return a + b.price
})
let totalAmount = itemPrice
