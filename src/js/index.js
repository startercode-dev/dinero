import $ from 'jquery';

const documentHeight = () => {
    const doc = document.documentElement;
    const height = window.innerHeight - $('.nav').outerHeight();
    doc.style.setProperty('--doc-height', `${height}px`);
};
window.addEventListener('resize', documentHeight);
documentHeight();

// SCROLL TO SECTION UPON CLICKING

const sideHeaderClick = (className, section) => {
    $(`.${className}`).on('click', () => {
        section[0].scrollIntoView({
            behavior: 'smooth',
        });
    });
};

sideHeaderClick('cta-signup', $('.contact'));
sideHeaderClick('menu-values', $('.features'));
sideHeaderClick('menu-stats', $('.stats'));
sideHeaderClick('menu-pricing', $('.pricing'));
sideHeaderClick('login', $('.contact'));
sideHeaderClick('signup', $('.contact'));
sideHeaderClick('cta-explore-btn', $('.pricing'));
sideHeaderClick('features__learn-more', $('.contact'));
sideHeaderClick('card-cta', $('.contact'));
