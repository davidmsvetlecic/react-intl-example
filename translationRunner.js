const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: path.join(__dirname, "src/i18n/messages"),
  translationsDirectory: path.join(__dirname, "src/i18n/locales/"),
  languages: ["en-US", "es-ES", "fr-FR"] // any language you need
});
