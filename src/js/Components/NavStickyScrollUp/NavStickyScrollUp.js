import throttle from "../../Utilities/Throttle/throttle";

const NavStickyScrollUp = () => {
  const THROTTLE_TIMING = 100;

  let initialScrollTopPosition = 0;

  // Define nav
  const nav = document.querySelector("nav");
  const navHeight = nav.scrollHeight;

  // Define hero
  const hero = document.querySelector(".hero");
  const heroHeight = hero.scrollHeight;

  const handleScrollDirection = () => {
    let direction = "";
    // Why have this fallback "||" ??
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > initialScrollTopPosition) {
      direction = "down";
    } else {
      direction = "up";
    }

    // what is this actually doing?
    initialScrollTopPosition = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

    return direction;
  };

  const handleScroll = () => {
    const scrollDirection = handleScrollDirection();
    if (scrollDirection === "up") {
      nav.classList.remove("scroll--down");
    } else {
      if (window.pageYOffset > heroHeight - navHeight) {
        nav.classList.add("scroll--down");
      }
    }
  };

  window.addEventListener("scroll", throttle(handleScroll, THROTTLE_TIMING));
};

export default NavStickyScrollUp;
