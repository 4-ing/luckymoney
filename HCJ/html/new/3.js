document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.bottomButton');
    const tabPanels = document.querySelectorAll('.itemListDiv');

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const targetTab = this.getAttribute("data-tab");

            tabPanels.forEach(panel => {
                panel.style.display = "none";
                panel.classList.remove("active");
            });

            const activePanel = document.getElementById(targetTab);
            if (activePanel) {
                activePanel.style.display = "block";
                activePanel.classList.add("active");
            }

            buttons.forEach(btn => btn.classList.remove("active"));

            this.classList.add("active");
        });
    });
});
