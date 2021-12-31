# xtal-side-nav

Side nav (drawer) web component.

xtal-side-nav is an out-of-the-box SSR web component.

## Ways to reference:

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

## Setting the drawer content.

The inner HTML of the xtal-side-nav element provides the content inside the drawer.

If using the traditional ES6 module approach, or for second or more instances of the component, just add the content inside the xtal-side-nav as per usual.

But what if we are using SSR for the first instance of the component?

This poses a bit of a challenge for using the SSR solution -- not unique to this one -- how to know where to embed the light children?

As we discussed, the file xtal-side-nav.html is a static html file / stream.  How do we know where in that stream to insert the light children?

There's the easy way and the hard way to embed the light children.

### The easy way:

The html provides two placeholders for inserting attributes and children:  -attribs for attributes and may-it-be for the light children:

```html
<xtal-side-nav -attribs be-definitive='{"config":{"tagName":"xtal-side-nav","propDefaults":{"open":false,"updateTransform":{"sideNavParts":[{},{},{"data-open":"open"}]}}}}'>
    <may-it-be></may-it-be>
    ...
</xtal-side-nav>
```

may-it-be is the library that creates the SSR HTML, so that is why the name was chosen.

### The hard way

Use something like [HTMLRewriting](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter) to embed the light children in the SSR HTML.  

If using such a tool, use the "replace" method after subscribing to "may-it-be" elements. 

A project called xodus is underway to help make this easier.

<!-- https://codepen.io/bahrus/pen/yLzPZRN -->
