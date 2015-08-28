/**
 * Created by Cory on 3/11/2015.
 * updated: 08/28/2015
 *
 */
(function () {
    'use strict';

    var navContainer = document.querySelector('.fn-nav-container'),
        navList = document.querySelector('.fn-navigation'),
        body = document.body,
        header = document.querySelector('.fn-header'),
        menuButton = document.querySelector('.fn-header__button'),
        main = document.getElementById('js-main'),
        checkbox = document.getElementById("fn-noJs"),
        cbLabel = document.getElementById("fn-noJs_label"),
        mq = window.matchMedia("(max-width: 50em)");

// since js is running remove the checkbox and label from the dom
    if (checkbox.parentNode) {
        checkbox.parentNode.removeChild(checkbox);
    }
    if (cbLabel.parentNode) {
        cbLabel.parentNode.removeChild(cbLabel);
    }

    if (mq.matches) {
        navList.setAttribute('aria-hidden', 'true');
        navList.setAttribute('aria-labelledby', 'fn-header__button');
        navList.setAttribute('aria-hidden', 'true');
        navList.setAttribute('aria-labelledby', 'fn-header__button');
    }

    function closeMenu() {
        body.classList.remove('is-open');
        header.classList.remove('is-open');
        navList.classList.remove('is-open');
        navContainer.classList.remove('is-open');
        menuButton.innerHTML = 'Menu &#x2261;';
    }

    function openMenu() {
        body.classList.toggle('is-open');
        header.classList.toggle('is-open');
        navList.classList.toggle('is-open');
        navContainer.classList.toggle('is-open');
        navList.classList.add('opened');
        if (navList.classList.contains('is-open')) {
            menuButton.setAttribute('aria-expanded', 'true');
            navList.setAttribute('aria-hidden', 'false');
            menuButton.innerHTML = 'Close &#x2261;';
        } else {
            navList.setAttribute('aria-hidden', 'true');
            menuButton.setAttribute('aria-expanded', 'false');
            menuButton.innerHTML = 'Menu &#x2261;';
        }

    }


    main.addEventListener('click', closeMenu );
    menuButton.addEventListener('click', openMenu);
    navList.addEventListener('click', function (event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });

})()
