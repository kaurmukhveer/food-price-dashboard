function DataNotice({ translations }) {
  return (
    <aside
      className="data-notice"
      aria-labelledby="data-notice-title"
    >
      <div className="data-notice-icon" aria-hidden="true">
        i
      </div>

      <div>
        <p className="data-notice-label">
          {translations.dataNotice.label}
        </p>

        <h2 id="data-notice-title">
          {translations.dataNotice.title}
        </h2>

        <p>{translations.dataNotice.description}</p>
      </div>
    </aside>
  );
}

export default DataNotice;