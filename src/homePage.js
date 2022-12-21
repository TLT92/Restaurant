import dumplingPng from './dumpling.png';

import khinkhaliJPG from './traditional-georgian-khinkali-top-view.jpg';

export const homePage = function(){

    // Page-Specific-Content
    let headContainer = document.createElement("div");
    headContainer.setAttribute("id", "headContainer")
    document.getElementById("content").appendChild(headContainer);
    let headerImageLeft = document.createElement("img");
    headerImageLeft.src = dumplingPng;
    headerImageLeft.setAttribute("id", "headerImageLeft");
    headContainer.appendChild(headerImageLeft);
    let header = document.createElement("h1");
    header.setAttribute("id", "header");
    header.textContent = "Zur Teigtasche";
    headContainer.appendChild(header);
    let headerImageRight = document.createElement("img");
    headerImageRight.src =  dumplingPng;
    headerImageRight.setAttribute("id", "headerImageRight");
    headContainer.appendChild(headerImageRight);
    let subtitle = document.createElement("h2");
    subtitle.setAttribute("id", "subtitle")
    subtitle.textContent = "Leckere Teigtaschen von Tübingen über Tbilisi bis nach Tokio";
    headContainer.appendChild(subtitle);
    let descriptionWrapper = document.createElement("div");
    descriptionWrapper.setAttribute("id", "descriptionWrapper");
    document.getElementById("content").appendChild(descriptionWrapper);
    let description = document.createElement("p");
    description.setAttribute("id", "description");
    description.textContent = `Eine Tasche aus Teig, mit Füllung - klingt nicht kompliziert und ist es auch nicht. 
    Das Konzept findet sich in vielen Küchen wieder, darunter in der deutschen, polnischen, georgischen oder chinesischen.`;
    descriptionWrapper.appendChild(description);
    let figure = document.createElement("figure");
    figure.setAttribute("id", "figure");
    let homepageImage = document.createElement("img");
    homepageImage.setAttribute("id", "homepageImage");
    homepageImage.src = khinkhaliJPG;
    homepageImage.alt = "Image by KamranAydino";
    figure.appendChild(homepageImage);
    let homepageImageCaption = document.createElement("figcaption");
    homepageImageCaption.textContent = "Georgische Teigtaschen: 'Khinkhali' - Foto von Kamran Aydino";
    figure.appendChild(homepageImageCaption);
    document.getElementById("content").appendChild(figure)



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


