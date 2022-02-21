const menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";
console.log(menuList);
function showMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "110px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}
function showArrow() {
  const img = document.getElementById("imgDisplay");
  img.style.display = "block";
}
function hideArrow() {
  const img = document.getElementById("imgDisplay");
  img.style.display = "none";
}
