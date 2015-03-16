# This CSS uses the un-prefixed version of flexbox.  
Only modern browsers using the un-prefixed version will get the flexbox layout (Android 4.4+, Internet Explorer 11). Every browser that doesn't support ``display: flex`` will use the ```.no-flexbox``` class.  

**rem units are also used so Internet Explorer 8 and Opera Mini are not supported.**

For Example:
```css  
.fn-header__title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.9375rem;
  height: 100%;
}
```  
instead of something as follows for wide browser range of flexbox support and support for browsers that don't recognize rem units

```css
.fn-header__title-container {
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    display:flex;
    -webkit-box-pack:justify;
    -webkit-justify-content:space-between;
    -ms-flex-pack:justify;
    justify-content:space-between;
    -webkit-box-align:center;
    -webkit-align-items:center;
    -ms-flex-align:center;
    align-items:center;
    padding:0 15px;
    padding:0 .9375rem;
    height:100%
}
```  
## It also contains fallbacks for browsers that don't any verison of  flexbox.  
example:  
```css  
@media screen and (min-width: 50em) {
  .fn-navigation {
    display: flex;
    visibility: visible;
    max-width: 80%;
    margin: auto;
    justify-content: space-around;
    align-items: center; }
}
```  
has a fallback using modernizr as follows:  
```css  
@media screen and (min-width: 50em) {
  .no-flexbox .fn-navigation {
    display: block;
    visibility: visible;
    text-align: center;
    margin-top: 0.9375rem; }
}  
```  
You can use this file since it has ```.no-flexbox``` and ```.no-mediaqueries``` but **rem units are still used you will have some layout issues in IE8**.
