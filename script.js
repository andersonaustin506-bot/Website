// Make accessibility tab keyboard useable, I dont know how I forgot to make the accessibility toggle that isnt even needed for this class useable by people who would need it
document.querySelectorAll(".access-tab").forEach(function(tab) {
    tab.setAttribute("tabindex", "0");
    tab.setAttribute("role", "button");
    tab.addEventListener("keydown", function(e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            togglePanel();
        }
    });
});
