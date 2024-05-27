function isVeci(prvi, drugi) {
  if (!isNumber(prvi)) return `Prvi broj '${prvi}' nije broj`;
  if (!isNumber(drugi)) return `Drugi broj '${drugi}' nije broj`;

  if (prvi === drugi) return "Oba su broja jednaka";
  if (prvi > drugi) {
    return "Prvi broj je veći od drugog";
  } else {
    return "Drugi broj je veći od prvog";
  }
}

function isNumber(val) {
  // negative or positive
  return /^[-]?\d+$/.test(val);
}

function onClickButton() {
  let prvi = document.getElementById("prvi").value;
  let drugi = document.getElementById("drugi").value;

  let result = isVeci(prvi, drugi);
  let elemResult = document.getElementById("treci");
  elemResult.value = result;
  elemResult.classList.add("zelena");
}
