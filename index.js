//-----------------------------banner輪播圖

const sliderImage = document.getElementById("slider-image");
const sliderBtns = document.querySelectorAll(".slider-btn");
const title1 = document.getElementById("slider-title1");
const title2 = document.getElementById("slider-title2");

const images = [
	"index-pic/view01.png",
	"index-pic/view02.png",
	"index-pic/view03.png",
	"index-pic/view04.png",
];
const titles = [
	{ title1: "在地風土", title2: "款心款待" },
	{ title1: "季節食材", title2: "暖嶼風味" },
	{ title1: "主廚精選", title2: "職人手藝" },
	{ title1: "餐酒搭配", title2: "慢享時光" },
];

let index = 0;

function updateSlider() {
	sliderImage.src = images[index];
	title1.textContent = titles[index].title1;
	title2.textContent = titles[index].title2;
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
//----------------------------------精選菜單
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
const selected = document.getElementById("selected-card");
function updateMenu() {
	const content = menuItems[menuIndex];
	selected.classList.remove("animate");
	void selected.offsetWidth;
	selected.innerHTML = `
		<div class="selected-card-pic">
			<img src="${content.img}" alt="主餐" />
		</div>
		<div class="selected-card-txt">
			<h3>${content.title}</h3>
			<h4>${content.desc}</h4>
			<div class="price">NT$ <span>${content.price}</span></div>
		</div>`;
	selected.classList.add("animate");
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
