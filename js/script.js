"use strict";
const navItems = document.querySelectorAll(".nav-item");
const navBar = document.querySelector("nav");
const links = [...document.querySelectorAll(".link")];
const images = document.querySelector(".images");
const mentors = [...document.querySelectorAll(".mentors")];
const courses = [...document.querySelectorAll(".courses")];
const courseTab = document.querySelector(".courseTab");
const mentorH = document.getElementById("mentor-h1");
const sign = document.querySelector(".sign");
const signUp = document.querySelector(".sign-up");
const closeModal = document.querySelector(".close-modal");
const logInBtn = document.querySelector(".log-in");
const signUpBtn = document.querySelector(".sign-Up-btn");
const loggingIn = document.querySelector(".logging-in");
const closeModals = document.querySelector(".close-modals");
 const menu = document.querySelector(".menu");
 const bar = document.querySelector(".two");
 const mobileNav = document.querySelector(".mobile-nav");
 const signMobile = document.querySelector(".sign-mobile");
 

// const rect = mentorH.getBoundingClientRect();
// console.log(rect);
// const mentorX = rect.x;
// const mentorY = rect.y;

let currentHref;

menu.addEventListener('click', (e) => {
	menu.classList.toggle('open')
	mobileNav.classList.toggle('hiding');
})



navBar.addEventListener("click", function (event) {
	event.preventDefault();
	// console.log('clicked!!!')
	links.forEach((link) => {
		link.classList.remove("active-link");
	});
	// console.log(event.target);
	if (event.target.classList.contains("link")) {
		
		currentHref = event.target.href;
		window.location.href = currentHref;
	}else if(event.target.classList.contains('sign')){
		signUp.classList.toggle('hide')
	

	}
});
signMobile.addEventListener('click', function(event) {
	event.preventDefault();
	signUp.classList.toggle("hide");
	menu.classList.toggle("open");
	mobileNav.classList.toggle("hiding");
})

closeModal.addEventListener('click', function(event){
	event.preventDefault()

	loggingIn.classList.add("hide");
	
	
})
closeModals.addEventListener("click", function (event) {
	event.preventDefault();
	signUp.classList.add("hide");
});

logInBtn.addEventListener('click', function(event){
	event.preventDefault();
	loggingIn.classList.remove("hide");
	signUp.classList.toggle("hide");
	
})


signUpBtn.addEventListener('click', function(event){
	event.preventDefault();
	console.log("clicked!!!");
	loggingIn.classList.add("hide");
	signUp.classList.toggle("hide");

});


// mentors section tab
images.addEventListener("click", function (event) {
	if (event.target.classList.contains("mentors")) {
		mentors.forEach(function (mentor) {
			mentor.classList.remove("active");
		});
		event.target.classList.add("active");
	}
});

// courses tab at mentors page
courseTab.addEventListener("click", function (event) {
	if (event.target.classList.contains("courses")) {
		courses.forEach(function (course) {
			course.classList.remove("active-course");
		});
		event.target.classList.add("active-course");
	}
});
