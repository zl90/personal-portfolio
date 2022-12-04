<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import PortfolioImage from "../components/PortfolioImage.svelte";
</script>

<div class="container">
  <Header />
  <main>
    <PortfolioImage />

    <p>
      I've been building software and websites for the past 15 years, and I've
      loved every minute of it. Throughout my career I've developed projects on
      my own for small businesses, and collaborated with talented people to
      create digital products for large corporations. I'm naturally curious,
      quietly hard working, and perpetually working on improving my skills one
      coding problem at a time.
    </p>
    <ul>
      <li>
        [ <a
          target="_blank"
          rel="noreferrer"
          href="https://www.zrecruitment.com.au/app/">z-recruitment</a
        > ] Australia's best childcare staffing app
      </li>
    </ul>
  </main>
  <Footer />
</div>
