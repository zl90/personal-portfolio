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
      I'm Matt. I build stuff with React, Typescript and AWS. I also
      occasionally work on artistic endeavours. These are my thoughts, opinions
      and lessons learned. My goal is to help junior developers avoid the
      mistakes I've made in the past. Find me on LinkedIn if you are so
      inclined. Opinions are my own and do not represent those of my employer.
    </p>

    <BlogList />
  </main>
  <Footer />
</div>
