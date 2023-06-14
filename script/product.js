let products = JSON.parse(localStorage.getItem('product-list')) ? 
    JSON.parse(localStorage.getItem('product-list')) :
    localStorage.setItem('product-list', JSON.stringify(
        [
        {
        id: 1,
        name:"Monster Musume no Iru Nichijou",
        price: 399,
        picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
        description: "Snake girl and guy",
        date: new Date()
        },
        {
        id: 2,
        name: "No Game No Life",
        price: 499,
        picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
        description: "brother and sister",
        date: new Date()
        },
        {
        id: 3,
        name:"Yuragi-sou no Yuuna-san",
        price: 299,
        picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
        description: "cat girl and human girl",
        date: new Date()
        },
        {
        id: 4,
        name:"Saikin Yatotta Maid ga Ayashii",
        price: 399,
        picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
        description: "maid",
        date: new Date()
        },
        {
        id: 5,
        name:"Mato Seihei no Slave",
        price: 299,
        picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
        description: "school samurai girl",
        date: new Date()
        }
    ]
    )) 

let divBooks = document.querySelector(".books");

function displayManga(){
try{
    divBooks.innerHTML = "";
    products.forEach((reader)=> {
        divBooks.innerHTML += `
        <div class="cards-wrapper">
        <div>
        <h2>${reader.name}</h2>
        </div>
        <div class= "card-image">
        <img src="${reader.picture}" alt="${reader.name}" loading="lazy" class="img-fluid">
        <div>
        <p class="lead">${reader.description}</p>
        </div>
        <button class"btn">Add to cart</button>
        </div>
        <div>
        <p>Price: R${reader.price}</p>
        </div>
        </div>
        `
    })
}catch(event) {
    location.reload()
}
};
displayManga();

// sorting
let sortingItems = document.querySelector("#sorting");
sortingItems.addEventListener("click", (event)=> {
    event.preventDefault();
    try{
        if(products) alert("Come back later.")
        products.sort((a,b)=> a.price - b.price);
        displayManga();
    }catch(event){
        divBooks.innerHTML = event;
    }
})