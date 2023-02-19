function BlureHeroImage() {
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        let viewportHeight = document.body.clientHeight - window.innerHeight;
        let scrollPercent = (scrollTop / viewportHeight) * 200;
        let hero = document.getElementById("blure-bg");

        hero.style.filter = `blur(${scrollPercent}px)`;
    });
}

export default BlureHeroImage;