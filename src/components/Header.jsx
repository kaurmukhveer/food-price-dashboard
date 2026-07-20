function Header({ translations, toggleLanguage }) {
  const { header } = translations;

  return (
    <header className="dashboard-header">
      <div>
        <p className="eyebrow">{header.eyebrow}</p>

        <h1>{header.title}</h1>

        <p className="header-description">
          {header.description}
        </p>
      </div>

      <button
        className="language-button"
        type="button"
        onClick={toggleLanguage}
        aria-label={`Switch language to ${header.languageButton}`}
      >
        {header.languageButton}
      </button>
    </header>
  );
}

export default Header;