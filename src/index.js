import HomePage from './home';
import {Menu} from './menu';
import { About } from './about';
import './style.css';
const content = document.querySelector("#content");
const homePage = HomePage();
const menuPage = Menu();
const aboutPage = About();
content.appendChild(homePage);
const menuButton = document.querySelector(".menu");
const homeButton = document.querySelector(".home");
const aboutButton = document.querySelector(".about");
menuButton.addEventListener("click",() => {
    content.replaceChild(menuPage,content.firstElementChild);
})

homeButton.addEventListener("click",() => {
    content.replaceChild(homePage,content.firstElementChild);
})

aboutButton.addEventListener("click",() => {
    content.replaceChild(aboutPage,content.firstElementChild);
})


