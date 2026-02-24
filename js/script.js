
const homePage = document.getElementById("home-page")
const productsPage = document.getElementById("products-page")

document.getElementById("homeBTN").addEventListener("click",()=>{
    homePage.style.display = "block";
    productsPage.style.display = "none";
})
document.getElementById("productsBTN").addEventListener("click",()=>{
    productsPage.style.display = "block";
    homePage.style.display = "none";
    
})

const trending = () =>{
    const url = "https://fakestoreapi.com/products"
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTrending(data))
}

const displayTrending = (products)=>{
    const trendingProduct = document.getElementById("trending_products")
    trendingProduct.innerHTML = "";
   
    const product = products.slice(0,3).forEach(pro=>{
        trendingProduct.innerHTML += `
         <div class="card bg-base-100 w-96 shadow-sm">
                    <figure class="h-40 sm:h-60 md:h-64 overflow-hidden">
                        <img class="w-75% h-full object-cove" src="${pro.image}"
                            alt/>
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between">
                            <div class="badge bg-purple-100 text-purple-500">${pro.category}</div>
                            <div><span><i class="fa-solid fa-star text-yellow-500"></i></span> ${pro.rating.rate}<span> (${pro.rating.count})</span></div>
                        </div>
                        <h2 class="card-title">
                            ${pro.title.slice(0,24)}....
                            
                        </h2>
                        
                        <div class="card-actions flex justify-between mt-5">
                            <div class="badge badge-outline p-4">Details</div>
                            <div class="badge badge-outline p-4 bg-blue-400 text-white"><span><i class="fa-solid fa-cart-arrow-down"></i></span> Add</div>
                        </div>
                    </div>
                </div>
    `
    })
    
}
trending()

const catButtons = () =>{
    const url = "https://fakestoreapi.com/products/categories"
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCategories(data))
}

const showCategories = (categories) => {
    const allCategories = document.getElementById("cat-buttons")
    allCategories.innerHTML = "";

    
    allCategories.innerHTML += `
        <button onclick="allProducts()" 
        class="btn btn-outline btn-primary rounded-full">
        All
        </button>
    `;

    categories.forEach(category => {
        allCategories.innerHTML += `
            <button 
            onclick="categoryProducts(\`${category}\`)"
            class="btn btn-outline btn-primary rounded-full" id=${category}BTN>
                ${category}
            </button>
        `;

    });
}

const allProducts = () =>{
    homePage.style.display = "none";
    productsPage.style.display = "block";
    const url = "https://fakestoreapi.com/products"
    fetch(url)
    .then(res=>res.json())
    .then(data=>showAllProducts(data))
}

const showAllProducts = products =>{
    const allProducts = document.getElementById("all-product")
    allProducts.innerHTML = "";
   
    const product = products.forEach(pro=>{
        allProducts.innerHTML += `
         <div class="card bg-base-100 shadow-sm">
                    <figure class="h-40 sm:h-60 md:h-64 overflow-hidden">
                        <img class="w-75% h-full object-cove" src="${pro.image}"
                            alt/>
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between">
                            <div class="badge bg-purple-100 text-purple-500">${pro.category}</div>
                            <div><span><i class="fa-solid fa-star text-yellow-500"></i></span> ${pro.rating.rate}<span> (${pro.rating.count})</span></div>
                        </div>
                        <h2 class="card-title">
                            ${pro.title.slice(0,24)}....
                            
                        </h2>
                        
                        <div class="card-actions flex justify-between mt-5">
                            <div class="badge badge-outline p-4">Details</div>
                            <div class="badge badge-outline p-4 bg-blue-400 text-white"><span><i class="fa-solid fa-cart-arrow-down"></i></span> Add</div>
                        </div>
                    </div>
                </div>
    `
    })
}

const categoryProducts = category =>{
    homePage.style.display = "none";
    productsPage.style.display = "block";
    const url = `https://fakestoreapi.com/products/category/${category}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showCategoriesProduct(data))
}

const showCategoriesProduct = products =>{
    const allProducts = document.getElementById("all-product")
    allProducts.innerHTML = "";
   
    const product = products.forEach(pro=>{
        allProducts.innerHTML += `
         <div class="card bg-base-100 shadow-sm">
                    <figure class="h-40 sm:h-60 md:h-64 overflow-hidden">
                        <img class="w-75% h-full object-cove" src="${pro.image}"
                            alt/>
                    </figure>
                    <div class="card-body">
                        <div class="flex justify-between">
                            <div class="badge bg-purple-100 text-purple-500">${pro.category}</div>
                            <div><span><i class="fa-solid fa-star text-yellow-500"></i></span> ${pro.rating.rate}<span> (${pro.rating.count})</span></div>
                        </div>
                        <h2 class="card-title">
                            ${pro.title.slice(0,24)}....
                            
                        </h2>
                        
                        <div class="card-actions flex justify-between mt-5">
                            <div class="badge badge-outline p-4">Details</div>
                            <div class="badge badge-outline p-4 bg-blue-400 text-white"><span><i class="fa-solid fa-cart-arrow-down"></i></span> Add</div>
                        </div>
                    </div>
                </div>
    `
    })
}




catButtons()



