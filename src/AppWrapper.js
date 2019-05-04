import React, { Component } from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";
import translations from "./i18n/locales";
import App from "./App";

addLocaleData(es);
addLocaleData(fr);

class AppWrapper extends Component {
  render() {
    // get locale from url
    const locale = window.location.search.replace("?locale=","") || "en"
    const messages = translations[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

export default AppWrapper;
