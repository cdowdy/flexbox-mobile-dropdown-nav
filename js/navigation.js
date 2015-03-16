(function () {
    'use strict';

    var querySelector       = document.querySelector.bind(document),
        navList             = querySelector('.fn-navigation'),
        body                = document.body,
        header              = querySelector('.fn-header'),
        menuBtn             = querySelector('.fn-header__button'),
        menuButton          = document.createElement('button'),
        main                = querySelector('main'),
        checkbox            = document.getElementById("fn-noJs"),
        cbLabel             = document.getElementById("fn-noJs_label");

    // since js is running remove the checkbox and label from the dom
    // and insert a button
    // Menu Button properties
    menuButton.classList.add('fn-header__button');
    menuButton.setAttribute('aria-label', 'Menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', 'menu');
    menuButton.innerHTML = '<span aria-hidden="true">Menu &#x2261;</span>';
    // insert the button into the header
    header.appendChild(menuButton);

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
        body.classList.remove( 'is-open' );
        header.classList.remove( 'is-open' );
        navList.classList.remove( 'is-open' );
        menuButton.innerHTML = '<span aria-hidden="true">Menu &#x2261;</span>';
    }

    function openMenu() {
        body.classList.toggle( 'is-open' );
        header.classList.toggle( 'is-open' );
        navList.classList.toggle( 'is-open' );
        navList.classList.add( 'opened' );
        if ( navList.classList.contains( 'is-open' )) {
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
