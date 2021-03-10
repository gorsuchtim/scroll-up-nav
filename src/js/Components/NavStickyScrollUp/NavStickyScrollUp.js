import throttle from "../../Utilities/Throttle/throttle";

const NavStickyScrollUp = () => {
  const THROTTLE_TIMING = 0;

  let initialScrollTopPosition = 0;
  // get rid of this height baloney
  // Define nav
  const nav = document.querySelector("nav");
  const navHeight = nav.scrollHeight;

  // Define hero
  const hero = document.querySelector(".hero");
  const heroHeight = hero.scrollHeight;

  //   THIS IS BROKEN BUT THE RIGHT IDEA
  const handleIsScrollingUp = () => {
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > initialScrollTopPosition) {
      initialScrollTopPosition = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling
    } else {
      return true;
    }
  };

  const handleScroll = () => {
    const isScrollingUp = handleIsScrollingUp();
    if (isScrollingUp) {
      nav.classList.remove("scroll--down");
    } else {
      nav.classList.add("scroll--down");
    }
  };

  window.addEventListener("scroll", throttle(handleScroll, THROTTLE_TIMING));
};

export default NavStickyScrollUp;

// const handleScrollDirection = () => {
//   let direction = "";
//   // Why have this fallback "||" ??
//   const currentScrollTop =
//     window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScrollTop > initialScrollTopPosition) {
//     direction = "down";
//   } else {
//     direction = "up";
//   }

//   // what is this actually doing?
//   initialScrollTopPosition = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

//   return direction;
// };
