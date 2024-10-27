export default function MainTab() {
    document.addEventListener("DOMContentLoaded", function () {
        const leftTab = document.getElementById("leftTab");
        const rightTab = document.getElementById("rightTab");
        const leftSide = document.getElementById("leftSide");
        const rightSide = document.getElementById("rightSide");

        leftTab.addEventListener("click", () => {
            leftSide.classList.remove("d-none");
            rightSide.classList.add("d-none");
        });

        rightTab.addEventListener("click", () => {
            rightSide.classList.remove("d-none");
            leftSide.classList.add("d-none");
        });
    });
}