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
