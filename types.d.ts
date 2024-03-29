import {SimpleWCInfo} from 'may-it-be/SimpleWCInfo';

export interface XtalSideNavProps {
    /**
     * indicates if side nav is (or should be) open or not.
     */
    open: boolean;
    
    /**
     * Specify whether drawer should open left to right or right to left.
     * Default:  ltr
     */
    mode: 'rtl' | 'ltr';
}

/**
 * Side nav (drawer) web component.
 */
export abstract class XtalSideNaveInfo implements SimpleWCInfo {
    src: './xtal-side-nav.js';
    tagName: 'xtal-side-nav';
    props: XtalSideNavProps;
    cssParts: {
        sideNav: 'drawer element that opens up',
        opener: 'button that opens up the drawer',
        closeBtn: 'button that closes the drawer',
    }
}

export type Package = [XtalSideNaveInfo];