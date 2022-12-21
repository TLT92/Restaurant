import _ from 'lodash'

import './style.css';

import dumplingGif from './dumpling.gif';

import dumplingPng from './dumpling.png';

import potatoesJPG from './french-fries-potato-wedges-min.jpg';

import teaJPG from './high-view-green-leaves-cup-tea-min.jpg';

import breadJPG from './sourdough-bread-table-min.jpg';

import khinkhaliJPG from './traditional-georgian-khinkali-top-view.jpg';



import {homePage} from './homePage.js';

import {menuPage} from './menuPage.js';

import {reservePage} from './reservePage.js';

let content = document.getElementById("content");
let reserveFormContainer = document.createElement("div");
reserveFormContainer.setAttribute("id", "reserveFormContainer")
content.appendChild(reserveFormContainer);

let navigationBarFunction = function() {
    let navigationBar = document.createElement("div");
    navigationBar.setAttribute("id", "navigationBar");
    let homeButton = document.createElement("button");
    homeButton.setAttribute("class", "Buttons");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", function() {
        let contentChildren = Array.from(content.children);
        let stayingElementOne = document.getElementById("reserveFormContainer");
        let stayingElementTwo = document.getElementById("reserveForm");
        contentChildren.forEach((element) => {
            if(element !== stayingElementOne && element !== stayingElementTwo) {
                element.remove();
            }
        })
        document.getElementById("reserveFormContainer").style.display = "none";
        document.getElementById("reserveForm").style.display = "none";
        navigationBarFunction();
        homePage();
    });
    let menuButton = document.createElement("button");
    menuButton.setAttribute("class", "Buttons");
    menuButton.textContent = "Karte";
    menuButton.addEventListener("click", function() {
        let contentChildren = Array.from(content.children);
        let stayingElementOne = document.getElementById("reserveFormContainer");
        let stayingElementTwo = document.getElementById("reserveForm");
        contentChildren.forEach((element) => {
            if(element !== stayingElementOne && element !== stayingElementTwo) {
                element.remove();
            }
        })
        document.getElementById("reserveFormContainer").style.display = "none";
        document.getElementById("reserveForm").style.display = "none";
        navigationBarFunction();
        menuPage();
    });
    let reserveButton = document.createElement("button");
    reserveButton.setAttribute("class", "Buttons");
    reserveButton.textContent = "Reservieren";
    reserveButton.addEventListener("click", function() {
        let contentChildren = Array.from(content.children);
        let stayingElementOne = document.getElementById("reserveFormContainer");
        let stayingElementTwo = document.getElementById("reserveForm");
        contentChildren.forEach((element) => {
            if(element !== stayingElementOne && element !== stayingElementTwo) {
                element.remove();
            }
        })
        navigationBarFunction();
        reservePage();
    });
    navigationBar.appendChild(homeButton);
    navigationBar.appendChild(menuButton);
    navigationBar.appendChild(reserveButton);
    document.getElementById("content").appendChild(navigationBar);
}

navigationBarFunction();
homePage();