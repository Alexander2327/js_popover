/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import Popover from './popover';

const text = 'And here`s some amaizing content. It`s vary engaging. Right?';
const title = 'Popover title';

document.addEventListener('DOMContentLoaded', () => {
    const popoverFactory = new Popover();

    const btn = document.querySelector('.btn');

    let actualid = null;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const popover = document.querySelector('.popover');
        if (!popover) {
            const id = popoverFactory.showPopover(title, text, e.target);
            actualid = id;
        } else {
            popoverFactory.removePopover(actualid);
        }
    });
});
