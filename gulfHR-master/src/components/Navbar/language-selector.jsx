import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", name: "English" },
    { code: "ar", name: "Arabic" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const setLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    // Handle page direction (LTR/RTL) based on language
    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n.language]);

    return (
        <select
            value={i18n.language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-selector-dropdown"
        >
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelector;
