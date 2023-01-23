import $, { each } from 'jquery';

const documentHeight = () => {
    const doc = document.documentElement;
    const height = window.innerHeight - $('.header').outerHeight();
    doc.style.setProperty('--doc-height', `${height}px`);
};
window.addEventListener('resize', documentHeight);
documentHeight();

//---------------------------------
// CLICK SCROLLING
//---------------------------------

const clickScroll = (className, section) => {
    //click and scrolling to the selected section
    $(`.${className}`).on('click', () => {
        $(`.${section}`)[0].scrollIntoView({
            behavior: 'smooth',
        });
    });
};

clickScroll('cta-signup', 'contact');
clickScroll('menu-values', 'features');
clickScroll('menu-stats', 'stats');
clickScroll('menu-pricing', 'pricing');
clickScroll('login', 'contact');
clickScroll('signup', 'contact');
clickScroll('cta-explore-btn', 'pricing');
clickScroll('features__learn-more', 'contact');
clickScroll('card-cta', 'contact');

//---------------------------------
// FEATURES ANIMATION
//---------------------------------

const loadAnimations = (threshold) => {
    //faciliates page loading animation
    const loadSection = (elem) => {
        if (elem.hasClass('section--hidden')) {
            elem.removeClass('section--hidden');
        }
    };

    const setAnimationObserver = (elem) => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.intersectionRatio >= threshold) {
                    loadSection(elem);
                }
            },
            {
                threshold,
            }
        );
        sectionObserver.observe(elem[0]);
    };

    $('.animate').each((i, elem) => {
        $(elem).addClass('section--hidden');
        setAnimationObserver($(elem));
    });
};

loadAnimations(0.3);

//---------------------------------
// NAV BAR MOBILE
//---------------------------------

$('.mobile-nav-btn').click(() => {
    $('.header__mobile-menu').toggleClass('show');
    $('.header').toggleClass('fixed-top');
    $('.mobile-nav-btn i').toggleClass('ph-x');
    $('.mobile-nav-btn i').toggleClass('ph-list-light');
    $('body').toggleClass('pt-53');
});

$(window).resize(() => {
    const condition =
        $('.header').hasClass('fixed') ||
        $('.header__mobile-menu').hasClass('show') ||
        $('.hero').hasClass('pt-35')
            ? true
            : false;
    if ($(window).width() >= 520 && condition) {
        $('.header').removeClass('fixed');
        $('.header__mobile-menu').removeClass('show');
        $('.hero').removeClass('pt-35');
        if ($('.mobile-nav-btn i').hasClass('ph-x')) {
            console.log(true);
            $('.mobile-nav-btn i').toggleClass('ph-list-light');
            $('.mobile-nav-btn i').toggleClass('ph-x');
        }
    }
});
