/**
 *  loadModules() iterates through the key:value pairs in const asyncModules
 *  It defines the selector to look for on the page (const target) and
 *  Defines the path to the module to initialize when the page loads if that selector exists on the page
 *
 *  const asyncModules accepts the key:value pair as str.  Ex: ".myClassName": "myFileToRunIsMyClassNameIsOnThePage"
 *  The associated file must be in /src/js/Components
 *  the file must be nested within a folder with a matching name Ex: /Components/ComponentTemplate/ComponentTemplate.js
 *
 *  This can be changed in the const module = await import(`./${path}/${path}`); directive below
 *
 */
const ComponentIndex = () => {
  const asyncModules = {
    // ".test": "Test"
  };

  const loadModules = async () => {
    const imports = Object.entries(asyncModules);

    await Promise.all(
      imports.map(async ([selector, path]) => {
        const target = document.querySelector(selector);
        if (!target) return;

        /** Load & initialize the module */
        const module = await import(`./${path}/${path}`);
        if (module.default) module.default.initialize();
      })
    );
  };

  (() => {
    // Auto run all functions here when ComponentIndex loads
    loadModules();
  })();
};

export default ComponentIndex;
