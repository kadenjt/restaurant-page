const home = () => {
    const displayTop = () =>  {
        const container = document.querySelector("#content");
        const welcome = document.createElement("div");
        welcome.className = "welcome";
        //display restaurant name
        const name = document.createElement("h1");
        name.style.backgroundColor = "red";
        name.id = "displayName";
        name.textContent = "Samurai Sushi"
        //append elements to the page
        welcome.appendChild(name);
        container.appendChild(welcome);
    }
    return {displayTop}
}

export default home().displayTop;