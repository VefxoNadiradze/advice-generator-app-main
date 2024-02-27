let adviceText = document.querySelector(".adviceText");
let adviceSpan = document.querySelector(".adviceSpan");
let diceBtn = document.querySelector(".diceBtn");

diceBtn.addEventListener("click", adviceFunction);

async function adviceFunction() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (!response.ok) {
      throw new Error("failed to get data");
    }
    let data = await response.json();
    adviceSpan.innerText = data.slip.id;

    adviceText.innerText = `“ ${data.slip.advice} ”`;
  } catch (error) {
    adviceText.innerText = error.message;
  }
}
