# xtal-side-nav

Side nav (drawer) web component.

xtal-side-nav is an out-of-the-box SSR web component.

## [API](https://cf-sw.bahrus.workers.dev/?href=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fxtal-side-nav%400.0.69%2Fcustom-elements.json&stylesheet=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fwc-info%2Fsimple-ce-style.css&embedded=false&tags=&ts=2022-03-12T17%3A17%3A28.479Z&tocXSLT=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fwc-info%2Ftoc.xsl)

## Ways to reference

### Using npm modules

```html
<xtal-side-nav be-importing=xtal-side-nav/xtal-side-nav.html>
    <section style='color:white'>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
    </section>
</xtal-side-nav>
<div id=target></div>
<script type=importmap>{
    "imports":{
        "stream-orator/": "../node_modules/stream-orator/",
        "trans-render/": "../node_modules/trans-render/",
        "xtal-element/": "../node_modules/xtal-element/",
        "be-based/": "../node_modules/be-based/",
        "be-decorated/": "../node_modules/be-decorated/",
        "be-exportable/": "../node_modules/be-exportable/",
        "be-having/": "../node_modules/be-having/",
        "be-hive/": "../node_modules/be-hive/",
        "be-importing/": "../node_modules/be-importing/",
        "be-written/": "../node_modules/be-written/",
        "xtal-side-nav/": "../node_modules/xtal-side-nav/"
    }
}</script>
<script type=module>
    import 'be-importing/be-importing.js';
</script>
```

Note that we can give any name we want to the custom element, it doesn't have to match the default name specified by the html file!

### Using CDN:

```html
<xtal-side-nav be-importing=xtal-side-nav/xtal-side-nav.html>
    <section style='color:white'>
        <div>Menu Item 1</div>
        <div>Menu Item 2</div>
    </section>
</xtal-side-nav>
<div id=target></div>
<script type=importmap>{
    "imports":{
        "xtal-side-nav/": "https://cdn.jsdelivr.net/npm/xtal-side-nav@0.0.104/"
    }
}</script>
<script type=module>
    import 'https://esm.run/be-importing@0.0.45';
</script>
```


