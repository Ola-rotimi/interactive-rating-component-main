let rating = 0;

let buttonValue = document.getElementsByClassName("num");
for (const element of buttonValue) {
  element.addEventListener("click", function () {
    rating = element.value;
  });
}

const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  localStorage.setItem("rating", rating);
});

const activeKey = (button) => {
  let buttons = document.getElementsByTagName("button");
  for (const element of buttons) {
    element.classList.remove("active");
  }
  button.classList.add("active");
};

