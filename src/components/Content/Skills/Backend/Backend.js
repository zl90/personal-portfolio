import Icon from "./Icon/Icon";

function Backend() {
  return (
    <section className="skills-section-container">
      <Icon />
      <h2>Backend Developer</h2>
      <p>
        I love building functional APIs and middleware to enable powerful
        client-server interactions.
      </p>
      <h3>Frameworks I use:</h3>
      <p>Node.js, Express.js, Mongoose.js</p>
      <h3>Dev Tools:</h3>
      <ul>
        <li>Npm</li>
        <li>MongoDB</li>
      </ul>
    </section>
  );
}

export default Backend;
