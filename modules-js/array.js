import {bonjour, default as oui} from './hello.js'; // import

export const sum = (items) => items.reduce((acc, item) => acc + item, 0)
export default () => console.log('Test (hello)');
export const hello = () => console.log('hello (array)');

oui()
export const testBonjour = bonjour