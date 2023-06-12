// Add Button With Modal
let displayAdd = document.querySelector(".display-Add");
displayAdd.innerHTML = 
`
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Name</p>
        <input type="text"class="modal-input" placeholder="Enter Title.." id="input1">
        <p>Price</p>
        <input type="text" class="modal-input"  placeholder="Enter Your Amount.." id="input2">
        <p>Picture</p>
        <input type="text" class="modal-input"  placeholder="Enter Image URL.." id="input3">
        <p>Despcription</p>
        <input type="text" class="modal-input"  placeholder="Enter Description.." id="input4">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark" id="add-btn">Add New Manga</button>
      </div>
    </div>
  </div>
</div>
`;


// Name, Price, Image, Add, Edit and Delete
const addBtn = document.querySelector("#add-btn") // add button from modal
const saveName = document.querySelector("#input1"); // Name input
const savePrice = document.querySelector("#input2"); // Price input
const savePicture = document.querySelector("#input3"); // Picture input
const saveDescription = document.querySelector("#input4"); // Description input
const result = document.querySelector("#data") //display list
let productList = JSON.parse(localStorage.getItem('product-list')) ? JSON.parse(localStorage.getItem('product-list')) : []; // info
let productID = productList[productList.length-1] ? productList[productList.length-1].id + 1: 1; // ID number
let deleteBtn; // Delete button
let editBtn; // edit button

// Admin Items
let products = [
    {
    id: 1,
    name:"Monster Musume no Iru Nichijou",
    price:"R 399",
    picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: new Date()
    },
    {
    id: 2,
    name: "No Game No Life",
    price:"R 499",
    picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
    description: "fffffffffffffffffffffffffffff",
    date: new Date()
    },
    {
    id: 3,
    name:"Yuragi-sou no Yuuna-san",
    price:"R 299",
    picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
    description: "ddddddddddddddddddddddddddddddd",
    date: new Date()
    },
    {
    id: 4,
    name:"Saikin Yatotta Maid ga Ayashii",
    price:"R 399",
    picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
    description: "ssssssssssssssssssssssssssssssss",
    date: new Date()
    },
    {
    id: 5,
    name:"Mato Seihei no Slave",
    price:"R 299",
    picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    date: new Date()
    }
]


// add button
addBtn.addEventListener("click", addItem);
result.innerHTML = "";
function addItem(){
    event.preventDefault();
    if(saveName.value, savePrice.value, savePicture.value, saveDescription.value == ""){
        alert("You Forgot To Add!")
    }else{
        products.push({
            id: productID,
            name: saveName.value,
            price: savePrice.value ,
            picture: savePicture.value,
            description: saveDescription.value,
            date: new Date()
        });
        productID++;
        saveName.value, savePrice.value, savePicture.value, saveDescription.value = "";
        localStorage.setItem("product-list", JSON.stringify(productList));
        displayProduct();
    }
}

// delete button
function deleteButton(){
    deleteBtn = [...document.querySelectorAll(".close-btn")];
    deleteBtn.forEach((item)=>{
        item.addEventListener('click',deleteItem)
    })
}
function deleteItem(){
    let startPoint = deleteBtn.indexOf(event.target);
    productList.splice(startPoint, 1);
    localStorage.setItem("product-list", JSON.stringify(productList));
    displayProduct();
}

// Main Function
function displayProduct(){
    result.innerHTML = "";
products.forEach((stock)=>{
    result.innerHTML += 
    `
    <tr>
        <td>${stock.name}</td>
        <td>${stock.price}</td>
        <td><img src="${stock.picture}" alt="${stock.name}" loading="lazy"></td>
        <td>${stock.description}</td>
        <td><!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Edit
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Name</p>
                <input type="text"class="modal-input" placeholder="Enter Title.." id="input1">
                <p>Price</p>
                <input type="text" class="modal-input"  placeholder="Enter Your Amount.." id="input2">
                <p>Picture</p>
                <input type="text" class="modal-input"  placeholder="Enter Image URL.." id="input3">
                <p>Despcription</p>
                <input type="text" class="modal-input"  placeholder="Enter Description.." id="input4">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-dark" id="add-btn">Add New Manga</button>
              </div>
            </div>
          </div>
        </div></td>
        <td><button id="close-btn${stock.id}" class="close-btn">Delete</button></td>
    </tr>
    `
})
deleteButton();
}

displayProduct();