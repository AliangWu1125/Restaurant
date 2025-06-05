const sliderImage = document.getElementById("slider-image");
const sliderBtns = document.querySelectorAll(".slider-btn");

const images = [
	"index-pic/view01.jpg",
	"index-pic/view02.jpg",
	"index-pic/view04.jpg",
	"index-pic/view05.jpg",
];

let index = 0;

function updateSlider() {
	sliderImage.src = images[index];
	sliderBtns.forEach((btn) => btn.classList.remove("active"));
	sliderBtns[index].classList.add("active");
}

setInterval(() => {
	index = (index + 1) % images.length;
	updateSlider();
}, 5000);

sliderBtns.forEach((btn) => {
	btn.addEventListener("click", () => {
		index = parseInt(btn.dataset.index);
		updateSlider();
	});
});

updateSlider();

const carouselContainer2 = document.querySelector(".carousel-container2");
const carouselTrack2 = document.querySelector(".carousel-track2");
const slideContainers2 = document.querySelectorAll(".slide-container2");
const images2 = document.querySelectorAll(".carousel-track2 img");
let currentPosition2 = 0;
const scrollSpeed2 = 0.8; // 調整滾動速度 (數值越小越慢)
let animationFrameId2;
let slideWidth2;
let trackWidth2;

function animateCarousel2() {
	currentPosition2 -= scrollSpeed2;

	if (Math.abs(currentPosition2) > trackWidth2) {
		currentPosition2 = 0;
	}

	carouselTrack2.style.transform = `translateX(${currentPosition2}px)`;
	animationFrameId2 = requestAnimationFrame(animateCarousel2);
}

function initializeCarousel2() {
	if (images2.length > 0) {
		// 計算每個滑塊容器的寬度（圖片寬度 + 間隔）
		slideWidth2 = slideContainers2[0].offsetWidth;
		trackWidth2 = slideWidth2 * slideContainers2.length;
		carouselTrack2.style.width = `${trackWidth2}px`;
		animateCarousel2();
	}
}

// 確保在視窗載入完成後初始化輪播 (包括圖片載入)
window.onload = initializeCarousel2;

// 滑鼠懸停時停止動畫
carouselContainer2.addEventListener("mouseenter", () => {
	cancelAnimationFrame(animationFrameId2);
});

// 滑鼠移開時恢復動畫
carouselContainer2.addEventListener("mouseleave", () => {
	animationFrameId2 = requestAnimationFrame(animateCarousel2);
});
const menuItems = [
	{
		img: "index-pic/duck.jpg",
		title: "暖嶼炭烤櫻桃鴨胸",
		desc: "台灣櫻桃鴨 , 紅藜麥 , 金桔",
		price: 650,
	},
	{
		img: "index-pic/pork-rice.jpg",
		title: "島嶼肉燥飯",
		desc: "台灣豬肉, 米, 溫泉蛋",
		price: 580,
	},
	{
		img: "index-pic/ice cream.jpg",
		title: "島嶼鳳梨冰淇淋",
		desc: "台灣鳳梨, 鮮奶油, 焦糖, 海鹽",
		price: 180,
	},
];

let menuIndex = 0;
const menu = document.getElementById("menu");

function updateMenu() {
	const content = menuItems[menuIndex];
	menu.innerHTML = `<div class="menu-pic">
						<img src="${content.img}" alt="主餐" />
					</div>
<div class="menu-content">
<h3>${content.title}</h3>
<h4>${content.desc}</h4>
<div class="price">NT$ <span>${content.price}</span></div>
<button class="nav-button left" onclick="prevMenu()">
							<img src="index-pic/prev.png" alt="" />
						</button>
						<button class="nav-button right" onclick="nextMenu()">
							<img src="index-pic/next.png" alt="" />
						</button>
</div>`;
}

function nextMenu() {
	menuIndex = (menuIndex + 1) % menuItems.length;
	updateMenu();
}

function prevMenu() {
	menuIndex = (menuIndex - 1 + menuItems.length) % menuItems.length;
	updateMenu();
}

updateMenu();
