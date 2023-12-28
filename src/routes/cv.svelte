<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="container">
    <Header />
    <main class="cv-main">
        <h2 class="cv-heading">>> Education</h2>
        <h3 class="cv-sub-heading">
            [ <a target="_blank" rel="noreferrer" href="https://www.uow.edu.au/">UNIVERSITY OF WOLLONGONG</a> ]
        </h3>
        <p class="cv-position">
            <strong>Bachelor of Computer Science</strong>, Mar 2015 - Dec 2017
        </p>
        <br />

        <h2 class="cv-heading">>> Experience</h2>
        <h3 class="cv-sub-heading">
            [ <a target="_blank" rel="noreferrer" href="https://devika.com/">DEVIKA</a> ]
        </h3>
        <p class="cv-position">
            <strong>Software Developer</strong>, Oct 2022 - present
        </p>
        <ul class="cv-ul">
            <li>
                Executed a comprehensive performance overhaul of Z-Recruitment's API,
                resulting in substantial enhancements across multiple endpoints,
                frequently achieving response time reductions exceeding 50%
            </li>
            <li>
                Automated the entire onboarding process for the Z-Recruitment mobile
                app, reducing the client's workload by over 90%
            </li>
            <li>
                Revamped the API's dependency structure in Z-Recruitment, leading to a
                50% reduction in production lambda size
            </li>
            <li>
                Orchestrated a timezone compatibility overhaul for the Z-Recruitment
                mobile app, facilitating seamless scalability to cater to a global
                userbase
            </li>
        </ul>
        <br />
        <h3 class="cv-sub-heading">
            [ <a target="_blank" rel="noreferrer" href="https://www.blowfishstudios.com/">BLOWFISH STUDIOS</a> ]
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
            <li>C++</li>
        </ul>

        <h3 class="cv-sub-heading">Databases:</h3>
        <ul class="cv-ul">
            <li>DynamoDB</li>
        </ul>

        <h3 class="cv-sub-heading">Frameworks:</h3>
        <ul class="cv-ul">
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
        </ul>

        <h3 class="cv-sub-heading">Cloud:</h3>
        <ul class="cv-ul">
            <li>AWS Certified Solutions Architect (Associate)</li>
        </ul>
        <br />

        <h2 class="cv-heading">>> Interests</h2>
        <ul class="cv-ul-nh">
            <li>Compilers (I'm currently taking a course from Cornell University: <a target="_blank" rel="noreferrer"
                    href="https://github.com/zl90/Cornell-CS4120">https://github.com/zl90/Cornell-CS4120</a>)</li>
            <li>C++ (I'm working through Bjarne Stroustrup's "A Tour of C++" book: <a target="_blank" rel="noreferrer"
                    href="https://github.com/zl90/cpp-education">https://github.com/zl90/cpp-education</a>)</li>
        </ul>

    </main>
    <Footer />
</div>
