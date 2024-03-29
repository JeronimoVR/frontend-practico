const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCarContainer = document.querySelector("#shoppingCarContainer");
const cardContainer = document.querySelector(".cards-container");
const productDetailAside = document.querySelector("#productDetail");
const productDetailClose = document.querySelector(".product-detail-close");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleProductDetail);
productDetailClose.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
    const isShoppingCarContainerClosed =
        shoppingCarContainer.classList.contains("inactive");

    if (!isShoppingCarContainerClosed) {
        shoppingCarContainer.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isShoppingCarContainerClosed =
        shoppingCarContainer.classList.contains("inactive");

    if (!isShoppingCarContainerClosed) {
        shoppingCarContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    const isProductDetailClosed =
        productDetailAside.classList.contains("inactive");

    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }

    if (!isProductDetailClosed) {
        productDetailAside.classList.add("inactive");
    }

    shoppingCarContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
    shoppingCarContainer.classList.add("inactive");
    productDetailAside.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailAside.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Laptop",
    price: 320,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
    name: "Pantalla",
    price: 190,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function renderProducts(productList) {
    for (const product of productList) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const img = document.createElement("img");
        img.setAttribute("src", product.image);
        img.addEventListener("click", openProductDetailAside);

        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");

        const div = document.createElement("div");

        const productPrice = document.createElement("p");
        productPrice.innerText = `$${product.price}`;
        const productName = document.createElement("p");
        productName.innerText = product.name;

        div.appendChild(productPrice);
        div.appendChild(productName);

        const figure = document.createElement("figure");

        const imgAddToCart = document.createElement("img");
        imgAddToCart.src = "./icons/bt_add_to_cart.svg";

        figure.appendChild(imgAddToCart);

        productInfo.appendChild(div);
        productInfo.appendChild(figure);

        productCard.appendChild(img);
        productCard.appendChild(productInfo);

        cardContainer.appendChild(productCard);
    }
}

renderProducts(productList);
