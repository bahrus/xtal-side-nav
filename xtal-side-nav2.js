import { html } from 'trans-render/lib/html.js';
import { def } from 'd-fine/def.js';
import('tran-sister/tran-sister.js');
const mainTemplate = html `
<style>
    :host {
        display: block;
    }

    .sidenav {
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

    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidenav a:hover {
        color: #f1f1f1;
    }

    .sidenav [part="closeBtn"] {
        position: absolute;
        cursor:pointer;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
        .sidenav a {
            font-size: 18px;
        }
    }
</style>
<span part=opener style="font-size:30px;cursor:pointer">&#9776; <slot name="title"></slot></span>
<tran-sister on=click transform='{
    ".sidenav": [{"style": {"width": "250px"}}]
}'></tran-sister>
<div part=sideNav class="sidenav">
    <a part="closeBtn">&times;</a>
    <slot id="slot"></slot>
</div>
`;
def(mainTemplate, [], {}, false, {
    config: {
        tagName: 'xtal-side-nav'
    }
});
