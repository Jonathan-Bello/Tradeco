let scrollPosition = null;

document.addEventListener("astro:before-swap", (ev) => {
  const exceptions = [
    "/productos/pisos-lvt",
    "/productos/pisos-spc",
    "/productos/pisos-lvt#lvt-info",
    "/productos/pisos-spc#spc-info",
  ];

  exceptions.includes(ev.to.pathname) && (scrollPosition = window.scrollY);
});

document.addEventListener("astro:after-swap", () => {
  scrollPosition && window.scrollTo(0, scrollPosition);
  scrollPosition = null;
});
