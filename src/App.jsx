import { useEffect, useState } from "react";

import Header from "./components/Header";
import Controls from "./components/Controls";
import PriceTrendChart from "./components/PriceTrendChart";
import PriceComparisonChart from "./components/PriceComparisonChart";
import Insights from "./components/Insights";
import DataNotice from "./components/DataNotice";
import Footer from "./components/Footer";

import en from "./locales/en";
import fr from "./locales/fr";

import "./styles/dashboard.css";

function App() {
  const [selectedFood, setSelectedFood] = useState("tomatoes");
  const [selectedMonth, setSelectedMonth] = useState("2026-01");
  const [language, setLanguage] = useState("en");

  const translations = language === "en" ? en : fr;

  useEffect(() => {
  document.documentElement.lang = language;
  document.title =
    language === "en"
      ? "Canadian Food Price Explorer"
      : "Explorateur des prix alimentaires au Canada";
}, [language]);

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === "en" ? "fr" : "en"
    );
  }

  return (
    <div className="app" lang={language}>
      <Header
        translations={translations}
        toggleLanguage={toggleLanguage}
      />

      <main className="dashboard">
        <Controls
          selectedFood={selectedFood}
          setSelectedFood={setSelectedFood}
          selectedMonth={selectedMonth}
          setSelectedMonth={setSelectedMonth}
          translations={translations}
        />

        <section className="chart-grid">
          <PriceTrendChart selectedFood={selectedFood} translations={translations} />

          <PriceComparisonChart selectedMonth={selectedMonth} translations={translations} />
        </section>

        <Insights translations={translations} />

        <DataNotice translations={translations} />

        <Footer translations={translations} />

      </main>
    </div>
  );
}

export default App;