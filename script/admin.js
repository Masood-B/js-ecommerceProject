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
      <input type="text" class="form-control" placeholder="Enter Title.." id="input1" aria-label="Title">
      <p>Price</p>
      <input type="text" class="form-control" placeholder="Enter Your Amount.." id="input2" aria-label="Title">
      <p>Picture</p>
      <input type="text" class="form-control" placeholder="Enter Image URL.." id="input3" aria-label="Title">
      <p>Despcription</p>
      <textarea class="form-control" placeholder="Enter Description.." id="input4" aria-label="With textarea"></textarea>
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
let products = JSON.parse(localStorage.getItem('product-list')); // info
let productID = products[products.length-1] ? products[products.length-1].id + 1: 1; // ID number
let deleteBtn; // Delete button
let editBtn; // edit button

// Admin Items
// let products = [
//     {
//     id: 1,
//     name:"Monster Musume no Iru Nichijou",
//     price:"R 399",
//     picture:"https://i.postimg.cc/Xqc6mRbC/Monster-Musume-volume-1-cover.png",
//     description: "Snake girl and guy",
//     date: new Date()
//     },
//     {
//     id: 2,
//     name: "No Game No Life",
//     price:"R 499",
//     picture:"https://i.postimg.cc/Wp6RNcBD/no-game-no-life-vol-1-2.jpg",
//     description: "brother and sister",
//     date: new Date()
//     },
//     {
//     id: 3,
//     name:"Yuragi-sou no Yuuna-san",
//     price:"R 299",
//     picture:"https://i.postimg.cc/TPm7trGy/sk1g6a44e3121.jpg",
//     description: "cat girl and human girl",
//     date: new Date()
//     },
//     {
//     id: 4,
//     name:"Saikin Yatotta Maid ga Ayashii",
//     price:"R 399",
//     picture:"https://i.postimg.cc/2jTH9jpx/the-maid-i-hired-recently-is-mysterious-vol-2.jpg",
//     description: "maid",
//     date: new Date()
//     },
//     {
//     id: 5,
//     name:"Mato Seihei no Slave",
//     price:"R 299",
//     picture:"https://i.postimg.cc/QxwJvHfc/Volume-01.webp",
//     description: "school samurai girl",
//     date: new Date()
//     }
// ]
// localStorage.setItem("save-key", JSON.stringify(products));
// JSON.parse(localStorage.getItem("save-key"));

// add button
addBtn.addEventListener("click", addItem);
result.innerHTML = "";
function addItem(event){
    event.preventDefault();
    if(saveName.value == "", savePrice.value == "", savePicture.value == "", saveDescription.value == ""){
        alert("You Forgot To Add!")
    }else{
        products.push({
            id: products.length,
            name: saveName.value,
            price: savePrice.value ,
            picture: savePicture.value,
            description: saveDescription.value,
            date: new Date()
        });
        // productID++;
        saveName.value = "", savePrice.value = "", savePicture.value = "", saveDescription.value = "";
        localStorage.setItem("product-list", JSON.stringify(products));
        displayProduct();
    }
}

// Edit Button
function editItem(){
  editBtn = [...document.querySelectorAll("#edit-btn")];
  editBtn.forEach((item)=>{
    item.addEventListener("click", EditingProduct)
  })
}
function EditingProduct(){
  this.id = item.id;
  this.name = document.querySelector("#nameInput").value;
  this.price = document.querySelector("#priceInput").value;
  this.picture = document.querySelector("#pictureInput").value;
  this.description = document.querySelector("#descriptionInput").value;
  let index = editBtn.indexOf(event,target);
  products[index] = {id: this.id, name: this.name, price: this.price.name, description: this.description};
  localStorage.setItem("product-list", JSON.stringify(products));
  displayProduct();
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
    products.splice(startPoint, 1);
    localStorage.setItem("product-list", JSON.stringify(products));
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
      <td>
      <div class="flex-wrap">
      <img src="${stock.picture}" alt="${stock.id}" loading="lazy">
      </div>
      </td>
      <td>${stock.description}</td>
      <td>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target='#${stock.id}'>Edit</button>
      <!-- Modal -->
      <div class="modal fade" id='${stock.id}' tabindex="-1" aria-labelledby="editProductLabel${stock.id}" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editProductLabel${stock.id}">Edit</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="container">
              <p>Name</p>
              <input type="text" class="form-control" placeholder="Enter Title..." id="nameInput" value="${stock.name}" aria-label="Title" required>
              <p>Price</p>
              <input type="text" class="form-control" placeholder="Enter Your Amount..." id="priceInput" value="${stock.price}" aria-label="Price" required>
              <p>Picture</p>
              <input type="text" class="form-control" placeholder="Enter Image URL..." id="pictureInput" value="${stock.picture}" aria-label="Picture" required>
              <p>Despcription</p>
              <textarea class="form-control" placeholder="Enter Description..." id="descriptionInput" aria-label="Description" required>${stock.description}</textarea>
              </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark" id="edit-btn">Edit Manga</button>
            </div>
          </div>
        </div>
      </div></td>
      <td><button id="close-btn${stock.id}" class="close-btn">Delete</button></td>
  </tr>
  `
})
deleteButton();
editItem();
}

displayProduct();

function deleteItem(item) {
  let index = products.findIndex( p=> p.id == item.id)
  products.splice()
  localStorage.setItem('', JSON.stringify(products))
  displayProduct()
}