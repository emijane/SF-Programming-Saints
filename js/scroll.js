const arrow = document.getElementById("arrow_down");

arrow.addEventListener("click", function () {
	document.getElementById("services").scrollIntoView({
		behavior: "smooth",
	});
	console.log("hi");
});
