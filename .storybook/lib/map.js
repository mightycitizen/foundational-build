
function twigMap(twigInstance) {
  // JS ksort via https://stackoverflow.com/a/31102605
  twigInstance.extendFilter('map', (array, callback) => {
    return array.map(callback);
  });
};

export default twigMap;