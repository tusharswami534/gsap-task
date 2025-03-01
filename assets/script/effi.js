document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#effi",
      start: "top top",
      end: "400%",
      scrub: 3,
      pin: true,
      markers: true,
    },
  });

  tl.to(
    ".first-item-1",
    {
      opacity: 0,
    },
    0
  );
  tl.to(
    ".text-1",
    {
      opacity: 0,
    },
    0
  );
  //
  //
  tl.to(
    ".first-item-2",
    {
      opacity: 1,
    },
    0.5
  );
  tl.to(
    ".text-2",
    {
      opacity: 1,
    },
    0.5
  );
  tl.to(
    ".first-item-2",
    {
      opacity: 0,
    },
    0.7
  );
  tl.to(
    ".text-2",
    {
      opacity: 0,
    },
    0.7
  );
  //
  //
  tl.to(
    ".first-item-3",
    {
      opacity: 1,
    },
    1.2
  );
  tl.to(
    ".text-3",
    {
      opacity: 1,
    },
    1.2
  );
  tl.to(
    ".first-item-3",
    {
      opacity: 0,
    },
    1.5
  );
  tl.to(
    ".text-3",
    {
      opacity: 0,
    },
    1.5
  );
  //
  //
  tl.to(
    ".first-item-4",
    {
      opacity: 1,
    },
    2
  );
  tl.to(
    ".text-4",
    {
      opacity: 1,
    },
    2
  );
  //   first content
  tl.to(
    ".first-content",
    {
      opacity: 0,
    },
    2.5
  );
  tl.to(
    ".first-image",
    {
      opacity: 0,
    },
    2.5
  );

  tl.to(
    ".second-content",
    {
      opacity: 1,
    },
    3
  );
  tl.to(
    ".second-image",
    {
      opacity: 1,
    },
    3
  );

  tl.to(
    ".second-content",
    {
      opacity: 0,
    },
    3.5
  );
  tl.to(
    ".second-image",
    {
      opacity: 0,
    },
    3.5
  );

  tl.to(
    ".third-content",
    {
      opacity: 1,
    },
    4
  );
  tl.to(
    ".third-image",
    {
      opacity: 1,
    },
    4
  );
});
