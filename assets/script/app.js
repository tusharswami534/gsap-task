document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  let mm = gsap.matchMedia();
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#tablet",
      start: "top top",
      end: "400%",
      scrub: 2,
      pin: true,
    },
  });

  // First Button rotate
  // First Icon
  tl.to(
    ".bottom-arrow",
    {
      bottom: "250px",
    },
    0
  );

  tl.to(
    ".icon-image",
    {
      scale: 1,
    },
    0.2
  );
  // First ICon Hide
  tl.to(
    ".icon-image",
    {
      scale: 0,
    },
    0.9
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "330px",
    },
    0.9
  );
  // First button
  // Button 2
  tl.to(
    ".post-button",
    {
      rotate: -3,
      backgroundColor: "#A0BFCA",
    },
    1.1
  );

  // Post Image
  tl.to(
    ".post-image",
    {
      scale: 1,
    },
    1.2
  );

  // Post Image Hide
  tl.to(
    ".post-image",
    {
      scale: 0,
    },
    1.9
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "400px",
    },
    1.9
  );
  // Button 2
  tl.to(
    ".post-button",
    {
      rotate: 0,
      backgroundColor: "#7EE49C80",
      backgroundOpacity: 0.5,
    },
    1.9
  );

  // Chat Button
  tl.to(
    ".chat-button",
    {
      rotate: -3,
      backgroundColor: "#A0BFCA",
    },
    2.1
  );
  // Chat Image
  tl.to(
    ".chat",
    {
      scale: 1,
    },
    2.2
  );
  // Chat Image Hide
  tl.to(
    ".chat",
    {
      scale: 0,
    },
    2.9
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "450px",
    },
    2.9
  );
  // Chat Button
  tl.to(
    ".chat-button",
    {
      rotate: 0,
      backgroundColor: "#7EE49C80",
      backgroundOpacity: 0.5,
    },
    2.9
  );

  // chat button 2
  tl.to(
    ".chat-two-button",
    {
      rotate: -3,
      backgroundColor: "#A0BFCA",
    },
    3.1
  );
  // Chat Image 2
  tl.to(
    ".chat-2",
    {
      scale: 1,
    },
    3.5
  );
  // Chat Image 2 Hide
  tl.to(
    ".chat-2",
    {
      scale: 0,
    },
    4.3
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "500px",
    },
    4.3
  );
  // Chat Button 2
  tl.to(
    ".chat-two-button",
    {
      rotate: 0,
      backgroundColor: "#7EE49C80",
      backgroundOpacity: 0.5,
    },
    4.3
  );

  // unlock mail button
  tl.to(
    ".unlock-mail-button",
    {
      rotate: -3,
      backgroundColor: "#A0BFCA",
    },
    4.6
  );

  // unlock mail
  tl.to(
    ".unlock-mail",
    {
      scale: 1,
    },
    4.9
  );
  // unlock mail Hide
  tl.to(
    ".unlock-mail",
    {
      scale: 0,
    },
    5.7
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "550px",
    },
    5.7
  );
  // unlock mail button

  tl.to(
    ".lock-mail",
    {
      scale: 1,
    },
    6.2
  );
  tl.to(
    ".lock-mail",
    {
      scale: 0,
    },
    7
  );
  tl.to(
    ".bottom-arrow",
    {
      bottom: "600px",
    },
    7
  );
  tl.to(
    ".unlock-mail-button",
    {
      rotate: 0,
      backgroundColor: "#7EE49C80",
      backgroundOpacity: 0.5,
    },
    7
  );
  tl.to(
    ".lock-with-data",
    {
      rotate: -3,
      backgroundColor: "#A0BFCA",
    },
    7.3
  );
  // Chat Image 2
  tl.to(
    ".lock-with-data-image",
    {
      scale: 1,
    },
    7.5
  );
});
