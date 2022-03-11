// Handle carrousel, Royal Family page
const scrollWidth = 210;

document.getElementById("BtnLeft").onclick = function () {
  document.getElementById("royal_family").parentNode.scrollLeft -= scrollWidth;
};

document.getElementById("BtnRight").onclick = function () {
  document.getElementById("royal_family").parentNode.scrollLeft += scrollWidth;
};
