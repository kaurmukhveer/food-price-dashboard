function Footer({ translations }) {
  return (
    <footer className="dashboard-footer">
      <div className="footer-section">
        <p className="footer-label">
          {translations.footer.dataSourceLabel}
        </p>

        <p>{translations.footer.dataSourceText}</p>
      </div>

      <div className="footer-section">
        <p className="footer-label">
          {translations.footer.builtWithLabel}
        </p>

        <p>{translations.footer.builtWithText}</p>
      </div>

      <p className="footer-copyright">
        {translations.footer.copyright}
      </p>
    </footer>
  );
}

export default Footer;