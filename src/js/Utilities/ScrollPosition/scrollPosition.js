/**
 * On scroll event it defines document & viewport heights and
 * compares those values against current pageYoffset on scroll to
 * return a decimal value that can be converted into a % (ex 0.35 -> )
 *
 * Reference: https://codepen.io/Godje/pen/YqQGmq
 */

const scrollPosition = () => {
  const { body } = document;
  const html = document.documentElement;
  const viewportHeight = window.innerHeight;
  // Define document height
  const documentHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  const verticalDistance =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (html || body.parentNode || body).scrollTop;

  const scrollDecimalValue =
    verticalDistance / (documentHeight - viewportHeight);
  return scrollDecimalValue;
};

export default scrollPosition;
