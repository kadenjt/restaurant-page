const header = () => {
    const display = () =>  {
        const container = document.querySelector("#content");
        const headBar = document.createElement("div");
        headBar.className = "header";
        //create the menu header button
        const menu = document.createElement("div");
        menu.className = "headerItem";
        menu.id = "menu";
        menu.textContent = "Menu"
        //create the about header button
        const about = document.createElement("div");
        about.className = "headerItem";
        about.id = "about";
        about.textContent = "About"
        //create the contact header button
        const contact = document.createElement("div");
        contact.className = "headerItem";
        contact.id = "contact";
        contact.textContent = "Contact"
        //append buttons to headBar and headBar to container
        headBar.appendChild(contact);
        headBar.insertBefore(about, contact);
        headBar.insertBefore(menu, about);
        container.appendChild(headBar);
    }
    return {display}
}

export default header().display;