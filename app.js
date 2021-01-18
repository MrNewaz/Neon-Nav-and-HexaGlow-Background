gsap.from(".pg2 h1", {
  opacity: 0,
  color: "red",
  scale: 5,
  duration: 1,
  scrollTrigger: {
    trigger: ".pg2",
    start: "top 20%",
    toggleActions: "restart reverse restart reverse",
  },
});
