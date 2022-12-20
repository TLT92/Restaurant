export const reservePage = function(){

    let reserveContainerFunction = function() {

    }

    // Page-Specific-Content
    let headContainer = document.createElement("div");
    headContainer.setAttribute("id", "headContainer")
    document.getElementById("content").appendChild(headContainer);
    let headerImageLeft = document.createElement("img");
    headerImageLeft.src = "../images/dumpling.png";
    headerImageLeft.setAttribute("id", "headerImageLeft");
    headContainer.appendChild(headerImageLeft);
    let header = document.createElement("h1");
    header.setAttribute("id", "header");
    header.textContent = "Reservieren";
    headContainer.appendChild(header);
    let headerImageRight = document.createElement("img");
    headerImageRight.src = "../images/dumpling.png";
    headerImageRight.setAttribute("id", "headerImageRight");
    headContainer.appendChild(headerImageRight);

    let descriptionWrapper = document.createElement("div");
    descriptionWrapper.setAttribute("id", "descriptionWrapper");
    document.getElementById("content").appendChild(descriptionWrapper);
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    description.textContent = "Hier könnt ihr eure Reservierung eintragen. Solltet ihr fragen haben oder auch für die Reservierung lieber zum Hörer greifen, könnt ihr uns während unserer Öffnungszeiten unter erreichen";
    descriptionWrapper.appendChild(description);
    document.getElementById("content").appendChild(descriptionWrapper)

    // Reservierungssurvey
    let subtitle = document.createElement("h2");
    subtitle.setAttribute("id", "subtitle")
    subtitle.textContent = "Reserviert ganz einfach online oder telefonisch";
    headContainer.appendChild(subtitle);

    document.getElementById("reserveFormContainer").style.display = "inline";
    document.getElementById("reserveForm").style.display = "inline";
    reserveFormContainer.appendChild(document.getElementById("reserveForm"));
    document.getElementById("reserveForm").addEventListener("submit", function() {
        alert("Danke für deine Reservierung! Wir freuen uns auf dich! :)")
    });

    let homepageGif = document.createElement("img");
    homepageGif.setAttribute("id", "homepageGif");
    homepageGif.src = "../images/dumpling.gif";
    homepageGif.alt = "Dumpling Gif";
    document.getElementById("content").appendChild(homepageGif);


    // footer
    let footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    document.getElementById("content").appendChild(footer);

    let iconLink = document.createElement("a");
    iconLink.textContent = "Dumpling icons created by Freepik";
    iconLink.setAttribute("id", "iconLink");
    iconLink.href = "https://www.flaticon.com/free-icons/dumpling";
    footer.appendChild(iconLink);

    let impressumLink = document.createElement("a");
    impressumLink.textContent ="Impressum"
    impressumLink.setAttribute("id", "impressumLink");
    impressumLink.href = "Impressum" // Link anpassen!
    footer.appendChild(impressumLink);

}

/*     let contactButton = document.createElement("button");
    contactButton.setAttribute("class", "Buttons");
    contactButton.textContent = "Kontakt";
    navigationBar.appendChild(contactButton);



        let homepageGif = document.createElement("img");
    homepageGif.setAttribute("id", "homepageGif");
    homepageGif.src = "../images/dumpling.gif";
    homepageGif.alt = "Dumpling Gif";
    document.getElementById("content").appendChild(homepageGif);

*/


