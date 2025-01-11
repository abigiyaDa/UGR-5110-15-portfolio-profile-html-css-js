function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";

    // Add event listener to hide sidebar when clicking outside
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey); // Handle Esc key to close
}

function hideSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";

    // Remove the event listener when sidebar is hidden
    document.removeEventListener("click", handleClickOutside);
    document.removeEventListener("keydown", handleEscapeKey);
}

function handleClickOutside(event) {
    const sidebar = document.querySelector(".sidebar");
    const toggleButton = event.target.closest(".hideOnDesktop");

    // Check if the click is outside the sidebar and not on the toggle button
    if (!sidebar.contains(event.target) && !toggleButton) {
        hideSidebar();
    }
}

function handleEscapeKey(event) {
    if (event.key === "Escape") {
        hideSidebar();
    }
}
//auto scroll

document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        let scrollInterval;
        const scrollSpeed = 3000; // 3 seconds
        const slideWidth = slider.scrollWidth / slider.children.length;

        const startAutoScroll = () => {
            scrollInterval = setInterval(() => {
                const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
                if (slider.scrollLeft < maxScrollLeft) {
                    slider.scrollLeft += slideWidth;
                } else {
                    slider.scrollLeft = 0; // Loop back to the start
                }
            }, scrollSpeed);
        };

        const stopAutoScroll = () => clearInterval(scrollInterval);

        // Start auto-scroll
        startAutoScroll();

        // Pause scrolling on hover
        slider.addEventListener("mouseenter", stopAutoScroll);
        slider.addEventListener("mouseleave", startAutoScroll);
    });
});
