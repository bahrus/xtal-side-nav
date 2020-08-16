import { XtalElement, define, TransformValueOptions } from 'xtal-element/XtalElement.js';
import { templStampSym } from 'trans-render/plugins/templStamp.js';
import { createTemplate } from "trans-render/createTemplate.js";
const mainTemplate = createTemplate(/* html*/`
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
<div part=sideNav class="sidenav">
    <a part="closeBtn">&times;</a>
    <slot id="slot"></slot>
</div>

`);
const uiRefs = {sideNav: Symbol('sideNav')};
const initTransform = ({openMenu, closeMenu}: XtalSideNav) => ({
    ':host': [templStampSym, uiRefs],
    span: [{}, {click:openMenu}],
    div:{
        'a,slot': [{}, {click:closeMenu}]
    }
} as TransformValueOptions);
export class XtalSideNav extends XtalElement{
    static is =  'xtal-side-nav';
    readyToInit = true;
    mainTemplate = mainTemplate;
    readyToRender = true;
    initTransform = initTransform;


    openMenu(e: Event){
        this.setWidth(250);
    }
    setWidth(width: number){
        (<any>this)[uiRefs.sideNav].style.width = width + 'px';
    }
    closeMenu(e: Event){
        this.setWidth(0);
    }

}

define(XtalSideNav);