import './home.css';
function HomePage() {
    const home = document.createElement("div");
    home.classList.add("home-page");

    const title = document.createElement("div");
    title.classList.add("home", "title");
    title.textContent = "John's Morning Cafe";

    const testimonialContainer = document.createElement("div");
    testimonialContainer.classList.add("testimonial-container");
    const testimonial = document.createElement("div");
    testimonial.classList.add("home", "testimonial");
    testimonial.textContent = "John has the best coffee! The atmosphere makes you relaxed and not want to leave,It is truly a great place to start your day."
    const writer = document.createElement("div");
    writer.textContent = "Goldilocks";
    writer.classList.add("writer");
    testimonialContainer.append(testimonial,writer);

    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("home","hours-container");
    const hours = document.createElement("div");
    hours.classList.add("home", "hours");
    hours.textContent = "Hours";
    const mondayToFriday = document.createElement("div");
    mondayToFriday.classList.add("mtof");
    mondayToFriday.textContent = "Monday - Friday: 5:00 AM to 7:00 PM";
    const saturdaySunday = document.createElement("div");
    saturdaySunday.classList.add("satsu");
    saturdaySunday.textContent = "Saturday - Sunday: 6:00 AM to 8:00 PM";
    hoursContainer.append(hours, mondayToFriday, saturdaySunday);

    const locationContainer = document.createElement("div");
    locationContainer.classList.add("home","location-container");
    const location = document.createElement("div");
    location.classList.add("location");
    location.textContent = "Location"
    const address = document.createElement("div");
    address.classList.add("address");
    address.textContent = "15,Urban Road";
    locationContainer.append(location,address);

    home.append(title,testimonialContainer,hoursContainer,locationContainer);
    return home;
}

export default HomePage;