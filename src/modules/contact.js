const contactUs = () => {
    const displayItems = () =>  {
        const container = document.querySelector("#content");
        const contact = document.createElement("div");
        contact.className = "contactUs";
        //Create map
        const frame = document.createElement('iframe');
        frame.setAttribute('id', 'map');
        frame.setAttribute('src', 'https://www.openstreetmap.org/export/embed.html?bbox=139.70230937004092%2C35.69233240514018%2C139.70555484294894%2C35.695133761876924&amp;layer=mapnik');
        //display contact info
        const info = document.createElement("div");
        info.className = "contactInfo";
        const address = document.createElement("h3");
        address.textContent = "Address";
        //const linebreak = document.createElement("br");
        //address.appendChild(linebreak);
        const line1Address = document.createElement("p");
        line1Address.textContent = "2172 Street Rd."
        //const linebreak2 = document.createElement("br");
        //address.appendChild(linebreak2);
        const line2Address = document.createElement("p");
        line2Address.textContent = "Tokyo, Japan"
        info.appendChild(address);
        info.appendChild(line1Address);
        info.appendChild(line2Address);
        //assemble contact info
        contact.appendChild(frame);
        contact.appendChild(info);
        //append contact sections to the page
        container.appendChild(contact);
    }
    return {displayItems}
}

export default contactUs().displayItems;