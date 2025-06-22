const hbmenu = document.querySelector(".hbmenu");
const menu = document.querySelector(".menu");
const submenu = document.querySelectorAll(".submenu");
const backbtn = document.querySelectorAll(".back-btn");
hbmenu.addEventListener("click", () => {
	hbmenu.classList.toggle("active");
	menu.classList.toggle("active");
	submenu.forEach((s) => s.classList.remove("active"));
});

// 手機：點主選單 -> 開子選單
document.querySelectorAll(".open-submenu").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const target = document.getElementById(link.dataset.target);
		menu.classList.remove("active");
		target.classList.add("active");
	});
});
backbtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.closest(".submenu").classList.remove("active"); // 關此子選單
		menu.classList.add("active"); // 回主選單
	});
});

window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		hbmenu.classList.remove("active");
		menu.classList.remove("active");
		submenu.forEach((s) => s.classList.remove("active"));
	}
});

let prevScrollPos = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
	const currentScrollPos = window.scrollY;

	// ✅ 漢堡選單開啟中不要隱藏 header
	const menuOpen =
		menu.classList.contains("active") ||
		[...submenu].some((s) => s.classList.contains("active"));
	const isMobile = window.innerWidth <= 768;

	if (!isMobile || (isMobile && !menuOpen)) {
		if (currentScrollPos > prevScrollPos) {
			// 往下滑
			header.style.top = "-100px";
		} else {
			// 往上滑
			header.style.top = "0";
		}
	}

	prevScrollPos = currentScrollPos;
});
