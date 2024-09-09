import globals from "globals";
import pluginJs from "@eslint/js";
import pluginJest from "eslint-plugin-jest"; // Убедитесь, что этот пакет установлен
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        it: "readonly",
        describe: "readonly",
        expect: "readonly",
        module: "writable",
        global: "readonly", // Убедитесь, что это определено
        jest: "readonly", // Убедитесь, что это определено
      },
    },
    plugins: {
      jest: pluginJest, // Подключаем плагин Jest
    },
    rules: {
      "prefer-const": "warn", // Предпочитаем const
      "no-irregular-whitespace": "error", // Запрещаем нерегулярные пробелы
    },
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
];
