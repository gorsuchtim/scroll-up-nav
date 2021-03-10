const NavStickyScrollUp = () => {
  let initialScrollTopPosition = 0;

  //   Nav
  const nav = document.querySelector("nav");
  const navComputedStyle = window.getComputedStyle(nav);
  const navHeight = parseInt(navComputedStyle.height);

  //   Hero
  const heroComputedStyle = window.getComputedStyle(
    document.querySelector(".hero")
  );
  const heroHeight = parseInt(heroComputedStyle.height);

  const handleScrollDirection = () => {
    let direction = "";
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollTop > initialScrollTopPosition) {
      direction = "down";
    } else {
      direction = "up";
    }

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

  window.addEventListener("scroll", handleScroll);
};

export default NavStickyScrollUp;
