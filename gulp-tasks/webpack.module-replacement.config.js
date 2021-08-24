const webpack = require('webpack');

/**
 * @returns {Array}
 */
module.exports = settings => {
    const replacements = [];

    for (const moduleName in settings) {
        if (settings.hasOwnProperty(moduleName) && settings[moduleName] === true) {
            (function (name) {
                replacements.push(new webpack.NormalModuleReplacementPlugin(
                    new RegExp('plugins/(.*)' + name + '$'),
                    function (resource) {
                        resource.request = resource.request.replace(
                            new RegExp(name),
                            name
                        );
                    }
                ));
            }(moduleName));
        }
    }

    return replacements;
};
