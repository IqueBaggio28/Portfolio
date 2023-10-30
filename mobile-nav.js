const mobileNav = () => {
    const headerBtn = document.querySelector('.header__bars');
    const mobileNav = document.querySelector('.mobile-nav');

    headerBtn.addEventListener('click', () => {
        mobileNav.style.display = 'flex';
    });
};

