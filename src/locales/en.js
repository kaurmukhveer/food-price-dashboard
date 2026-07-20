const en = {
  locale: "en-CA",

  header: {
    eyebrow: "Canadian food data",
    title: "Canadian Food Price Explorer",
    description:
      "Explore monthly food price trends and compare common grocery items across Canada.",
    languageButton: "Français",
  },

  controls: {
    sectionLabel: "Dashboard controls",
    foodItem: "Food item",
    comparisonMonth: "Comparison month",
  },

  foods: {
    tomatoes: "Tomatoes",
    apples: "Apples",
    broccoli: "Broccoli",
    carrots: "Carrots",
  },

  trendChart: {
   label: "Monthly trend",
   titlePrefix: "Monthly price trend —",
   description: "Average monthly price from January to June 2026.",
   tooltipLabel: "Average price",
   tooltipMonth: "Month",
   unit: "CAD / kg",
  },

  comparisonChart: {
    label: "Food comparison",
    titlePrefix: "Average prices in",
    description:
      "Compare average prices for four common grocery items in the selected month.",
    tooltipLabel: "Average price",
    unit: "CAD / kg",
  },

  insights: {
    label: "Key insight",
    title: "Food prices vary by product and time of year",
    description:
      "Use the controls above to explore monthly price changes and compare products during a selected month.",
  },

    dataNotice: {
    label: "Data notice",
    title: "Synthetic demonstration data",
    description:
      "The prices shown in this dashboard are fictional values created for this SEG 3125 prototype. They do not represent official Statistics Canada data.",
  },

    footer: {
    dataSourceLabel: "Data source",
    dataSourceText:
      "Synthetic data created for the SEG 3125 bilingual dashboard prototype.",
    builtWithLabel: "Built with",
    builtWithText: "React • Recharts • CSS Grid • Intl API",
    copyright: "© 2026 Canadian Food Price Explorer",
  },
};

export default en;