/**
 * Created by Cory on 3/9/2015.
 */
(function () {
    'use strict';

    var querySelector       = document.querySelector.bind(document),
        navContainer        = querySelector('.fn-nav-container'),
        navList             = querySelector('.fn-navigation'),
        body                = document.body,
        header              = querySelector('.fn-header'),
        headerTitle         = document.getElementById('fn-title'),
        menuBtn             = querySelector('.fn-header__button'),
        menuButton          = document.createElement('button'),
        main                = querySelector('main'),
        checkbox            = document.getElementById("fn-noJs"),
        cbLabel             = document.getElementById("fn-noJs_label"),
    // from https://dev.opera.com/articles/opera-mini-and-javascript/
        isOperaMini         = (navigator.userAgent.indexOf('Opera Mini') > -1);

    // js wont run properly on opera mini and opera mini has crazy big usage numbers outside of The United States
    if (isOperaMini) {
        document.documentElement.className += " operamini";
    }

    // since js is running remove the checkbox and label from the dom
    // and insert a button
    // Menu Button properties
    menuButton.classList.add('fn-header__button');
    menuButton.setAttribute('aria-label', 'Menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'menu');
    menuButton.innerHTML = '<span aria-hidden="true">Menu &#x2261;</span>';
    // insert the button into the header
    headerTitle.appendChild(menuButton);

    //var headerParent = navContainer.parentNode;
    //headerParent.insertBefore(menuButton, navContainer);

    // remove checkbox and checkbox label since javascript is present
    if (checkbox.parentNode) {
        checkbox.parentNode.removeChild(checkbox);
    }
    if (cbLabel.parentNode) {
        cbLabel.parentNode.removeChild(cbLabel);
    }
    // I don't know about this...seems pretty crude
    if (window.screen.width < 800) {
        navList.setAttribute( 'aria-hidden', 'true' );
        navList.setAttribute( 'aria-labelledby', 'button--header-nav' );
    }


    function closeMenu() {
        body.classList.remove( 'open' );
        header.classList.remove( 'open' );
        navList.classList.remove( 'open' );
        menuButton.innerHTML = '<span aria-hidden="true">Menu &#x2261;</span>';
    }

    function openMenu() {
        body.classList.toggle( 'open' );
        header.classList.toggle( 'open' );
        navList.classList.toggle( 'open' );
        navList.classList.add( 'opened' );
        if ( navList.classList.contains( 'open' )) {
            menuButton.setAttribute( 'aria-expanded', 'true' );
            navList.setAttribute( 'aria-hidden', 'false' );
            menuButton.innerHTML = '<span aria-hidden="true">Close &#x2261;</span>';
        } else {
            navList.setAttribute( 'aria-hidden', 'true' );
            menuButton.setAttribute( 'aria-expanded', 'false' );
            menuButton.innerHTML = '<span aria-hidden="true">Menu &#x2261;</span>';
        }

    }

    main.addEventListener( 'click', closeMenu );
    menuButton.addEventListener( 'click', openMenu );
    navList.addEventListener( 'click', function ( event ) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });

})();
