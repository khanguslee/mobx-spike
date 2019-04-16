module.exports = api => {
    api.env(['development', 'test']);

    const presets = ['module:metro-react-native-babel-preset'];
    const plugins = [
        ['@babel/plugin-transform-flow-strip-types'],
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }],
    ];
    return { presets, plugins };
};