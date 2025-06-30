const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
const hh = String(today.getHours()).padStart(2, "0");
const min = String(today.getMinutes()).padStart(2, "0");
const todayDate = `${yyyy}-${mm}-${dd}`;
const nowTime = `${hh}:${min}`;
dateInput.setAttribute("min", todayDate);
dateInput.addEventListener("change", function () {
	if (this.value === todayDate) {
		timeInput.setAttribute("min", nowTime);
	} else {
		timeInput.removeAttribute("min");
	}
});
document
	.getElementById("submitReservation")
	.addEventListener("click", function () {
		const name = document.getElementById("name").value.trim();
		const phone = document.getElementById("phone").value.trim();
		const date = dateInput.value;
		const time = timeInput.value;
		document.getElementById("error-name").textContent = "";
		document.getElementById("error-phone").textContent = "";
		document.getElementById("error-date").textContent = "";
		document.getElementById("error-time").textContent = "";
		let hasError = false;
		if (!name) {
			document.getElementById("error-name").textContent = "請填寫姓名";
			hasError = true;
		}
		if (!phone) {
			document.getElementById("error-phone").textContent = "請填寫電話";
			hasError = true;
		} else if (!/^\d+$/.test(phone)) {
			document.getElementById("error-phone").textContent = "電話僅限輸入數字";
			hasError = true;
		}
		if (!date) {
			document.getElementById("error-date").textContent = "請選擇日期";
			hasError = true;
		}
		if (!time) {
			document.getElementById("error-time").textContent = "請選擇時間";
			hasError = true;
		}
		if (hasError) return;
		const guests = document.getElementById("guests").value;
		const notes = document.getElementById("notes").value;
		document.getElementById("reservationForm").style.display = "none";
		document.getElementById("reservationResult").style.display = "block";
		document.getElementById("r-name").textContent = name;
		document.getElementById("r-phone").textContent = phone;
		document.getElementById("r-guests").textContent = guests;
		document.getElementById("r-date").textContent = date;
		document.getElementById("r-time").textContent = time;
		document.getElementById("r-notes").textContent = notes || "無";
	});
