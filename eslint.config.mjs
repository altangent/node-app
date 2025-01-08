// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";


export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierConfig,
    {
        ignores: [
            "client/dist/**",
            "client/webpack.config.js"
        ],
    },
    {
        rules: {
            "no-console": "warn",
            "quotes": ["error", "double", { "avoidEscape": true, "allowTemplateLiterals": true }],
            "semi": ["error", "always"],

        //     //
        //     // @typescript-eslint Settings below
        //     //
        //     // Refer to mapping from TSLint to ESLint via
        //     // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md
        //     //
        //     // Default TSLint can be found here:
        //     // https://github.com/palantir/tslint/blob/master/src/configs/all.ts


        //     "@typescript-eslint/no-inferrable-types": "off",
        //     "@typescript-eslint/restrict-template-expressions": "off",
        //     "@typescript-eslint/no-unnecessary-type-assertion": "off",
        //     "@typescript-eslint/no-explicit-any": "off",
        //     "@typescript-eslint/explicit-module-boundary-types": "off", // eventually enable this

        //     // adapted from TSLint `member-access`
        //     // https://palantir.github.io/tslint/rules/member-access/
        //     "@typescript-eslint/explicit-member-accessibility": [
        //         "error",
        //         {
        //             "overrides": {
        //                 "constructors": "off",
        //                 "parameterProperties": "off"
        //             }
        //         }
        //     ],

        //     // adapted from TSLint `member-ordering` using `statics-first` option
        //     // https://palantir.github.io/tslint/rules/member-ordering/
        //     "@typescript-eslint/member-ordering": [
        //         "error",
        //         {
        //             "default": [
        //                 "static-field",
        //                 "static-method",
        //                 "instance-field",
        //                 "constructor",
        //                 "instance-method"
        //             ]
        //         }
        //     ]
        }
    }
);
