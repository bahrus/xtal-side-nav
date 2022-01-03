# xtal-side-nav

Side nav (drawer) web component.

xtal-side-nav is an out-of-the-box SSR web component.

## Ways to reference / Artifacts:

1.  ES6 module (local, bare specifier):
    ```
    import  'xtal-side-nav/xtal-side-nav.js';
    ```
2.  ES6 module (CDN):
    ```
    import  'https://esm.run/xtal-side-nav/xtal-side-nav.js';
    ```

unpkg.com, cdn.skypack.net not working currently.  I eagerly await for them to upgrade so they do.

3.  Embedded HTML (SSR):
      1.  If using server side rendering, embed this HTML text in your stream where the first instance needs to go:  https://cdn.jsdelivr.net/npm/xtal-side-nav/xtal-side-nav.html or https://unpkg.com/xtal-side-nav/xtal-side-nav.html.  The latter actually opens in your browser, so that's the demo!  Requires declarative [ShadowDOM polyfill for Firefox / Safari](https://web.dev/declarative-shadow-dom/#detection-support).  Additional instances would be best served by simply including the tag name in the stream, with the light children.  See discussion below for inserting the light children in the first instance. How you embed the HTML text is up to you, of course (file injection from node_modules folder, cacheable CDN fetch, etc.).
      2.  Alternatively, on the client side, use a client-side include, like Jquery's [load](https://api.jquery.com/load/) method, [k-fetch](https://github.com/bahrus/k-fetch), [include-fragment-element](https://github.com/github/include-fragment-element), [sl-include](https://shoelace.style/components/include), [templ-mount](https://github.com/bahrus/templ-mount), [xtal-fetch](https://github.com/bahrus/xtal-fetch), [html-includes](https://www.filamentgroup.com/lab/), [wc-include](https://www.npmjs.com/package/@vanillawc/wc-include), [ng-include](https://www.w3schools.com/angular/ng_ng-include.asp), [html-include-element](https://www.npmjs.com/package/html-include-element) or countless other ought-to-be-built-into-the-platform-already-but-isnt options. and set src (or href) to https://jsdelivr.com/npm/xtal-side-nav/xtal-side-nav.html.  However, inserting the light children with these solutions could be a bit of a hurdle.
      3.  [be-importing](https://github.com/bahrus/be-importing) makes integrating the light children much easier when adopting client-side integration.

4.  Web Component Header Info [TODO]

Similar in spirit to a c/c++ header file, this package also provides a xtal-side-nav.defn.json file that replicates some of the information in the html file, but:

1.  It is JSON, so easier to parse from a V8 process like a CloudFlare Worker.  
2.  It is also quite small, so retrieving and loading into memory should not affect your CPU billing cycle much. 
3.  It is unlikely to change from version to version (only adding more values, most likely).  
4.  It can be elegantly imported from the npm package thanks to support for JSON imports

This header is referred to as the definition file, hence the defn.json file extension.  It provides the ability to create an efficient HTMLRewriter for server-side rendering, as it provides some key information regarding which tags to look out for (in particular, which css queries to add to the 'on' method).

## Setting the drawer content.

The inner HTML of the xtal-side-nav element provides the content inside the drawer.

If using the traditional ES6 module approach, or for second or more instances of the component, just add the content inside the xtal-side-nav as per usual.

But what if we are using SSR for the first instance of the component?

This poses a bit of a challenge for using the SSR solution -- not unique to this one -- how to know where to embed the light children?

As we discussed, the file xtal-side-nav.html is a static html file / stream.  How do we know where in that stream to insert the light children?

There's the easy way and the hard way to embed the light children.

### The easy way:

The html provides two placeholders for inserting attributes and children:  t-a-i-l-b for attributes and \<!----\> for the light children:

```html
<xtal-side-nav t-a-i-l-b be-definitive='{"config":{"tagName":"xtal-side-nav","propDefaults":{"open":false,"updateTransform":{"sideNavParts":[{},{},{"data-open":"open"}]}}}}'>
    <!---->
    ...
</xtal-side-nav>
```

t-a-i-l-b stands for "this attribute intentionally left blank".  So a string search and replace with the desired attributes can be done quite easily.  Likewise with the comment magic string.

So the easy way -- the server side stream retrieves a (cached) copy of the xtal-side-nav.html file/text, and simply does a string replace call, searching for a single:

```html
<!---->
```

tag, and replace it with the desired light children, the contents of the drawer in this case.  In the rare cases you would want the drawer open on page load, replace t-a-i-l-b with "open".

Simple, effective, but not very elegant, and may thwart the ability to utilize streaming.

In this case the file isn't that large, so the benefits of streaming are not that huge.

### The hard way

Same idea, but use something like [HTMLRewriting](https://developers.cloudflare.com/workers/runtime-apis/html-rewriter) to embed the light children in the SSR HTML.   

A project called [xodus](https://github.com/bahrus/xodus) is underway to help make this easier.

The advantage here is the html of the embedded web component could be easily streamed.

<!-- https://codepen.io/bahrus/pen/yLzPZRN -->
