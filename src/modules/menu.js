const menu = () => {
    const displayItems = () =>  {
        const container = document.querySelector("#content");
        const menu = document.createElement("div");
        menu.className = "menu";
        //Beef teriyaki
        const beefTeriyakiHolder = document.createElement("div");
        beefTeriyakiHolder.className = "menuItem";
        //Beef teriyaki image
        const beefTeriyakiImage = document.createElement("img");
        beefTeriyakiImage.className = "menuImage";
        beefTeriyakiImage.src = "./img/beef_teriyaki.jpg";
        beefTeriyakiImage.alt = "Beef teriyaki bento box."
        beefTeriyakiHolder.appendChild(beefTeriyakiImage);
        //Beef teriyaki description
        const beefTeriyakiDescription = document.createElement("h3");
        beefTeriyakiDescription.textContent = "Beef Teriyaki";
        beefTeriyakiHolder.appendChild(beefTeriyakiDescription);
        //Salmon teriyaki
        const salmonTeriyakiHolder = document.createElement("div");
        salmonTeriyakiHolder.className = "menuItem";
        //Salmon teriyaki image
        const salmonTeriyakiImage = document.createElement("img");
        salmonTeriyakiImage.className = "menuImage";
        salmonTeriyakiImage.src = "./img/salmon_teriyaki.jpg";
        salmonTeriyakiImage.alt = "Salmon teriyaki bento box."
        salmonTeriyakiHolder.appendChild(salmonTeriyakiImage);
        //Salmon teriyaki description
        const salmonTeriyakiDescription = document.createElement("h3");
        salmonTeriyakiDescription.textContent = "Salmon Teriyaki";
        salmonTeriyakiHolder.appendChild(salmonTeriyakiDescription);
        //Sashimi boat
        const sashimiBoatHolder = document.createElement("div");
        sashimiBoatHolder.className = "menuItem";
        //Sashimi boat image
        const sashimiBoatImage = document.createElement("img");
        sashimiBoatImage.className = "menuImage";
        sashimiBoatImage.src = "./img/sashimi_boat.jpg";
        sashimiBoatImage.alt = "Sashimi Boat."
        sashimiBoatHolder.appendChild(sashimiBoatImage);
        //Sashimi boat description
        const sashimiBoatDescription = document.createElement("h3");
        sashimiBoatDescription.textContent = "Sashimi Boat";
        sashimiBoatHolder.appendChild(sashimiBoatDescription);
        //append item elements to the page
        menu.appendChild(beefTeriyakiHolder);
        menu.appendChild(salmonTeriyakiHolder);
        menu.appendChild(sashimiBoatHolder);
        container.appendChild(menu);
    }
    return {displayItems}
}

export default menu().displayItems;