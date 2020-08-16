import {XtalElement, define, TransformValueOptions} from 'xtal-element/XtalElement.js';
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

    .sidenav #closebtn {
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
<span id="opener" style="font-size:30px;cursor:pointer">&#9776; <slot name="title"></slot></span>
<div id="mySidenav" class="sidenav">
    <a id="closebtn">&times;</a>
    <slot id="slot"></slot>
</div>

`);
const initTransform = ({openMenu, closeMenu}: XtalSideNav) => ({
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
        this.shadowRoot!.getElementById('mySidenav')!.style.width = width + 'px';
    }
    closeMenu(e: Event){
        this.setWidth(0);
    }

}

define(XtalSideNav);