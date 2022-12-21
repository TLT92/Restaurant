import dumplingPng from './dumpling.png';

import potatoesJPG from './french-fries-potato-wedges-min.jpg';

import teaJPG from './high-view-green-leaves-cup-tea-min.jpg';

import breadJPG from './sourdough-bread-table-min.jpg';

import khinkhaliJPG from './traditional-georgian-khinkali-top-view.jpg';


export const menuPage = function(){

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
    header.textContent = "Unsere Karte";
    headContainer.appendChild(header);
    let headerImageRight = document.createElement("img");
    headerImageRight.src = dumplingPng;
    headerImageRight.setAttribute("id", "headerImageRight");
    headContainer.appendChild(headerImageRight);


    let menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menuContainer");
    document.getElementById("content").appendChild(menuContainer);

    let startersCategory = document.createElement("div");
    startersCategory.setAttribute("id", "startersCategory")
    menuContainer.appendChild(startersCategory);
    let startersHeadline = document.createElement("h2");
    startersHeadline.setAttribute("class", "menuHeadlines")
    startersHeadline.textContent = "Vorpseisen";
    startersCategory.appendChild(startersHeadline);

    let startersOne = document.createElement("div");
    startersOne.setAttribute("class", "menuDiv");
    let startersBread = document.createElement("h3");
    startersBread.textContent = "Brot & Dips"
    startersOne.appendChild(startersBread);
    let startersBreadDescription = document.createElement("p");
    startersBreadDescription.textContent = "Frisch gebackenes Brot aus eigenem Hause, inklusive verschiedener Dips. Passt zu (fast) allen Teigtaschen."
    startersOne.appendChild(startersBreadDescription);
    let startersBreadFigure = document.createElement("figure");
    let startersBreadImage = document.createElement("img");
    startersBreadImage.src = breadJPG;
    startersBreadImage.setAttribute("class", "menuPictures");
    let startersBreadCaption = document.createElement("figcaption");
    startersBreadCaption.textContent = "Image by Kamran Aydino"
    startersBreadFigure.appendChild(startersBreadImage);
    startersBreadFigure.appendChild(startersBreadCaption);
    startersOne.appendChild(startersBreadFigure);
    startersBreadImage.alt = "Image by KamranAydino";
    startersCategory.appendChild(startersOne);

    let mainCategory = document.createElement("div");
    mainCategory.setAttribute("id", "mainCategory")
    menuContainer.appendChild(mainCategory);
    let mainHeadline = document.createElement("h2");
    mainHeadline.setAttribute("class", "menuHeadlines")
    mainHeadline.textContent = "Teigtaschen";
    mainCategory.appendChild(mainHeadline);

    let mainOne = document.createElement("div");
    mainOne.setAttribute("class", "menuDiv")
    let mainDumpling = document.createElement("h3");
    mainDumpling.textContent = "Khinkhali"
    mainOne.appendChild(mainDumpling);
    let mainDumplingDescription = document.createElement("p");
    mainDumplingDescription.textContent = "Vielleicht DIE Teigtasche überhaupt. Mit Fleisch oder Gemüse. Sehr saftig. Muss mit den Händen gegessen werden, sonst stirbt eine kleine georgische Katze."
    mainOne.appendChild(mainDumplingDescription);
    let mainDumplingFigure = document.createElement("figure");
    let mainDumplingImage = document.createElement("img");
    mainDumplingImage.src = khinkhaliJPG;
    mainDumplingImage.setAttribute("class", "menuPictures");
    let mainDumplingCaption = document.createElement("figcaption");
    mainDumplingCaption.textContent = "Image by Kamran Aydino"
    mainDumplingFigure.appendChild(mainDumplingImage);
    mainDumplingFigure.appendChild(mainDumplingCaption);
    mainOne.appendChild(mainDumplingFigure);
    mainDumplingImage.alt = "Image by KamranAydino";
    mainCategory.appendChild(mainOne);

    let sideCategory = document.createElement("div");
    sideCategory.setAttribute("id", "sideCategory")
    menuContainer .appendChild(sideCategory);
    let sideHeadline = document.createElement("h2");
    sideHeadline.setAttribute("class", "menuHeadlines")
    sideHeadline.textContent = "Beilagen";
    sideCategory.appendChild(sideHeadline);

    let sideOne = document.createElement("div");
    sideOne.setAttribute("class", "menuDiv")
    let sidePotatoes = document.createElement("h3");
    sidePotatoes.textContent = "Kartoffeln"
    sideOne.appendChild(sidePotatoes);
    let sidePotatoesDescription = document.createElement("p");
    sidePotatoesDescription.textContent = "Kartoffeln, frisch aus dem Ofen, dazu Kräuterbutter - machen garantiert satt!"
    sideOne.appendChild(sidePotatoesDescription);
    let sidePotatoesFigure = document.createElement("figure");
    let sidePotatoesImage = document.createElement("img");
    sidePotatoesImage.src = potatoesJPG;
    sidePotatoesImage.setAttribute("class", "menuPictures");
    let sidePotatoesCaption = document.createElement("figcaption");
    sidePotatoesCaption.textContent = "Image by timolina"
    sidePotatoesFigure.appendChild(sidePotatoesImage);
    sidePotatoesFigure.appendChild(sidePotatoesCaption);
    sideOne.appendChild(sidePotatoesFigure);
    sidePotatoesImage.alt = "Image by timolina";
    sideCategory.appendChild(sideOne);


    let drinkCategory = document.createElement("div");
    drinkCategory.setAttribute("id", "drinkCategory")
    menuContainer .appendChild(drinkCategory);
    let drinkHeadline = document.createElement("h2");
    drinkHeadline.setAttribute("class", "menuHeadlines")
    drinkHeadline.textContent = "Getränke";
    drinkCategory.appendChild(drinkHeadline);

    let drinkOne = document.createElement("div");
    drinkOne.setAttribute("class", "menuDiv")
    let drinkTea = document.createElement("h3");
    drinkTea.textContent = "Grüner Tee"
    drinkOne.appendChild(drinkTea);
    let drinkTeaDescription = document.createElement("p");
    drinkTeaDescription.textContent = "Bio-Tee aus sorgsamem Anbau"
    drinkOne.appendChild(drinkTeaDescription);
    let drinkTeaFigure = document.createElement("figure");
    let drinkTeaImage = document.createElement("img");
    drinkTeaImage.src = teaJPG;
    drinkTeaImage.setAttribute("class", "menuPictures");
    let drinkTeaCaption = document.createElement("figcaption");
    drinkTeaCaption.textContent = "Image by Freepik"
    drinkTeaFigure.appendChild(drinkTeaImage);
    drinkTeaFigure.appendChild(drinkTeaCaption);
    drinkOne.appendChild(drinkTeaFigure);
    drinkTeaImage.alt = "Image by Freepik";
    drinkCategory.appendChild(drinkOne);



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


