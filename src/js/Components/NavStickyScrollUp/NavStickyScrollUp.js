import throttle from "../../Utilities/Throttle/throttle";

const NavStickyScrollUp = () => {
  const nav = document.querySelector("nav");
  const THROTTLE_TIMING = 50;

  let initialScrollTopPosition = 0;

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
      nav.classList.add("scroll--down");
    }
  };

  window.addEventListener("scroll", throttle(handleScroll, THROTTLE_TIMING));
};

export default NavStickyScrollUp;
