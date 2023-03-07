/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-template */
export default class Popover {
    constructor() {
        this.popovers = [];
    }

    showPopover(title, text, element) {
        const popoverElement = document.createElement('div');
        const popoverHeader = document.createElement('h3');
        const popoverBody = document.createElement('div');

        popoverElement.appendChild(popoverHeader);
        popoverElement.appendChild(popoverBody);

        popoverElement.classList.add('popover');
        popoverHeader.classList.add('popover-header');
        popoverBody.classList.add('popover-body');

        popoverHeader.textContent = title;
        popoverBody.textContent = text;

        const id = performance.now();

        this.popovers.push({
            id,
            element: popoverElement,
        });
        document.body.appendChild(popoverElement);

        const { top, left } = element.getBoundingClientRect();

        popoverElement.style.left = left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2 + 'px';
        popoverElement.style.top = top - popoverElement.offsetHeight - 5 + 'px';

        return id;
    }

    removePopover(id) {
        const popover = this.popovers.find((p) => p.id === id);

        popover.element.remove();

        this.popovers = this.popovers.filter((p) => p.id !== id);
    }
}
