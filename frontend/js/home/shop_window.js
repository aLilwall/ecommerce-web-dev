let tabProduct = document.getElementById("tabProduct");
let openCart = document.getElementById("openCart");
let listProduct = document.getElementById("listProduct");
let tabCart = document.getElementById("tabCart");
let closeCart = document.getElementById("closeCart");
let listCart = document.getElementById("listCart");
let imgPath = 'frontend/img/products'
let pagePath = 'frontend/pages/products'

let products = [
    {id: 1, name: 'Parfum - Jove', price: 30, image: imgPath+'/perfume-1-front.webp', selected: imgPath+'/perfume-1-selected.webp', page: pagePath+'/first_page.html'},
    {id: 2, name: 'Product Name', price: 35, image: imgPath+'/perfume-2-front.webp', selected: imgPath+'/perfume-2-selected.webp', page: pagePath+'/second_page.html'},
    {id: 3, name: 'Product Name', price: 35, image: imgPath+'/perfume-3-front.webp', selected: imgPath+'/perfume-3-selected.webp', page: pagePath+'/third_page.html'},
    {id: 4, name: 'Product Name', price: 40, image: imgPath+'/perfume-4-front.webp', selected: imgPath+'/perfume-4-selected.webp', page: pagePath+'/fourth_page.html'},
    {id: 5, name: 'Product Name', price: 30, image: imgPath+'/perfume-5-front.webp', selected: imgPath+'/perfume-5-selected.webp', page: pagePath+'/fifth_page.html'},
    {id: 6, name: 'Product Name', price: 20, image: imgPath+'/perfume-6-front.webp', selected: imgPath+'/perfume-6-selected.webp', page: pagePath+'/sixth_page.html'},
    {id: 7, name: 'Product Name', price: 40, image: imgPath+'/perfume-7-front.webp', selected: imgPath+'/perfume-7-selected.webp', page: pagePath+'/seventh_page.html'},
    {id: 8, name: 'Product Name', price: 50, image: imgPath+'/perfume-8-front.webp', selected: imgPath+'/perfume-8-selected.webp', page: pagePath+'/eighth_page.html'}
]

let carts = [
    {product_id: 1, quantity: 1}
]

function showProduct () {
    listProduct.innerHTML = ''
    products.forEach(product => {
        listProduct.innerHTML += `
            <div class="item">
                <a href="${product.page}">
                    <img src="${product.image}" alt="" onmouseover="this.src='${product.selected}'" onmouseout="this.src='${product.image}'">
                </a>
                <div class="name">${product.name}</div>
                <div class="price">${product.price}.00$</div>
                <button>
                    <img src="frontend/img/icons/shopping-bag.png" alt="">
                </button>
            </div>
        `;
    })
}

function initApp() {
    showProduct();
}

initApp()