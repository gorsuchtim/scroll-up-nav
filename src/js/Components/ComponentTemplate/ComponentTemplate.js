/**
 * ComponentTemplate
 * Copy and paste for each new component
 * Components require return { initialize } as this is what is ran from the ComponentIndex.js file
 */

export default (() => {
  const handleTemplate = () => {
    console.log("Itsa me the template element!"); // eslint-disable-line no-console
  };
  const initialize = () => {
    handleTemplate();
  };

  return {
    initialize
  };
})();
