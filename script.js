document.addEventListener('DOMContentLoaded', function () {

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = menuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        }
    });

    // Teacher Slider
    const slider = document.getElementById('teacher-slider');
    if (slider) {
        const prevBtn = document.getElementById('prev-teacher');
        const nextBtn = document.getElementById('next-teacher');
        const slides = document.querySelectorAll('.teacher-slide');
        
        let slidesPerView = 4;
        const totalSlides = slides.length / 2; // We duplicated slides for infinite effect
        let currentIndex = 0;

        function updateSlidesPerView() {
            if (window.innerWidth < 640) slidesPerView = 1;
            else if (window.innerWidth < 768) slidesPerView = 2;
            else if (window.innerWidth < 1024) slidesPerView = 3;
            else slidesPerView = 4;
        }

        function updateSlider() {
            const slideWidth = slider.clientWidth / slidesPerView;
            slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            updateSlider();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            }
            updateSlider();
        });

        window.addEventListener('resize', () => {
            updateSlidesPerView();
            updateSlider();
        });

        // Initial setup
        updateSlidesPerView();
        updateSlider();

        // Autoplay
        setInterval(() => {
            nextBtn.click();
        }, 4000);
    }
});