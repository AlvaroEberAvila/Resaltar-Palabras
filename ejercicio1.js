let resaltar = document.querySelector("p");
resaltar.innerHTML = resaltar.innerText
  .split(" ")
  .map((word) =>
    word.length > 8 ? `<span style="background-color: yellow">${word}` : word
  )
  .join(" ");
