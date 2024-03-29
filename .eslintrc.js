module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [ "eslint:recommended", "plugin:react/recommended" ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "react-native"
  ],
  "rules": {
    "array-bracket-spacing": [ "error", "always" ],
    "arrow-spacing": [ "error" ],
    "block-spacing": [ "error" ],
    "camelcase": [ "error" ],
    "computed-property-spacing": [ "error", "never" ],
    "curly": [ "error", "all" ],
    "eqeqeq": [ "error", "always" ],
    "func-call-spacing": [ "error", "never" ],
    "indent": [ "error", 2 ],
    "keyword-spacing": [ "error" ],
    "linebreak-style": [ "error", "unix" ],
    "no-else-return": [ "error" ],
    "no-empty-function": [ "error" ],
    "no-lone-blocks": [ "error" ],
    "no-multi-assign": [ "error" ],
    "no-new": [ "error" ],
    "no-new-func": [ "error" ],
    "no-param-reassign": [ "error" ],
    "no-return-assign": [ "error" ],
    "no-self-compare": [ "error" ],
    "no-sequences": [ "error" ],
    "no-trailing-spaces": [ "error" ],
    "no-void": [ "error" ],
    "no-with": [ "error" ],
    "no-useless-return": [ "error" ],
    "object-curly-spacing": [ "error", "always" ],
    "quotes": [ "error", "single" ],
    "semi": [ "error", "never" ],
    "yoda": [ "error" ],
    "react/prop-types": 0,
  }
};
