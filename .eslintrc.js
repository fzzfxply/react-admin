module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "react-hooks",
        "simple-import-sort",
    ],
    settings: {
        react: {
            "version": "detect",
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    rules: {
        "indent":                       ["error", 4, { SwitchCase: 1 }],
        "linebreak-style":              ["error", "unix"],
        "no-alert":                     ["error"],
        "no-debugger":                  ["error"],
        "no-mixed-spaces-and-tabs":     ["error"],
        "no-multiple-empty-lines":      ["error", {"max": 1}],
        "no-trailing-spaces":           ["error"],
        "quotes":                       ["error"],
        "react-hooks/exhaustive-deps":  ["warn"],
        "react-hooks/rules-of-hooks":   ["error"],
        "semi":                         ["error", "never"],
        "simple-import-sort/exports":   ["error"],
        "simple-import-sort/imports":   ["error"],
        "spaced-comment":               ["error", "always"],
        'no-console': 'off',
        "no-restricted-syntax": [
            "error",
            {
                "selector": "CallExpression[callee.object.name='console'][callee.property.name!=/^(log|warn|error|info|trace)$/]",
                "message": "Unexpected property on console object was called"
            }
        ]

    }
}
