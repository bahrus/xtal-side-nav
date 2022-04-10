import('be-definitive/be-definitive.js');
import('be-active/be-active.js');

document.body.insertAdjacentHTML('beforeend', `<template be-definitive='{"config":{"tagName":"xtal-side-nav","propDefaults":{"open":false,"transform":[{"buttonElements":[{"disabled":false},{"click":{"prop":"open","toggleProp":true}}]},{"asideElements":[{},{},{"data-open":"open","data-mode":"mode"}]}],"mode":"ltr"},"keyQueries":["[part=\\\"side-nav\\\"]"]}}'>
<main part=main>
    <button disabled aria-label="Open Menu" part=opener class=opener>&#9776; <slot name=title></slot></button>
    <aside part=side-nav class=side-nav>
        <button aria-label="Close Menu" part=close-btn>&times;</button>
        <slot id="slot"></slot>
    </aside>
</main>

<style be-adopted>
:host {
    display: block;
    --drawer-width:250px;
}

main {
    position: relative;
}

.side-nav {
    /* height: calc(100vh - 80px); */
    width: 0;
    position: fixed;
    display:flex;
    flex-direction:column;
    z-index: 10;
    top: inherit;
    left: inherit;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
.side-nav[data-mode="ltr"]{
    left: 8px;
}
.side-nav[data-mode="rtl"]{
    right: 8px;
}
/*
TODO:  use FLIP?
*/
.side-nav[data-open]{
    width: var(--drawer-width);
}

.side-nav:not([data-open]){
    width: 0px;
    height:0px;
}

.side-nav button {
    position: absolute;
    cursor:pointer;
    top: 0;
    right: 0px;
    font-size: 36px;
    margin-left: 50px;
    transition: 0.3s;
}
.opener{
    font-size:30px;
    cursor:pointer
}


@media screen and (max-height: 450px) {
    .side-nav {
        padding-top: 15px;
    }
} 
</style>
<be-hive></be-hive></template>`);
