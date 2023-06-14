// Add Button With Modal
let displayAdd = document.querySelector(".display-Add");
displayAdd.innerHTML = 
`
<button class="btn" id="adminSort">sort</button>
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
      <input type="number" class="form-control" placeholder="Enter Your Amount.." id="input2" aria-label="Title">
      <p>Picture</p>
      <input type="text" class="form-control" placeholder="Enter Image URL.." id="input3" aria-label="Title">
      <p>Despcription</p>
      <textarea class="form-control" placeholder="Enter Description.." id="input4" aria-label="With textarea"></textarea>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-dark" id="add-btn" data-bs-dismiss="modal">Add New Manga</button>
      </div>
    </div>
  </div>
</div>
`;


// Add, Name, Sort, Price, Image, Description, Edit and Delete
const addBtn = document.querySelector("#add-btn") // add button from modal
const saveName = document.querySelector("#input1"); // Name input
const sortBtn = document.querySelector("#adminSort"); // Sort button
let arrange = false; // for sort function (boolean)
const savePrice = document.querySelector("#input2"); // Price input
const savePicture = document.querySelector("#input3"); // Picture input
const saveDescription = document.querySelector("#input4"); // Description input
const result = document.querySelector("#data") //display list
let products = JSON.parse(localStorage.getItem('product-list')); // info
let productID = products[products.length-1] ? products[products.length-1].id + 1: 1; // ID number
let deleteBtn; // Delete button
let editBtn; // edit button

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

// sort button
sortBtn.addEventListener("click",(event)=>{
  event.preventDefault();
  if(arrange){
    products.sort((a, b)=> b.price - a.price);
    sortBtn.textContent = "High"
    arrange = false;
  }else{
    products.sort((a, b)=> a.price - b.price);
    sortBtn.textContent = "low"
    arrange = true;
  }
  displayProduct();
})

// // Edit Button
function EditItem(stock){
  this.name = document.querySelector(`#nameInput${stock.id}`).value;
  this.price = document.querySelector(`#priceInput${stock.id}`).value;
  this.picture = document.querySelector(`#pictureInput${stock.id}`).value;
  this.description = document.querySelector(`#descriptionInput${stock.id}`).value;
  let change = products.findIndex(a =>{
    return a.id == item.id
  });
  products[change] = {id: this.id, name: this.name, price: this.price, description: this.description};
  localStorage.setItem("product-list", JSON.stringify(products));
  displayProduct();
location.reload();
}

// delete button
function deleteButton(item){
remove = [...document.querySelectorAll("#close-btn")];
remove.forEach((item)=>{
  item.addEventListener('click', removeProduct)

})
function removeProduct(event){
  result.innerHTML = ""
  let start = remove.indexOf(event.target);
  products.splice(start, 1);
  localStorage.setItem("product-list", JSON.stringify(products))
  displayProduct();
}
}

// Main Function
function displayProduct(){
  result.innerHTML = "";
  products.forEach((stock)=>{
  result.innerHTML += 
  `
  <tr>
      <td>${stock.name}</td>
      <td>R${stock.price}</td>
      <td>
      <div class="flex-wrap">
      <img src="${stock.picture}" alt="${stock.id}" loading="lazy">
      </div>
      </td>
      <td>${stock.description}</td>
      <td>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target='#${stock.id}'>Edit</button>
      <!-- Modal -->
      <div class="modal fade" id='${stock.id}' tabindex="-1" aria-labelledby="editProductLabel " aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="editProductLabel ">Edit</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <form>
            <div class="container">
              <p>Name</p>
              <input type="text" class="form-control" placeholder="Enter Title..." id="nameInput${stock.id}" value="${stock.name}" aria-label="Title" required>
              <p>Price</p>
              <input type="number" class="form-control" placeholder="Enter Your Amount..." id="priceInput${stock.id}" value="${stock.price}" aria-label="Price" required>
              <p>Picture</p>
              <input type="text" class="form-control" placeholder="Enter Image URL..." id="pictureInput${stock.id}" value="${stock.picture}" aria-label="Picture" required>
              <p>Despcription</p>
              <textarea class="form-control" placeholder="Enter Description..." id="descriptionInput${stock.id}" aria-label="Description" required>${stock.description}</textarea>
              </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-dark" id="edit-btn" onclick="new EditItem(${JSON.stringify(stock)})" data-bs-dismiss="modal">Edit Manga</button>
            </div>
          </div>
        </div>
      </div></td>
      <td><button id="close-btn" class="close-btn">Delete</button></td>
  </tr>
  `
});
deleteButton()
}

displayProduct();

