let imgsBox = document.querySelector(".main-img");
let imgs = document.querySelectorAll(".main-img a");
let buttonSlide = document.querySelectorAll("#slideButton");

let isScrolling = false;
buttonSlide.forEach((button) => {
	button.addEventListener("click", async () => {
		if (isScrolling) return;
		isScrolling = true;
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * imgs[0].clientWidth;
		imgsBox.scrollBy({ left: scrollImg, behavior: "smooth" });
		await new Promise((resolve) => setTimeout(resolve, 1000));
		isScrolling = false;
	});
});

let imgsBoxB = document.querySelector(".mini_slide-block");
let buttonSlideB = document.querySelectorAll("#slideButton-b");
buttonSlideB.forEach((button) => {
	button.addEventListener("click", () => {
		const direction = button.className == "left_img_button" ? -1 : 1;
		const scrollImg = direction * (imgs[0].clientWidth - 150);
		imgsBoxB.scrollBy({ left: scrollImg, behavior: "smooth" });
	});
});