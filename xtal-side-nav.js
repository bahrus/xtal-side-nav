import { html } from 'trans-render/lib/html.js';
import('be-definitive/be-definitive.js');
import('be-noticed/be-noticed.js');
import('be-observant/be-observant.js');
import('be-hive/be-hive.js');
if (document.querySelector('be-hive') === null) {
    document.body.appendChild(document.createElement('be-hive'));
}
const mainTemplate = html `
<style>
</style>
<button aria-label="Open Menu" part=opener class=opener be-noticed='{
    "click": {"prop": "open", "toggleProp": true}
}'>&#9776; <slot name=title></slot></button>
<div part=side-nav data-open=false class=side-nav be-observant='{
    "data-open": {"onSet": "open", "vft": "open", "as": "str-attr"}
}'>
    <button aria-label="Close Menu" part=close-btn be-noticed='{
        "click": {"prop": "open", "toggleProp": true}
    }'>&times;</button>
    <slot id="slot"></slot>
</div>
<be-hive></be-hive>
`;
const beDefinitiveProps = {
    config: {
        tagName: 'xtal-side-nav',
        propDefaults: {
            open: false,
        }
    }
};
mainTemplate.setAttribute('be-definitive', JSON.stringify(beDefinitiveProps));
document.body.appendChild(mainTemplate);
