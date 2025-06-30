const hbmenu = document.querySelector(".hbmenu");
const menu = document.querySelector(".menu");
const submenu = document.querySelectorAll(".submenu");
const backbtn = document.querySelectorAll(".back-btn");
hbmenu.addEventListener("click", () => {
	hbmenu.classList.toggle("active");
	menu.classList.toggle("active");
	submenu.forEach((s) => s.classList.remove("active"));
});
document.querySelectorAll(".open-submenu").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();
		const target = document.getElementById(link.dataset.target);
		menu.classList.remove("active");
		target.classList.add("active");
	});
});
document.querySelectorAll(".submenu a").forEach((link) => {
	link.addEventListener("click", () => {
		hbmenu.classList.remove("active");
		menu.classList.remove("active");
		submenu.forEach((s) => s.classList.remove("active"));
	});
});
backbtn.forEach((btn) => {
	btn.addEventListener("click", () => {
		btn.closest(".submenu").classList.remove("active");
		menu.classList.add("active");
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
	const menuOpen =
		menu.classList.contains("active") ||
		[...submenu].some((s) => s.classList.contains("active"));
	const isMobile = window.innerWidth <= 768;

	if (!isMobile || (isMobile && !menuOpen)) {
		if (currentScrollPos > prevScrollPos) {
			header.style.top = "-100px";
		} else {
			header.style.top = "0";
		}
	}

	prevScrollPos = currentScrollPos;
});
document.addEventListener("click", (e) => {
	const isMenuOpen =
		menu.classList.contains("active") ||
		[...submenu].some((s) => s.classList.contains("active"));

	const clickedInsideMenu = e.target.closest(".menu");
	const clickedHbMenu = e.target.closest(".hbmenu");

	if (isMenuOpen && !clickedInsideMenu && !clickedHbMenu) {
		hbmenu.classList.remove("active");
		menu.classList.remove("active");
		submenu.forEach((s) => s.classList.remove("active"));
	}
});
