import { mount } from 'svelte';
import Root from './App.svelte';
import './global.css';

export default mount(Root, {
    target: document.getElementById('app'),
});
