import {html, define} from 'may-it-be/index.js';
import {MayItBe as mib, BeDefinitiveVirtualProps } from 'may-it-be/types';
const mode = process.argv[2] as '-js' | '-html';
const beDefinitiveProps: BeDefinitiveVirtualProps = {
    config: {
        tagName: 'xtal-side-nav',
        propDefaults: {
            open: false,
            updateTransform: {
                sideNavParts: [{},{},{'data-open':'open'}]
            }
        },
        keyQueries:['[part=\\"side-nav\\"]'],
    }
};
const innerHTML = html`
<template be-active>
    <script id=be-noticed/be-noticed.js></script>
</template>
<button aria-label="Open Menu" part=opener class=opener ${{
    beNoticed:{
        click:{prop:'open', toggleProp:true}
    }
} as mib}>&#9776; <slot name=title></slot></button>
<div part=side-nav class=side-nav>
    <button aria-label="Close Menu" part=close-btn ${{
        beNoticed:{click:{prop:'open', toggleProp:true}}
    } as mib}>&times;</button>
    <slot id="slot"></slot>
</div>
<be-hive></be-hive>

<style>
:host {
    display: block;
    --drawer-width:250px;
}

.side-nav {
    height: 100%;
    width: 0;
    position: absolute;
    display:flex;
    flex-direction:column;
    z-index: 10;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
}

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

`;

define({
    innerHTML,
    mode,
    beDefinitiveProps,
    encodeAndWrite: console.log,
})
