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
        name: "Nike cleats",
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
    brand: "Liverpool",
    img: "img/t-shirt-liverpool-f-c-jersey-kit-t-shirt-removebg-preview.png",
    alt: "Jersey",
  },
  {
    name: "Nike soccer ball",
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
    name: "White shorts",
    price: 9.99,
    inStock: true,
    brand: "Generic",
    img: "img/ITAM_Essential_AthleticShorts_Black-removebg-preview.png",
    alt: "shorts",
  },
  {
    name: "Black shorts",
    price: 9.99,
    inStock: true,
    brand: "Generic",
    img: "img/mockup-of-a-white-sports-pant-free-png-removebg-preview.png",
    alt: "shorts",
  },       
];
function addToCart() {
  const buttons = document.querySelectorAll("button");
  const btnArray = Array.from(buttons);
  btnArray.forEach((btn, index) => 
    btn.addEventListener("click", function(event) {
      console.log(
        event.target.closest(".child-card").getAttribute(".card-header"),
      event.tartet.textContent
    );
  })
);
}
clothes[3];
addToCart();

 /* function inject(clothes) {
   DOMSelectors.display.insertAdjacentHTML(
    "afterbegin",
     `<div class="display-card">
      <img class="display-img" src="${clothes.url}"/>
       <h2 class="display-brand">${clothes.brand}</h2>
      <h3 class="display-title">${clothes.title}</h3>
       <button class="remove btn">Remove Album</button>
    </div>`
   );
 } 
 inject ("clothes"[0]); 
   //Simulated cart array
  const cart = [];  */

//   // Function to add item to cart
   function addToCart(event) {
    const button = event.target;
    const card = button.closest('.card'); // Find closest card element
    const productName = card.querySelector('h3').textContent; // Example: get product name

    cart.push(productName); // Add to simulated cart
    console.log(`${productName} added to cart.`);
    console.log('Current cart:', cart);
  }

  // Attach event listeners to all buttons
  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', addToCart);
  });
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
 