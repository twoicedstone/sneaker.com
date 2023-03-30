const cartInfo = document.querySelector(".cart-info");
const empty = document.getElementById("empty");
const productInfo = document.getElementById("product");
const basket = document.getElementById("bskt");
const quantity = document.getElementById("qty");
const addTocart = document.querySelector(".btn");
const counter = document.getElementById("count");
const multiplier = document.getElementById("multiplier");
const totalValue = document.getElementById("total-value");
const amount = 125.00;
const increment = document.getElementById("addition");
const decrement = document.getElementById("subtract");
const deleteProduct = document.getElementById("bin");
const hamburger = document.querySelector(".menu");
const menuDrop = document.querySelector(".mobile-menu");
const menuClose = document.getElementById("menu-hide");


/* ============= Toggle Cart Start ========== */
function toggleCart() {

	if(cartInfo.style.display == "none") {
		cartInfo.style.display = "block";
	}

	else {
		cartInfo.style.display = "none";
		return true;
	}
}/* ============= Toggle Cart End ========== */

/* =========== Quantity increment & decrement Start ===== */
let x = 0;
increment.addEventListener("click", () => {
	counter.textContent = ++x;	
})

decrement.addEventListener("click", () => {
	if(x == 0) {
		counter.innerHTML = 0;
	} else {
		counter.textContent = --x;
	}
	
})

/* =========== Quantity increment & decrement End ===== */

/* ============= Add to cart start ========== */

addTocart.addEventListener("click", () => {

	let observedAmount = counter.innerHTML * amount;
	
	if(counter.innerHTML == 0) {
		empty.style.display = "block";
		productInfo.style.display = "none";
	}
	
	else {
		empty.style.display = "none";
		productInfo.style.display = "flex";
		quantity.innerHTML = counter.innerHTML;
		multiplier.innerHTML = counter.innerHTML;
		totalValue.innerHTML = observedAmount;
		return true;
	}
	

})

deleteProduct.addEventListener("click", () => {
	empty.style.display = "block";
	productInfo.style.display = "none";
	quantity.style.display = "none";
	counter.innerHTML = 0;
	location.reload();
})


document.querySelector(".checkout").addEventListener("click", () => {
	location.reload();
})

/* ============= Add to cart end ========== */

/* ============ Mobile Menu Start =========== */

function openMenu() {
	menuDrop.style.display = "block";
	document.querySelector(".light-box").style.display = "block";
}

function closeMenu() {
	menuDrop.style.display = "none";
	document.querySelector(".light-box").style.display = "none";
}

/* ============ Mobile Menu End =========== */

/* ============ Picture Change start =========== */
const img = document.querySelector(".product-image");
  const imageSources = ["./images/image-product-1.jpg","./images/image-product-2.jpg", 
  "./images/image-product-3.jpg", "./images/image-product-4.jpg"];
  let index = 0;
  let travel;

  const startTravel = () => {
    travel = setInterval(() => {
      ++index;

      console.log(index);
      if (index < 0 || index === imageSources.length) index = 0;
      img.src = imageSources[index];
    }, 6000);
  };

  const nextPicture = () => {
    if (index === 0) index = imageSources.length;

    clearInterval(travel);
    img.src = imageSources[--index];
    startTravel();
  }

  const previousPicture = () => {
    if (index === imageSources.length - 1) index = -1;

    clearInterval(travel);
    img.src = imageSources[++index];
    startTravel();
  }

  startTravel();

  /* ============ Picture Change End =========== */

  /* ============ Float Image Start =========== */

function image1() {
	document.getElementById("thumbnail-1b").style.border = "2px solid hsl(26, 100%, 55%)";
	document.getElementById("thumbnail-2b").style.border = "none";
	document.getElementById("thumbnail-3b").style.border = "none";
	document.getElementById("thumbnail-4b").style.border = "none";
	document.querySelector(".image-float").style.display = "flex";
	document.querySelector(".product-float").src = "./images/image-product-1.jpg";
	document.querySelector(".light-box").style.display = "block";
  }

function image2() {
	document.getElementById("thumbnail-2b").style.border = "2px solid hsl(26, 100%, 55%)";
	document.getElementById("thumbnail-1b").style.border = "none";
	document.getElementById("thumbnail-3b").style.border = "none";
	document.getElementById("thumbnail-4b").style.border = "none";
	document.querySelector(".image-float").style.display = "flex";
	document.querySelector(".product-float").src = "./images/image-product-2.jpg";
	document.querySelector(".light-box").style.display = "block";
}

function image3() {
	document.getElementById("thumbnail-3b").style.border = "2px solid hsl(26, 100%, 55%)";
	document.getElementById("thumbnail-1b").style.border = "none";
	document.getElementById("thumbnail-2b").style.border = "none";
	document.getElementById("thumbnail-4b").style.border = "none";
	document.querySelector(".image-float").style.display = "flex";
	document.querySelector(".product-float").src = "./images/image-product-3.jpg";
	document.querySelector(".light-box").style.display = "block";
}

function image4() {
	document.getElementById("thumbnail-4b").style.border = "2px solid hsl(26, 100%, 55%)";
	document.getElementById("thumbnail-1b").style.border = "none";
	document.getElementById("thumbnail-2b").style.border = "none";
	document.getElementById("thumbnail-3b").style.border = "none";
	document.querySelector(".image-float").style.display = "flex";
	document.querySelector(".product-float").src = "./images/image-product-4.jpg";
	document.querySelector(".light-box").style.display = "block";
  }

  document.querySelector(".close-window").addEventListener("click", () => {
	document.querySelector(".image-float").style.display = "none";
	document.querySelector(".light-box").style.display = "none";
  })


  const img2 = document.querySelector(".product-float");
  const nextPicture2 = () => {
    if (index === 0) index = imageSources.length;

    clearInterval(travel);
    img2.src = imageSources[--index];
    startTravel();
  }

  const previousPicture2 = () => {
    if (index === imageSources.length - 1) index = -1;

    clearInterval(travel);
    img2.src = imageSources[++index];
    startTravel();
  }

  /* ============ Float Image Start =========== */