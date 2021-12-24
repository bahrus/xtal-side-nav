import { html } from 'may-it-be/index.js';
const template = html `
<template ${{}}>
</template>

`;
const js = `
import('be-definitive/be-definitive.js');
const template = \`${template}\`;
document.body.insertAdjacentHTML('beforeend', template);
`;
console.log(js);
