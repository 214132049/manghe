module.exports = {
  "extends": ["taro"],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "react/jsx-indent-props": 0,
  },
  "parser": "babel-eslint"
}
