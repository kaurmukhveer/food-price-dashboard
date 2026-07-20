function Insights({ translations }) {
  return (
    <section className="insights-card">
      <div>
        <p className="card-label">
          {translations.insights.label}
        </p>

        <h2>{translations.insights.title}</h2>
      </div>

      <p>{translations.insights.description}</p>
    </section>
  );
}

export default Insights;