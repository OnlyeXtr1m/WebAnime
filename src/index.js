import "./styles/styles.scss"
import logoImg from "./assets/logo.png"
import searchImg from "./assets/search.png"
import Images from "./images"

let logoObj = new Images(logoImg)

document.getElementById("logo").src = logoObj.img
document.getElementById("profile_mini_img").src = logoObj.img

let searchObj = new Images(searchImg)
document.getElementById("search_button").src = searchObj.img

