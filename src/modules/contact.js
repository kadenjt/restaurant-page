const contactUs = () => {
    const displayItems = () =>  {
        const container = document.querySelector("#content");
        const contact = document.createElement("div");
        contact.className = "contactUs";
        //display contact
        const address = document.createElement("h4");
        address.className = "contact";
        address.textContent = "Address"
        //Create map
        const frame = document.createElement('iframe');
        frame.setAttribute('id', 'map');
        frame.setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox=139.70230937004092%2C35.69233240514018%2C139.70555484294894%2C35.695133761876924&amp;layer=mapnik');
        //append elements to the page
        contact.appendChild(frame);
        contact.appendChild(address);
        container.appendChild(contact);
    }
    return {displayItems}
}

export default contactUs().displayItems;