(function () {
  'use strict';

  var querySelector       = document.querySelector.bind(document),
      navContainer        = querySelector( '.navigation' ),
      body                = document.body,
      header              = querySelector( '.header-nav--menu-container' ),
      menuBtn             = querySelector( '.button--header-nav' ),
      main                = querySelector( 'main' );

    // aria attributes
  menuBtn.setAttribute( 'aria-expanded', 'false' );
  menuBtn.setAttribute( 'aria-label', 'Menu' );
  menuBtn.setAttribute( 'aria-controls', 'menu' );

  // I don't know about this...seems pretty crude
  if (window.screen.width < 800 ) {
    navContainer.setAttribute( 'aria-hidden', 'true' );
    navContainer.setAttribute( 'aria-labelledby', 'button--header-nav' );
  }


  function closeMenu() {
    body.classList.remove( 'open' );
    header.classList.remove( 'open' );
    navContainer.classList.remove( 'open' );
  }

  function openMenu() {
    body.classList.toggle( 'open' );
    header.classList.toggle( 'open' );
    navContainer.classList.toggle( 'open' );
    navContainer.classList.add( 'opened' );
    if ( navContainer.classList.contains( 'open' )) {
      menuBtn.setAttribute( 'aria-expanded', 'true' );
      navContainer.setAttribute( 'aria-hidden', 'false' );
    } else {
      navContainer.setAttribute( 'aria-hidden', 'true' );
      menuBtn.setAttribute( 'aria-expanded', 'false' );
    }

  }

  main.addEventListener( 'click', closeMenu );
  menuBtn.addEventListener( 'click', openMenu );
  navContainer.addEventListener( 'click', function ( event ) {
    if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
      closeMenu();
    }
  });

})();
