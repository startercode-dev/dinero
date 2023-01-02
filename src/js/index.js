import $ from 'jquery';

const documentHeight = () => {
    const doc = document.documentElement;
    const height = window.innerHeight - $('.nav').outerHeight();
    doc.style.setProperty('--doc-height', `${height}px`);
};
window.addEventListener('resize', documentHeight);
documentHeight();
