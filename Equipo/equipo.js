let $selfTeam = document.querySelector(".selfteam");
let anchoVentana = window.innerWidth;

if (anchoVentana < 500) {
  setInterval(() => {
    let $last = $selfTeam.firstElementChild;
    $last.remove();
    $selfTeam.appendChild($last);
  }, 2000);
} else {
}
