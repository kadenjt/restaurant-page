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
        //
        const imageDisplay = document.createElement("div");
        imageDisplay.className = "homeImageDisplay";
        //
        const beefTeriyakiImage = document.createElement("img");
        beefTeriyakiImage.className = "homeImage";
        beefTeriyakiImage.src = "./img/beef_teriyaki.jpg";
        beefTeriyakiImage.alt = "Beef Teriyaki."
        imageDisplay.appendChild(beefTeriyakiImage);
        //
        const salmonTeriyakiImage = document.createElement("img");
        salmonTeriyakiImage.className = "homeImage";
        salmonTeriyakiImage.src = "./img/salmon_teriyaki.jpg";
        salmonTeriyakiImage.alt = "Salmon Teriyaki."
        imageDisplay.appendChild(salmonTeriyakiImage);
        //
        const sashimiBoatImage = document.createElement("img");
        sashimiBoatImage.className = "homeImage";
        sashimiBoatImage.src = "./img/sashimi_boat.jpg";
        sashimiBoatImage.alt = "Sashimi Boat."
        imageDisplay.appendChild(sashimiBoatImage);
        //append elements to the page
        welcome.appendChild(name);
        welcome.appendChild(imageDisplay);
        container.appendChild(welcome);
    }
    return {displayTop}
}

export default home().displayTop;