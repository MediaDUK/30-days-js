module.exports = {
    'extends': 'airbnb',
    'parser': 'babel-eslint',
    'env': {
        "browser": true,
        "node": true,
        "es6": true,
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    }
};