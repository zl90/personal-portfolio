function Companies() {
  return (
    <section className="companies-section-container">
      <h2>I'm proud to have collaborated with some awesome companies:</h2>
      <div className="companies-logo-array-container">
        <div className="company-logo-container">
          <a href="https://www.scholastic.com.au/" target="blank">
            <img
              alt="Scholastic Publishing Logo"
              src={require("../../../images/scholastic-logo.png")}
            />
          </a>
        </div>
        <div className="company-logo-container">
          <a href="https://www.blowfishstudios.com/" target="blank">
            <img
              alt="Blowfish Studios Logo"
              src={require("../../../images/blowfish-logo.png")}
            />
          </a>
        </div>
        <div className="company-logo-container">
          <a href="https://www.hiveiq.com/" target="blank">
            <img
              alt="HiveIQ Logo"
              src={require("../../../images/hiveiq-logo.png")}
            />{" "}
          </a>
        </div>
        <div className="company-logo-container">
          <a href="https://www.primetuning.com.au/" target="blank">
            <img
              alt="Primetuning Logo"
              src={require("../../../images/primetuning-logo.png")}
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Companies;
