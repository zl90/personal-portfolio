<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Avatar from "../components/Avatar.svelte";
  import BlogList from "../components/BlogList.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <Avatar />

    <p>
      I'm Matt. I build stuff with Typescript and C++.</p>
      <p>I have an
      insatiable appetite for learning and in my spare time I'm always improving
      my skills (I'm currently taking a <a href="https://github.com/zl90/Cornell-CS4120" target="_blank"
        >course on Compiler design</a
      > from Cornell
      University and a <a href="https://github.com/zl90/CMU-Databases-Course" target="_blank"
        >database engineering course</a
      > from Carnegie Mellon University. I've made <a href="https://www.youtube.com/@zmweb4828" target="_blank">Youtube videos</a> highlighting the triumphs/challenges I've experienced while doing these courses).</p>
      <p>These are my thoughts, opinions and lessons learned. My goal is to
      inspire people to improve their tech skills. Lately I've discovered the
      power of working towards your goal with 1-2 hours per day of deliberate
      practice. With that time investment, you'd be shocked at how much you can
      learn in only 1 year.</p>
      <p>Find me on
      <a href="https://www.linkedin.com/in/matthew-robert-111182248" target="_blank">LinkedIn</a
      > if you want.
    </p>

    <BlogList />
  </main>
  <Footer />
</div>
