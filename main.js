const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
shoppingCart.addEventListener("click", toggleProductDetail);

function toggleDesktopMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
    const isProductDetailClosed = productDetail.classList.contains("inactive");

    if (!isProductDetailClosed) {
        productDetail.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}

function toggleProductDetail() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
    if (!isMobileMenuClosed || !isDesktopMenuClosed) {
        mobileMenu.classList.add("inactive");
        desktopMenu.classList.add("inactive");
    }
    productDetail.classList.toggle("inactive");
}
