module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended'
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
    },
}
