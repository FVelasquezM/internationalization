import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import JobsList from "./components/jobsList";
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

addLocaleData(esLocaleData);

var userLang = navigator.language || navigator.userLanguage; 

var localeMessages = (userLang.includes("es"))? localeEsMessages : localeEnMessages;

ReactDOM.render(
	<IntlProvider locale={userLang} messages= {localeMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);
