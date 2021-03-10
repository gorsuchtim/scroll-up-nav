import throttle from "../../Utilities/Throttle/throttle";

const NavStickyScrollUp = () => {
  const scrollTop = document.documentElement.scrollTop;
  const nav = document.querySelector("nav");
  const THROTTLE_TIMING = 50;

  // let initialScrollTopPosition = 0;
  let initialScrollTopPosition = window.pageYOffset || scrollTop;

  const handleIsScrollingUp = currentScrollPosition =>
    currentScrollPosition < initialScrollTopPosition ? true : false;

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // Define current position on scroll
      const currentScrollTop = window.pageYOffset || scrollTop;

      // Define if user is scrolling up
      const isScrollingUp = handleIsScrollingUp(currentScrollTop);

      // Update initial scroll position to equal new/current scrolltop position
      initialScrollTopPosition = currentScrollTop <= 0 ? 0 : currentScrollTop; // For Mobile or negative scrolling

      // Show/hide nav menu
      if (isScrollingUp) {
        nav.classList.remove("nav__scroll--hide");
      } else {
        nav.classList.add("nav__scroll--hide");
      }
    }
  };

  window.addEventListener("scroll", throttle(handleScroll, THROTTLE_TIMING));
};

export default NavStickyScrollUp;
