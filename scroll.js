document.addEventListener('DOMContentLoaded', function() {
    var header = document.querySelector('.header');
    var projectsSection = document.querySelector('.projects');

    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var projectsSectionOffset = projectsSection.offsetTop - 200;

        if (scrollPosition > projectsSectionOffset) {
            setTimeout(function() {
                header.classList.add('header-hidden');
            }, 100);
        } else {
            header.classList.remove('header-hidden');
        }
    });
});
