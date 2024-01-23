const input = document.getElementById("input-num");
const unit = document.querySelector("#unit-dropdown");
const resultTxt = document.querySelector("#result-txt");

function convertUnit() {
  let result = "";
  switch (unit.value) {
    case "lbs2kgs":
      result = `${input.value} lbs equals ${(input.value / 2.2).toFixed(
        2
      )} kgs`;
      break;
    case "kgs2lbs":
      result = `${input.value} kgs equals ${(input.value * 2.2).toFixed(
        2
      )} lbs`;
      break;
    case "inches2cms":
      result = `${input.value} inches equals ${(input.value * 2.54).toFixed(
        2
      )} cms`;
      break;
    case "cms2inches":
      result = `${input.value} cms equals ${(input.value / 2.54).toFixed(
        2
      )} inches`;
      break;
    case "miles2kms":
      result = `${input.value} miles equals ${(input.value * 1.6).toFixed(
        2
      )} kms`;
      break;
    case "kms2miles":
      result = `${input.value} kms equals ${(input.value / 1.6).toFixed(
        2
      )} miles`;
      break;
    default:
      break;
  }
  resultTxt.textContent = result;
}
