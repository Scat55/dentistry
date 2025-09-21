// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
    {
      files: ['**/*.{js,ts,vue,scss}'],
      languageOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        // табы с шириной 4
        indent: ['error', 'tab', { SwitchCase: 1 }],
        // ; обязательны
        semi: ['error', 'always'],
        // одинарные кавычки
        quotes: ['error', 'single', { avoidEscape: true }],
        // запрет на пробелы в конце строк
        'no-trailing-spaces': 'error',
        // пустая строка в конце файла
        'eol-last': ['error', 'always'],
        // отключаем требование названия у Vue-компонентов
        'vue/multi-word-component-names': 'off',
        // длина строки (eslint считает таб = 4 пробела)
        'max-len': ['error', { code: 100, ignoreComments: true, ignoreStrings: true, ignoreTemplateLiterals: true }],        'vue/no-multiple-template-root': 'off',
        // пробелы внутри {}
        'object-curly-spacing': ['error', 'always'],
      },
    }
)
