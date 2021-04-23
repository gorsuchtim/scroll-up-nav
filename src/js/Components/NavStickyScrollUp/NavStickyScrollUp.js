import throttle from "../../Utilities/Throttle/throttle";

const NavStickyScrollUp = () => {
  const { scrollTop } = document.documentElement;
  const { body } = document;
  const THROTTLE_TIMING = 50;

  let initialScrollTopPosition = window.pageYOffset || scrollTop;

  const handleIsScrollingUp = currentScrollPosition =>
    currentScrollPosition < initialScrollTopPosition;

  const handleStickyState = stickyState => {
    body.classList[stickyState ? "add" : "remove"]("is-scrolling-up");
    body.classList[stickyState ? "remove" : "add"]("is-scrolling-down");
  };

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      // Define current position on scroll
      const currentScrollTop = window.pageYOffset || scrollTop;

      // Return true if user is scrolling up/ false if scrolling down
      const isScrollingUp = handleIsScrollingUp(currentScrollTop);

      // Update initial scroll position to equal new/current scrolltop position
      initialScrollTopPosition = currentScrollTop <= 0 ? 0 : currentScrollTop;

      // Add/remove is-scrolling-up/is-scrolling-down
      handleStickyState(isScrollingUp);
    }
  };

  window.addEventListener("scroll", throttle(handleScroll, THROTTLE_TIMING));
};

export default NavStickyScrollUp;
