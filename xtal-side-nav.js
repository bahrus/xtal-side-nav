import { html } from 'trans-render/lib/html.js';
import { def } from 'd-fine/def.js';
import('be-noticed/be-noticed.js');
import('be-observant/be-observant.js');
const mainTemplate = html `
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

    .side-nav[data-open="true"]{
        width: var(--drawer-width);
    }

    .side-nav[data-open="false"]{
        width: 0px;
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
<button part=opener class=opener be-noticed='{
    "click": {"prop": "open", "toggleProp": true}
}'>&#9776; <slot name=title></slot></button>
<div part=side-nav class=side-nav be-observant='{
    "data-open": {"onSet": "open", "vft": "open", "as": "str-attr"}
}'>
    <button part=close-btn be-noticed='{
        "click": {"prop": "open", "toggleProp": true}
    }'>&times;</button>
    <slot id="slot"></slot>
</div>
<be-observant></be-observant>
<be-noticed></be-noticed>
`;
def(mainTemplate, [], {}, false, {
    config: {
        tagName: 'xtal-side-nav',
        propDefaults: {
            open: false,
        }
    }
});
