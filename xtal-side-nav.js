import { html } from 'trans-render/lib/html.js';
import { def } from 'd-fine/def.js';
import('tran-sister/tran-sister.js');
const mainTemplate = html `
<style>
    :host {
        display: block;
    }

    .side-nav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 10;
        top: 0;
        left: 0;
        background-color: #111;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }

    .side-nav[data-open="true"]{
        width: 250px;
    }

    .side-nav[data-open="false"]{
        width: 0px;
    }

    /* .side-nav button {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        
    } */

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
<button part=opener class=opener>&#9776; <slot name=title></slot></button>
<tran-sister on=click transform='{
    ".side-nav": [{"dataset": {"open": "true"}}]
}'></tran-sister>
<div part=side-nav class=side-nav data-open=false>
    <button part=close-btn>&times;</button>
    <tran-sister on=click transform='{
        ".side-nav": [{"dataset": {"open": "false"}}]
    }'></tran-sister>
    <slot id="slot"></slot>
</div>
`;
def(mainTemplate, [], {}, false, {
    config: {
        tagName: 'xtal-side-nav'
    }
});
