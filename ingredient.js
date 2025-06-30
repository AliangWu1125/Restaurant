const buttons = document.querySelectorAll(".ingredient-card button");
const infoBox = document.getElementById("info-box");
const infoImage = document.getElementById("info-image");
const infoTitle = document.getElementById("info-title");
const infoSubtitle = document.getElementById("info-subtitle");
const infoDescription = document.getElementById("info-description");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");
const infoData = [
	{
		img: "ingredient-pic/pic (1).png",
		title: "文旦果皮",
		subtitle: "產地:台南麻豆",
		description:
			"介紹:選用中秋過後成熟文旦,以低溫糖煮處理,保留淡淡苦香與果皮清香。可搭配鴨胸、甜點或製成果乾片,是少見卻驚艷的香氣元素。",
	},
	{
		img: "ingredient-pic/pic (2).png",
		title: "紅藜",
		subtitle: "產地:花蓮玉里部落",
		description:
			"介紹:被稱為「穀物界紅寶石」的紅藜,是原住民族傳統食材,口感Q彈帶微堅果香。含高蛋白與豐富礦物質,常入甜品、奶酪或主食,為料理增添養生與文化底蘊。",
	},
	{
		img: "ingredient-pic/pic (3).png",
		title: "鳳梨",
		subtitle: "產地:屏東內埔／台南關廟",
		description:
			"介紹:陽光飽滿的熱帶果香,酸甜平衡。關廟鳳梨纖維細密、汁多;內埔則香氣濃郁。可入開胃小點、製作果醬或入菜提升清爽層次,是夏日清新首選。",
	},
	{
		img: "ingredient-pic/pic (4).png",
		title: "南瓜",
		subtitle: "產地:彰化田中",
		description:
			"介紹:有機栽培、肉質細緻甜潤,南瓜富含β-胡蘿蔔素與膳食纖維,適合製成冷湯、烘烤主菜底部,或化為南瓜泥搭配香料。是秋冬餐桌上的暖心主角。",
	},
	{
		img: "ingredient-pic/pic (5).png",
		title: "石斑魚",
		subtitle: "產地:澎湖／屏東車城",
		description:
			"介紹:來自純淨海域的石斑魚,肉質緊實富彈性。高蛋白低脂肪,適合清蒸、炙燒或做湯。為高端餐桌常見的主菜魚品,細膩口感與海洋風味深受饕客喜愛。",
	},
	{
		img: "ingredient-pic/pic.png",
		title: "番茄",
		subtitle: "產地:台南善化",
		description:
			"介紹:日照充足、酸甜濃郁,是台灣番茄的經典代表。可用於開胃菜、冷湯或風乾製成番茄乾,保留其濃縮果香。含豐富茄紅素,是視覺與營養兼具的亮點食材。",
	},
];
buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		e.stopPropagation(); 

		const index = parseInt(btn.dataset.index);
		const data = infoData[index];

		infoImage.src = data.img;
		infoTitle.textContent = data.title;
		infoSubtitle.textContent = data.subtitle;
		infoDescription.textContent = data.description;

		infoBox.style.display = "block";
		overlay.style.display = "block";
	});
});

closeBtn.addEventListener("click", () => {
	infoBox.style.display = "none";
	overlay.style.display = "none";
});
document.addEventListener("click", (e) => {
	if (
		!infoBox.contains(e.target) &&
		!e.target.matches(".ingredient-card button")
	) {
		infoBox.style.display = "none";
		overlay.style.display = "none";
	}
});
