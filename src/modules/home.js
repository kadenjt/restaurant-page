
const home = () => {
    const displayTop = () =>  {
        const container = document.querySelector("#content");
        const welcome = document.createElement("div");
        welcome.className = "welcome";
        //display background image
        const background = document.createElement("img");
        background.id = "backgroundImg";
        background.src="./img/restaurant.jpg";
        background.alt="Picture of restaurant"
        //display restaurant name
        const name = document.createElement("h1");
        name.id = "displayName";
        name.textContent = "Kaden's Restaurant"
        //append elements to the page
        welcome.appendChild(background);
        welcome.appendChild(name);
        container.appendChild(welcome);
    }
    return {displayTop}
}

export default home().displayTop;