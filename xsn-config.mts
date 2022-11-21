import {html, define} from 'may-it-be/index.js';
import {MayItBe as mib, BeDefinitive } from 'may-it-be/types';
const mode = process.argv[2] as '-js' | '-html';
const beDefinitiveProps  = {
    config: {
        tagName: 'xtal-side-nav',
        propDefaults: {
            open: false,
            closed: true,
            hydratingTransform: {
                openerP: [{disabled: false},{click:{prop:'open', toggleProp: true}}],
                closeBtnP: [{}, {click:{prop: 'open', toggleProp: true}}]
            },
            transform: {
                    aside: [{},{},{'data-open':'open', 'data-mode':'mode', inert:'closed'}],
            },
            mode: 'ltr'       
        },
        propInfo:{
            open: {
                notify:{
                    negateTo: 'closed',
                    dispatch: true,
                    reflectTo: {
                        attr: true
                    }
                }
            }
        },
        keyQueries:['[part=\\"side-nav\\"]'],
    }
} as  BeDefinitive;
const innerHTML = html`
<main part=main>
    <button disabled aria-label="Open Menu" part=opener class=opener>&#9776; <slot name=title></slot></button>
    <aside part=side-nav class=side-nav>
        <button aria-label="Close Menu" part=close-btn>&times;</button>
        <section part=menu-section class=menu-section>
            <slot id="slot"></slot>
        </section>
    </aside>
</main>

<style adopt>
:host {
    display: inherit;
    --drawer-width:250px;
    --side-nav-position:fixed;
    --close-button-left: 50px;
}

main {
    position: relative;
    display: inherit;
}

.menu-section{
    display: flex;
    flex-direction: column;
    width: calc(100% - var(--close-button-left));
}

.side-nav {
    width: 0;
    position: var(--side-nav-position);
    display:flex;
    flex-direction:column;
    z-index: 10;
    top: inherit;
    left: inherit;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
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
    margin-left: var(--close-button-left);
    transition: 0.3s;
}
.opener{
    /* font-size:30px; */
    cursor:pointer
}


@media screen and (max-height: 450px) {
    .side-nav {
        padding-top: 15px;
    }
} 
</style>`;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
});
