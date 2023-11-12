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
      Throughout my career I've developed projects on my own for small
      businesses, and collaborated with talented people to create digital
      products for large corporations. I'm naturally curious, quietly hard
      working, and perpetually working on improving my skills one coding problem
      at a time.
    </p>
    <ul>
      <li>
        [ <a
          target="_blank"
          rel="noreferrer"
          href="https://www.zrecruitment.com.au/app/">z-recruitment</a
        > ] Australia's premier childcare staffing app, boasting 5000 daily active
        users, nationwide operations, and a (rapidly growing) 20% market share. Z-Recruitment
        stands out as the most exciting project I've engaged with to date. Over the
        past year, I've immersed myself in the intricacies of its codebase, contributing
        significantly to the enhanced performance of the mobile app, website, and
        API. This experience has not only been technically enriching but has also
        given me a heightened sense of professionalism and a commitment to maintaining
        exceptional code quality standards in my work.
      </li>
      <li>
        [ <a
          target="_blank"
          rel="noreferrer"
          href="https://store.steampowered.com/app/342480/Gunscape/">gunscape</a
        > ] Build your own high-octane, fast-paced shooter maps and share them with
        your friends
      </li>
      <li>
        [ <a
          target="_blank"
          rel="noreferrer"
          href="https://kids.scholastic.com/kid/homebase/">home base</a
        > ] Scholastic's virtual hub for their flagship gaming products
      </li>
    </ul>
  </main>
  <Footer />
</div>
