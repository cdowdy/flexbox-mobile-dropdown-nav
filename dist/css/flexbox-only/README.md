# Flexbox Only Navigation  
These CSS files only contain support for modern browsers that recognize:  
* unprefixed flexbox  
  * ```display: flex;```  
* rem units  
  * ```padding: 0 0.9375rem;```  
* media queries  
  * ```@media screen and (min-width: 50em)```  

There **is no fallback** for browsers < IE 11 , Android < 4.4 nor Safari (iOS included).  

Example:  
```css  
/* navigation unordered list */
.fn-navigation {
  list-style: none;
  background-color: #333;
  display: none;
  visibility: hidden;
}

/* screens above 800px */
@media screen and (min-width: 50em) {  
  .fn-navigation {
    display: flex;
    visibility: visible;
    max-width: 80%;
    margin: auto;
    justify-content: space-around;
    align-items: center;
  }
}
```
