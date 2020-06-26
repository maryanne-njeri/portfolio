function toggleAside() {
	let toggle = document.querySelector('#navBar');

	if (toggle.style.display === "none") {
		toggle.style.display = "block";
	} else {
		toggle.style.display = "none";
		toggle.style.transition = "all 2s ease-in-out";
	}
}