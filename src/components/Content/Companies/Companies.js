function Companies() {
  return (
    <section className="companies-section-container">
      <h2>I'm proud to have collaborated with some awesome companies:</h2>
      <div className="companies-logo-array-container">
        <div className="company-logo-container">
          <img
            alt="Scholastic Publishing Logo"
            src={require("../../../images/scholastic-logo.png")}
          />
        </div>
        <div className="company-logo-container">
          <img
            alt="Blowfish Studios Logo"
            src={require("../../../images/blowfish-logo.png")}
          />
        </div>
        <div className="company-logo-container">
          <img
            alt="HiveIQ Logo"
            src={require("../../../images/hiveiq-logo.png")}
          />
        </div>
        <div className="company-logo-container">
          <img
            alt="Primetuning Logo"
            src={require("../../../images/primetuning-logo.png")}
          />
        </div>
      </div>
    </section>
  );
}

export default Companies;
