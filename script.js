const customerImage = document.querySelector(".customer-image");
const customerName = document.querySelector(".customer-name");
const customerText = document.querySelector(".customer-text");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

let index = 0;
let customers = [];

//Creating Customer constructor

function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
}

//Creating a new customer using the constructor function

function createCustomer(img, name, text) {
    let fullImage = `./img/${img}.jpg`;
    let customer = new Customer(fullImage, name, text);
    customers.push(customer);
}

createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?');
createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock');
createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.');

previous.addEventListener("click", () => {
    if(index === 0){
        index = customers.length
   }
   index--
   customerImage.src = customers[index].img
   customerName.textContent = customers[index].name
   customerText.textContent = customers[index].text
});

next.addEventListener("click", () => {
    index++;
        if(index === customers.length){
             index = 0
        }
        customerImage.src = customers[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text
});