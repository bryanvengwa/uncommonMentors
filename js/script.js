hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
	navBar = document.querySelector(".nav-bar");
	navBar.classList.toggle("active");
};

$(".services-wrapper").slick({
	dots: false,
	infinite: false,
	// arrows:false,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 3,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true,
			},
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				arrows: false,
			},
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
			},
		},
	],
});
