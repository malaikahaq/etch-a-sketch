const buttons = document.createElement("div");
buttons.id = "buttons";
const body = document.body.appendChild(buttons);
buttons.style.height = "10px";
buttons.style.width = "20px";
buttons.style.margin = "auto";

const btn = document.createElement("button");
btn.id = "resetBtn";
const btnDiv = document.getElementById("buttons").appendChild(btn);
btn.textContent = "Reset";
btn.style.backgroundColor = "#ffdccc";
btn.style.margin = "10px auto";
btn.style.display = "block";
btn.style.border = "none";
btn.style.padding = "8px 16px";
btn.style.borderRadius = "8px";
btn.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
btn.style.color = "#4b4b4b";
btn.style.fontSize = "16px";
btn.style.boxShadow = "2px 2px 5px rgba(0,0,0,0.1)";

for (i = 1; i < 257; i++) {
  const box = document.createElement("div");
  box.id = "box" + i;
  const container = document.getElementById("container").appendChild(box);
  box.style.height = "31px";
  box.style.width = "30px";
  box.style.backgroundColor = "#fbf3b9";
}
const box = document.querySelector("div");
box.addEventListener("mouseover", function (e) {
  e.target.style.backgroundColor = "#fdb7ea";
});

const boxes = document.querySelectorAll("div");
btn.addEventListener("click", function () {
  boxes.forEach((box) => {
    box.style.backgroundColor = "#fbf3b9";
  });
});

const container = document.getElementById("container");
const text = document.createElement("h1");
text.id = "header";
const header = document.body.insertBefore(text, container);
text.textContent = "etch-a-sketch";
text.style.fontFamily = '"Comic Sans MS", cursive, sans-serif';
text.style.color = "#b7b1f2";
text.style.textAlign = "center";
text.style.marginTop = "0px";
