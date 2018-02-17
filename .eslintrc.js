module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		jest: true
	},
	extends: ["eslint:recommended", "plugin:jest/recommended"],
	parser: "babel-eslint",
	parserOptions: {
		ecmaVersion: 8,
		ecmaFeatures: {
			impliedStrict: true,
			jsx: true,
			experimentalObjectRestSpread: true
		},
		sourceType: "module"
	},
	plugins: ["react", "jest"],
	rules: {
		"react/jsx-uses-react": "warn",
		"react/jsx-uses-vars": ["error"],
		"no-const-assign": "warn",
		"no-this-before-super": "warn",
		"no-undef": "warn",
		"no-unreachable": "warn",
		"no-unused-vars": "warn",
		"constructor-super": "warn",
		"valid-typeof": "warn",
		strict: 0,
		experimentalDecorators: 0,
		"no-console": 0,
		"no-undefine": 0,
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error"
	},
	globals: {
		shallow: true,
		render: true,
		mount: true,
		toJson: true,
		React: true,
		ReactDOM: true
	},
	settings: {
		react: {
			pragma: "React",
			version: "^16.2.0"
		}
	}
};
