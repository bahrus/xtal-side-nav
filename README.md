# xtal-side-nav

Side nav (drawer) web component.

xtal-side-nav is an out-of-the-box SSR web component.

Ways to reference:

1.  ES6 module (local, bare specifier):
    ```
    import  'xtal-side-nav/xtal-side-nav.js';
    ```
2.  ES6 module (CDN):
    ```
    import  'https://esm.run/xtal-side-nav/xtal-side-nav.js';
    ```
3.  Embedded HTML (SSR):
      1.  If using server side rendering, embed this HTML text in your page:  https://cdn.jsdelivr.net/npm/xtal-side-nav/xtal-side-nav.html or https://unpkg.com/xtal-side-nav/xtal-side-nav.html.  The latter actually opens in your browser, so that's the demo!  Requires declarative [ShadowDOM polyfill for Firefox / Safari](https://web.dev/declarative-shadow-dom/#detection-support).
      2.  Alternatively, on the client side, use a client-side include, like Jquery's [load](https://api.jquery.com/load/) method, [k-fetch](https://github.com/bahrus/k-fetch), [include-fragment-element](https://github.com/github/include-fragment-element), [sl-include](https://shoelace.style/components/include), [templ-mount](https://github.com/bahrus/templ-mount), [xtal-fetch](https://github.com/bahrus/xtal-fetch), [html-includes](https://www.filamentgroup.com/lab/), [wc-include](https://www.npmjs.com/package/@vanillawc/wc-include), [ng-include](https://www.w3schools.com/angular/ng_ng-include.asp), [html-include-element](https://www.npmjs.com/package/html-include-element) or countless other ought-to-be-built-into-the-platform-already-but-isnt options. and set src (or href) to https://jsdelivr.com/npm/xtal-side-nav/xtal-side-nav.html

<!-- https://codepen.io/bahrus/pen/yLzPZRN -->
