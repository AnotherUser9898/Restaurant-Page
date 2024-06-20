import coffee from './images/coffee.jpg';
import tea from './images/tea.jpg';
import toast from './images/toast.jpg'
import pancake from './images/pancake.jpg';
import './menu.css';
function Menu() {
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page")
    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu","title");
    menuTitle.textContent = "Menu";

    const beveragesContainer = document.createElement("div");
    beveragesContainer.classList.add("beverages-container","container");
    const beverages = document.createElement("div");
    beverages.classList.add("beverages","section-title");
    beverages.textContent = "Beverages";
    beveragesContainer.appendChild(beverages);
    let description = "A coffee that is flavoursome,fragrant and deeply rich in taste, made with freshly roasted beans with a little bit of cream on top";
    makeItem(beveragesContainer,"Coffee",description,"Rs 15",coffee);

    description= "A warm,sweet tea made with the highest quality tea leaves to start your day off right!";
    makeItem(beveragesContainer,"Tea",description,"Rs 15",tea);
    
    const snacksContainer = document.createElement("div");
    snacksContainer.classList.add("snacks-container","container",toast);
    const snacks = document.createElement("div");
    snacks.classList.add("snacks","section-title");
    snacks.textContent = "Snacks";
    snacksContainer.appendChild(snacks);
    description = "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam";
    makeItem(snacksContainer,"Toast and Jam",description,"Rs 45",toast)

    const mealsContainer = document.createElement("div");
    mealsContainer.classList.add("meals-container","container");
    const meals = document.createElement("div");
    meals.classList.add("meals","section-title");
    meals.textContent = "Meals";
    mealsContainer.appendChild(meals);
    description = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup";
    makeItem(mealsContainer,"Pancake",description,"Rs 80",pancake);

    menuPage.append(menuTitle,beveragesContainer,snacksContainer,mealsContainer);
    return menuPage;

}

function makeItem(container,name,description,itemPrice,url) {
    const card = document.createElement("div");
    card.classList.add("card");

    const dishName = document.createElement("div");
    dishName.classList.add("dish-name");
    dishName.textContent = name;

    const desc = document.createElement("div");
    desc.classList.add("dish-description");
    desc.textContent = description;

    const price = document.createElement("div");
    price.classList.add("dish-price");
    price.textContent = itemPrice;

    const image = new Image();
    image.classList.add("dish-image");
    image.src = url;

    card.append(dishName,desc,price,image);
    container.appendChild(card);
}

export {Menu}
