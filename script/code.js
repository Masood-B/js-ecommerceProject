let products = JSON.parse(localStorage.getItem('product-list'))
let result = document.querySelector(".cards-feature")

let products2 = products.slice(3,8);
console.log(products2)

    function displayProduct(){
        try{
        result.innerHTML = "";
        products2.forEach((stock)=>{
        result.innerHTML += 
        `
        <div class="card" style="width: 15rem;">
        <img src="${stock.picture}" class="card-img-top" alt="${stock.name}"  loading="lazy" class="img-fluid">
        <div class="card-body">
          <h5 class="card-title">${stock.name}</h5>
          <div class="overflow-auto"><p class="lead card-text">${stock.description}</p></div>
          <p class="lead card-text">Price: R${stock.price}</p>
          <a href="#" class="btn btn-primary" onclick='goToCart(${JSON.stringify(stock)})'>To Cart</a>
        </div>
      </div>
              ` 
      });
      
      }catch(event) {
        throw ("go to products then back to admin");
      }
      
      };
      
      displayProduct();
     