let scrollPosition = 0;

document.addEventListener("astro:before-swap", (ev) => {
  const exceptions = [
    "/productos/pisos-lvt",
    "/productos/pisos-spc",
    "/productos/perdura-stone",
    "/productos/imperial-stone",
    "/productos/stona",
  ];

  exceptions.includes(ev.to.pathname)
    ? (scrollPosition = window.scrollY)
    : (scrollPosition = 0);
});

document.addEventListener("astro:after-swap", () => {
  window.scrollTo(0, scrollPosition);
});