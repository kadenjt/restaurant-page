const menu = () => {
    const displayItems = () =>  {
        const container = document.querySelector("#content");
        const menu = document.createElement("div");
        menu.className = "menu";
        //display restaurant name
        const burger = document.createElement("h4");
        burger.className = "menuItem";
        burger.textContent = "Burger"
        //append elements to the page
        menu.appendChild(burger);
        container.appendChild(menu);
    }
    return {displayItems}
}

export default menu().displayItems;