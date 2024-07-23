function scrollToSection(id) {
    const element = document.getElementById(id);
    const headerOffset = 60; // Ajuste para a altura do cabeçalho fixo
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}
