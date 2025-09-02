const btn = document.querySelector('.next-btn');
const content = document.querySelector('#content')

// array of images, brand, color, size, price
const DeTails = [
    {
        slideImage: "/asserts/black-white-nike-removebg-preview.png",
        brand: "Nike",
        color: "Black & white",
        size: "size 30",
        price: "$300"
    },

    {
        slideImage: "/asserts/pink_nike_shoe-removebg-preview.png",
        brand: "Nike",
        color: "Pink & white",
        size: "size 45",
        price: "$600"
    },

    {
        slideImage:"/asserts/yellow-white_nike-removebg-preview.png",
        brand: "Nike",
        color: "Yellow & white",
        size: "20",
        price: "$800"
    },

    {
        slideImage:"/asserts/black-white-nike-removebg-preview.png",
        brand: "Nike",
        color: "Yellow & white",
        size: "40",
        price: "$800"
    },

    {
        slideImage:"asserts/white_nike_shoe-removebg-preview.png",
        brand:"Nike",
        color: "White",
        size: "42",
        price: "$1800"
    }
];

let index = 0; // truck current slide
//function to update the content
const updateSlide = () => {
    const uptDet = DeTails[index];
    
    
    // console.log("Displaying index:",index,uptDet)
    content.innerHTML = `
         <div id="slider">
                <div id="slider-image">
                    <img src="${uptDet.slideImage} " alt="">
                </div>
            </div>

            <div class="details">
                <div class="details-content">
                    <h1>${uptDet.brand}</h1>
                    <p>${uptDet.color}</p>
                    <p>${uptDet.size}</p>
                    <h4>${uptDet.price}</h4>
                    </div>
            </div>
        </div>
    `;
    
    // move to the next slide or loop back to start
    index = (index + 1) % DeTails.length;
   
}

//add event listener
btn.addEventListener("click", updateSlide)