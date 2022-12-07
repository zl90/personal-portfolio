<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<div class="container">
  <Header />
  <main class="cv-main">
    <h2 class="cv-heading">>> Education</h2>
    <h3 class="cv-sub-heading">
      [ <a target="_blank" rel="noreferrer" href="https://www.uow.edu.au/"
        >UNIVERSITY OF WOLLONGONG</a
      > ]
    </h3>
    <p class="cv-position">
      <strong>Bachelor of Computer Science</strong>, Mar 2015 - Dec 2017
    </p>
    <br />

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
    <h3 class="cv-sub-heading">
      [ <a
        target="_blank"
        rel="noreferrer"
        href="https://www.blowfishstudios.com/">BLOWFISH STUDIOS</a
      > ]
    </h3>
    <p class="cv-position">
      <strong>Software Developer</strong>, Aug 2017 - Feb 2019
    </p>
    <ul class="cv-ul">
      <li>
        Spearheaded development of the Gunscape "Seismic" expansion pack,
        increasing 2017 unit sales by over 40%
      </li>
      <li>
        Designed and built internal tool for saving Unity IDE layout states,
        dramatically reducing developer setup time
      </li>
    </ul>
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
