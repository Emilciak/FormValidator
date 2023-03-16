const name = document.querySelector("#user");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const email = document.querySelector("#email");
const clear = document.querySelector(".clear");
const submit = document.querySelector(".submit");
// const errorMsg = document.querySelector(".error-message");
const popup = document.querySelector(".popup");
// const form = document.querySelector(".form");

const showErrorMessage = (input, msg) => {
	const boxForm = input.parentElement;
	const error = boxForm.querySelector(".error-message");
	boxForm.classList.add("error");
	error.textContent = msg;
};

const clearErrors = (input) => {
	const boxForm = input.parentElement;
	boxForm.classList.remove("error");
};
const validator = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showErrorMessage(el, el.placeholder);
		} else {
			clearErrors(el);
		}
	});
};
const checkLength = (input, min) => {
	if (input.value.length < min) {
		showErrorMessage(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} składa sie z min ${min} znaków`
		);
	}
};
const checkPassword = (pas1, pas2) => {
	if (pas1.value !== pas2.value) {
		showErrorMessage(password2, "Hasła się nie zgadzają");
	}
};

const checkEmail = (email) => {
	const regex =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (regex.test(email.value)) {
		clearErrors(email);
	} else {
		showErrorMessage(email, "Podaj poprawny email");
	}
};

const checkErrors = () => {
	const inputs = document.querySelectorAll(".form");
	let errorsC = 0;
	inputs.forEach((el) => {
       if (el.classList.contains("error")){
            errorsC += 1;
       }

    });
    if(errorsC===0){
        popup.classList.add("show-popup");
    }
};


submit.addEventListener("click", (e) => {
	e.preventDefault();

	validator([name, password, password2, email]);
	checkLength(name, 3);
	checkLength(password, 8);
	checkPassword(password, password2);
	checkEmail(email);
    checkErrors()
});

clear.addEventListener("click", (e) => {
	e.preventDefault();
	[name, password, password2, email].forEach((el) => {
		el.value = "";
		clearErrors(el);
	});
});
// e.preventDefault();
// const newName = name.value;
// const newPass = password.value;
// const newPass2 = password2.value;
// const newEmail = email.value;
// if (
// 	newName == "" &&
// 	newName.length < 3 &&
// 	newPass == "" &&
// 	newPass.length < 9 &&
// 	newPass2 == "" &&
// 	newEmail == ""
// ) {
// 	form[0].classList.add("error");
// 	errorMsg[0].textContent = "Nazwa składa sie z min. 8 znaków";
// 	form[1].classList.add("error");
// 	errorMsg[1].textContent = "Hasło składa sie z min. 8 znaków";
// 	form[2].classList.add("error");
// 	errorMsg[2].textContent = "Hasła się nie zgadzają";
// 	form[3].classList.add("error");
// 	errorMsg[3].textContent = "Podaj poprawny email!";
// } else if (newName == "" && newName.length < 3 && newEmail == "") {
// 	form[0].classList.add("error");
// 	errorMsg[0].textContent = "Nazwa składa sie z min. 8 znaków";
// 	form[3].classList.add("error");
// 	errorMsg[3].textContent = "Podaj poprawny email!";
// } else if (newPass2 !== newPass) {
// 	form[2].classList.add("error");
// 	errorMsg[2].textContent = "Hasła się nie zgadzają";
// } else if (newPass2 == "") {
// 	form[2].classList.add("error");
// 	errorMsg[2].textContent = "Hasła się nie zgadzają";
// } else {
// 	errorMsg.forEach((el) => {
// 		el.textContent = "";
// 	});
// 	form.forEach((el) => {
// 		el.classList.remove("error");
// 	});
// 	popup.classList.add("show-popup");
// }