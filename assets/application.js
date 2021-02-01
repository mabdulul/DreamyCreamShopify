// Put your application javascript here
const coll = document.getElementById("collapsible");
const burger = document.getElementById("burger");
const pulldown = document.getElementById("viewing");
const shoppingCart = document.getElementById("shoppingCart");
const testbtn = document.getElementById("kk");
const menu = document.getElementById("menu");
const main = document.getElementsByClassName("main");
const navChild = document.querySelector(".nav-child")


document.addEventListener('mouseup', function(e) {
	console.log("here");
	if (e.target.closest(".nav-child")) return;
	navChild.classList.remove('nav-child__active');
  
  });
  


burger.addEventListener("click", function () {
	menu.classList.toggle("nav-links-active");
	burger.classList.toggle("burger-active");

	console.log(main);
	shoppingCart.classList.toggle("cart-active");

	for (let i = 0; i < main.length; i += 1) {
		main.item(i).classList.toggle("main-active");
	}
});



coll.addEventListener("click", function () {
	coll.classList.toggle("test-active");
	pulldown.classList.toggle("View--INGREDIENTS-active");

});


function Accordion(button){
	console.log(button);
	button.classList.toggle('accordion__button--active')
	const accordionContent = button.nextElementSibling;

	if(button.classList.contains('accordion__button--active')){
		accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
	}else{
		accordionContent.style.maxHeight = 0;
	}

}

function pullDown(button){
	let listChild = button.nextElementSibling;
	listChild.classList.toggle('nav-child__active');

}










