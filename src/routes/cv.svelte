<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="container">
  <Header />
  <main class="cv-main">
    <h2 class="cv-heading">>> Experience</h2>
    <h3 class="cv-sub-heading">
      [ <a target="_blank" rel="noreferrer" href="https://devika.com/">DEVIKA</a
      > ]
    </h3>
    <p class="cv-position">
      <strong>Software Developer</strong>, Oct 2022 - present
    </p>
    <ul class="cv-ul">
      <li>
        Re-factored Z-Recruitment's dependency usage, reducing production lambda
        size by over 40%
      </li>
      <li>
        Implemented new onboarding feature for Z-Recruitment, automating the
        process, reducing client workload by over 90%
      </li>
    </ul>
    <br />
    <br />

    <h2 class="cv-heading">>> Technical Skills</h2>
    <h3 class="cv-sub-heading">Languages:</h3>
    <ul class="cv-ul">
      <li>Typescript</li>
      <li>CSS3</li>
      <li>HTML5</li>
    </ul>

    <h3 class="cv-sub-heading">Databases:</h3>
    <ul class="cv-ul">
      <li>MongoDB</li>
      <li>DynamoDB</li>
    </ul>

    <h3 class="cv-sub-heading">Frameworks:</h3>
    <ul class="cv-ul">
      <li>React</li>
      <li>Svelte</li>
      <li>Node</li>
      <li>Express</li>
    </ul>

    <h3 class="cv-sub-heading">Cloud:</h3>
    <ul class="cv-ul">
      <li>AWS</li>
    </ul>

    <h3 class="cv-sub-heading">Software:</h3>
    <ul class="cv-ul">
      <li>Git</li>
      <li>Sourcetree</li>
    </ul>
  </main>
  <Footer />
</div>
