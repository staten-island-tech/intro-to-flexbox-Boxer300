const clothes = [
    {
        name: "Sponge bob cleats",
        price: 119.99,
        inStock: true,
        brand: "Sponge bob",
        img: "https://phenomelitebrand.com/cdn/shop/files/SpongebobProductShot4_535x.png?v=1740765484",
        alt: "Cleats",
    },
        {
        name: "Ukrainian Jersey",
        price: 34.99,
        inStock: true,
        brand: "Adidas",
        img: "img/116401-removebg-preview.png",
        alt: "Jersey",
    },    
           {
        name: "2022 World Cup Soccer Ball",
        price: 39.99,
        inStock: true,
        brand: "Adidas",
        img: "img/hd-qatar-world-cup-2022-ball-png-7040816948791863showibkng-removebg-preview.png",
        alt: "Soccer ball",
    },        {
        name: "Cleats",
        price: 89.99,
        inStock: true,
        brand: "Nike",
        img: "img/imgbin-nike-mercurial-vapor-football-boot-cleat-nike-FeKUXXVBpwvUrZ9cpgQUxBzrz-removebg-preview.png",
        alt: "Nike cleats",
    },        {
        name: "Soccer ball",
        price: 19.99,
        inStock: true,
        brand: "Generic",
        img: "img/1000_F_190984838_0fvehfxAtlLrwREWAYkS0pmZknmHlA7c-removebg-preview.png",
        alt: "Soccer ball",
    },       
     {
        name: "Barcelona Jersey",
        price: 34.99,
        inStock: true,
        brand: "Nike",
        img: "img/5bc1a53012e3b-removebg-preview.png",
        alt: "Jersey",
    },     {
        name: "Goalkeeping gloves",
        price: 34.99,
        inStock: true,
        brand: "Adidas",
        img: "img/images-removebg-preview.png",
        alt: "gloves",
    },        {
        name: "U.S. Jersey",
        price: 34.99,
        inStock: true,
        brand: "Nike",
        img: "img/third-jersey-united-states-men-s-national-soccer-team-shirt-kit-shirt-removebg-preview.png",
        alt: "Jersey",
    },       {
    name: "Liverpool Jersey",
    price: 34.99,
    inStock: true,
    brand: "New Balance",
    img: "img/t-shirt-liverpool-f-c-jersey-kit-t-shirt-removebg-preview.png",
    alt: "Jersey",
  },
  {
    name: "Soccer ball",
    price: 29.99,
    inStock: true,
    brand: "Nike",
    img: "img/soccer-ball-hk1099-premier-league-winter-ball-2018-19-11563421364hwhip7iy4d-removebg-preview.png",
    alt: "Soccer ball",
  },
  {
    name: "Barcelona shorts",
    price: 14.99,
    inStock: true,
    brand: "Nike",
    img: "img/avuw9xoqg-removebg-preview.png",
    alt: "shorts",
  },
  {
    name: "Black shorts",
    price: 9.99,
    inStock: true,
    brand: "Generic",
    img: "img/ITAM_Essential_AthleticShorts_Black-removebg-preview.png",
    alt: "shorts",
  },
  {
    name: "White shorts",
    price: 9.99,
    inStock: true,
    brand: "Generic",
    img: "img/mockup-of-a-white-sports-pant-free-png-removebg-preview.png",
    alt: "shorts",
  },    
  {
  name: "Golden cleats",
  price: 199.99,
  inStock: true,
  brand: "Nike",
  img: "https://png.pngtree.com/png-vector/20250112/ourmid/pngtree-golden-football-cleat-clipart-illustration-png-image_15160443.png",
  alt: "Cleats",
},
{
  name: "MLS ball",
  price: 9.99,
  inStock: true,
  brand: "Adidas",
  img: "img/seo-gifts-for-soccer-fans-body-image-1_221-578642-removebg-preview.png",
  alt: "Soccer ball",
},
{
  name: "Orange and white cleats",
  price: 99.99,
  inStock: true,
  brand: "Generic",
  img: "img/pngtree-durable-soccer-cleats-for-outdoor-games-png-image_13451541-removebg-preview.png",
  alt: "Cleats",
},
{
  name: "Blue gloves",
  price: 9.99,
  inStock: true,
  brand: "Nike",
  img: "img/275-2754018_goal-keeping-glove-png-photo-background-nike-goalkeeper-removebg-preview.png",
  alt: "Gloves",
},
{
  name: "Red shorts",
  price: 15.99,
  inStock: true,
  brand: "Adidas",
  img: "img/461686s-removebg-preview.png",
  alt: "Shorts",
},
{
  name: "Red gloves",
  price: 9.99,
  inStock: true,
  brand: "Adidas",
  img: "img/pngtree-red-goalkeeper-gloves-png-image_16215402-removebg-preview.png",
  alt: "Gloves",
},
{
  name: "Blue and yellow gloves",
  price: 9.99,
  inStock: true,
  brand: "Kipsta",
  img: "img/620-6206722_goal-keeping-glove-png-transparent-image-kipsta-goalkeeper-removebg-preview.png",
  alt: "Gloves",
},   
];
clothes.forEach((item) => inject(item))
function inject(clothes) {
   document.querySelector(".container").insertAdjacentHTML(
    "afterbegin",
     `<div class="display-card">
      <img class="display-img" src="${clothes.img}" />
       <h2 class="display-brand">${clothes.brand} </h2>
      <h3 class="display-title">${clothes.name} </h3>
        <h3 class="card-price">$ ${clothes.price}</h3>
       <button class="add-to-cart">Add to cart</button>
    </div>`
   );
  }

const cartSection = document.createElement("div");
cartSection.classList.add("cart-section");

const cartTitle = document.createElement("h2");
cartTitle.textContent = "Your Cart";

const cartList = document.createElement("ul");
cartList.id = "cart-items";

const cartTotal = document.createElement("p");
cartTotal.id = "cart-total";
cartTotal.textContent = "Total: $0.00";

cartSection.appendChild(cartTitle);
cartSection.appendChild(cartList);
cartSection.appendChild(cartTotal);

document.body.appendChild(cartSection);
const cart = [];

function updateCartDisplay() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} — $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}
 function addToCart(event) {
  const button = event.target;
  const card = button.closest(".display-card");
  const name = card.querySelector(".display-title").textContent;
  const priceText = card.querySelector(".card-price").textContent.replace("$", "");
  const price = parseFloat(priceText);

  cart.push({ name, price });
  updateCartDisplay();
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("add-to-cart")) {
    addToCart(event);
  }
});

//   // Function to add item to cart
/*    function addToCart(event) {
    const button = event.target;
    const card = button.closest('.display-card'); // Find closest card element
    const productName = card.querySelector('h3').textContent; // Example: get product name

    cart.push(productName); // Add to simulated cart
    console.log(`${productName} added to cart.`);
    updateCartDisplay(); */
    /* console.log('Current cart:', cart); */
  /* } */

  // Attach event listeners to all buttons
/*   document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(event){
       const button = event.target;
    const card = button.closest('.display-card'); // Find closest card element
    const productName = card.querySelector('h3').textContent; // Example: get product name

    cart.push(productName); // Add to simulated cart
    console.log(`${productName} added to cart.`);
    console.log('Current cart:', cart);
    });
  }); */
// function getCards() {
//   const buttons = document.querySelectorAll("button");
//   const btnArr = Array.from(buttons);
//   btnArr.forEach((btn) =>
//   btn.addEventListener("click", function (event) {
//   console.log(
//    event.target.closest(".display-card").getAttribute("data-title"),
//    event.target.textContent
//   );
//   }) 
// );
// }

   //Simulated cart array
/*   function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn, index) => 
    btn.addEventListener("click", function(event) {
      console.log(
        event.target.closest(".child-card").getAttribute(".card-header"),
      event.target.textContent
    );
  })
);
}
clothes[3];
 */