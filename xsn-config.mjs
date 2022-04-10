import { html, define } from 'may-it-be/index.js';
const mode = process.argv[2];
const beDefinitiveProps = {
    config: {
        tagName: 'xtal-side-nav',
        propDefaults: {
            open: false,
            transform: [
                {
                    buttonElements: [{ disabled: false }, { click: { prop: 'open', toggleProp: true } }],
                },
                {
                    asideElements: [{}, {}, { 'data-open': 'open', 'data-mode': 'mode' }],
                }
            ],
            mode: 'ltr'
        },
        keyQueries: ['[part=\\"side-nav\\"]'],
    }
};
const innerHTML = html `
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
    height: 100%;
    width: 0;
    position: absolute;
    display:flex;
    flex-direction:column;
    z-index: 10;
    top: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}
.side-nav[data-mode="ltr"]{
    left: 0;
}
.side-nav[data-mode="rtl"]{
    right: 0;
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
<be-hive></be-hive>`;
define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
