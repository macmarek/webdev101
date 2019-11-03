const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const usersList = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  //   console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    //alert("Please enter fieldds");
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    setTimeout(() => msg.remove(), 3000);
  } else {
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );

    usersList.appendChild(li);

    //clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}

//mention it's only UI, no server
