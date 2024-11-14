// polyfill.js
import { JSDOM } from 'jsdom';

// Shim window and document
const dom = new JSDOM('');
globalThis.window = dom.window;
globalThis.document = dom.window.document;