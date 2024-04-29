var addBtn = document.querySelector(".add-btn");
var blockBtn = document.querySelector(".block-btn");
var state = document.querySelector("h5 > span");

var check = 0;

addBtn.addEventListener("click", () => {
	if (check == 0) {
		addBtn.style.backgroundColor = "#65baf3a6";
		addBtn.style.width = "100%";
		addBtn.textContent = "Cancel friend request";
		state.style.color = "#24a0ed ";
		state.textContent = "Following";
		blockBtn.style.display = "none";
		check = 1;
	} else {
		addBtn.style.backgroundColor = "#24a0ed";
		addBtn.style.width = "100px";
		addBtn.textContent = "Add friend";
		state.style.color = "#65baf3a6";
		blockBtn.style.display = "block";
		state.textContent = "";
		check = 0;
	}
});

blockBtn.addEventListener("click", () => {
	if (check == 0) {
		blockBtn.style.backgroundColor = "#d11a29a1";
		blockBtn.style.width = "100%";
		blockBtn.textContent = "Unblock user";
		addBtn.style.display = "none";
		state.style.color = "red ";
		state.textContent = "Blocked";
		check = 1;
	} else {
		blockBtn.style.backgroundColor = "red";
		blockBtn.style.width = "100px";
		blockBtn.textContent = "Block user";
		addBtn.style.display = "block";
        state.textContent = "";
		check = 0;
	}
});
