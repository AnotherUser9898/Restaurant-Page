import './about.css';
function About() {
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About";
    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");
    aboutContent.textContent = "John's Cafe is a simple cafe that serves simple and natural food accompanied by hot tea or freshly brewed coffee.This cafe serves homemade food with fresh ingredients.";
    aboutContainer.append(aboutTitle,aboutContent);
    return aboutContainer;
}

export {About}