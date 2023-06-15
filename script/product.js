let products = JSON.parse(localStorage.getItem('product-list')) ? 
    JSON.parse(localStorage.getItem('product-list')) :
    localStorage.setItem('product-list', JSON.stringify(
        [
        {
        id: 1,
        name:"Monster Musume no Iru Nichijou",
        price: 400,
        picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
        description: "Snake girl and guy",
        date: new Date(),
        
        },
        {
        id: 2,
        name: "No Game No Life",
        price: 500,
        picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
        description: "Brother and sister",
        date: new Date()
        },
        {
        id: 3,
        name:"Yuragi-sou no Yuuna-san",
        price: 300,
        picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
        description: "Cat girl and human girl",
        date: new Date()
        },
        {
        id: 4,
        name:"Saikin Yatotta Maid ga Ayashii",
        price: 350,
        picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
        description: "Maid",
        date: new Date()
        },
        {
        id: 5,
        name:"Mato Seihei no Slave",
        price: 450,
        picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
        description: "School samurai girl",
        date: new Date()
        },
        {
        id: 6,
        name:"To Love Ru Darkness",
        price: 450,
        picture:"https://i.postimg.cc/Fs6B882b/to-love-ru-darkness-vol-1.jpg",
        description: "2 Alien girls",
        date: new Date()
        },
        {
        id: 7,
        name:"Keijo!!!!!!!!",
        price: 450,
        picture:"https://i.postimg.cc/Y9CWYrtQ/Volume-10.webp",
        description: "?",
        date: new Date()
        },
        {
        id: 8,
        name:"Medoka Box ",
        price: 450,
        picture:"https://i.postimg.cc/SQV9Sz7V/Volume16.webp",
        description: "Friends and enemies enjoying themselves",
        date: new Date()
        },
        {
        id: 9,
        name:"Is It Wrong to Try to Pick Up Girls in a Dungeon",
        price: 450,
        picture:"https://i.postimg.cc/T1pccY2z/is-it-wrong-to-try-to-pick-up-girls-in-a-dungeon-vol-6-manga-2.jpg",
        description: "Boy and girl",
        date: new Date()
        },
        {
        id: 10,
        name:"Rosaria + Vampire",
        price: 450,
        picture:"https://i.postimg.cc/s2m9dZMF/Getimage-aspx.webp",
        description: "Human boy and vampire girl",
        date: new Date()
        },
        {
        id: 11,
        name:"Food Wars!",
        price: 450,
        picture:"https://i.postimg.cc/9XKPh2Qf/food-wars-shokugeki-no-soma-vol-26-9781974701018-hr.jpg",
        description: "Girl chief how like reptile",
        date: new Date()
        },
        {
        id: 12,
        name:"Air Gear",
        price: 450,
        picture:"https://i.postimg.cc/tRKvpwq9/air-gear-28.jpg",
        description: "Boy and his gang",
        date: new Date()
        },
        {
        id: 13,
        name:"Kimi No Iru Machi",
        price: 450,
        picture:"https://i.postimg.cc/DzwBxKgP/9784063950298-us.jpg",
        description: "Girl is smiling",
        date: new Date()
        },
        {
        id: 14,
        name:"High School of The Dead",
        price: 450,
        picture:"https://i.postimg.cc/GpgzNSgw/9780316282598_p0_v1_s1200x630.jpg",
        description: "Girl fighting zombies",
        date: new Date()
        },
        {
        id: 15,
        name:"Love Hina",
        price: 450,
        picture:"https://i.postimg.cc/zBLp1S4L/1851952-09.jpg",
        description: "Group of girls",
        date: new Date()
        }
    ]
    
    )) ;

let sortbutton = document.querySelector(".sort")
sortbutton.innerHTML = `
<button class="btn" id="sorting">Sort Price</button>
`

let divBooks = document.querySelector(".books");

function displayManga(){
try{
    divBooks.innerHTML = "";
    products.forEach((reader)=> {
        divBooks.innerHTML += `
   <div class="card" style="width: 15rem;">
  <img src="${reader.picture}" class="card-img-top" alt="${reader.name}"  loading="lazy" class="img-fluid">
  <div class="card-body">
    <h5 class="card-title">${reader.name}</h5>
    <p class="lead card-text">${reader.description}</p>
    <p class="lead card-text">Price: R${reader.price}</p>
    <a href="#" class="btn btn-primary" onclick='goToCart(${JSON.stringify(reader)})'>To Cart</a>
  </div>
</div>
        `
        
    })
}catch(event) {
    location.reload()
}
};
displayManga();

// sorting button
let productsort = false;
let sortingItems = document.querySelector("#sorting");
sortingItems.addEventListener("click", (event)=> {
    event.preventDefault();
    try{
        if(!products) 
            throw ("Put a spinner");
        else 
            products.sort((a,b)=> a.price - b.price);
            displayManga();
    }catch(event){
        divBooks.innerHTML = event;
    }
})

// make a spinner and high and low sort with throw
// sortBtn.addEventListener("click",(event)=>{
    //   event.preventDefault();
    //   if(arrange){
    //     products.sort((a, b)=> b.price - a.price);
    //     sortBtn.textContent = "High"
    //     arrange = false;
    //   }else{
    //     products.sort((a, b)=> a.price - b.price);
    //     sortBtn.textContent = "low"
    //     arrange = true;
    //   }
    //   displayProduct();
    // })

    // checkout button
    let checkout = []
    function goToCart(items){
        checkout.push(items);
        localStorage.setItem("cart", JSON.stringify(checkout))
    }