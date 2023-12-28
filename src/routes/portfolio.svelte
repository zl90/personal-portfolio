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
                [ <a target="_blank" rel="noreferrer" href="https://www.zrecruitment.com.au/app/">z-recruitment</a> ]
                Australia's premier childcare staffing app, boasting 5000 daily active
                users, nationwide operations, and a (rapidly growing) 20% market share. Z-Recruitment
                stands out as the most exciting project I've engaged with to date.<br />Over the
                past year, I've immersed myself in the intricacies of its codebase, contributing
                significantly to the enhanced performance of the mobile app, website, and
                API. This experience has not only been technically enriching but has also
                given me a heightened sense of professionalism and a commitment to maintaining
                exceptional code quality standards in my work.
            </li>
            <li>
                [ <a target="_blank" rel="noreferrer" href="https://www.thegoto.app/">the goto app</a> ] GoTo is a
                groundbreaking platform designed to support international jobseekers in Australia by seamlessly
                integrating social, travel, and work-related services.<br />My involvement with the GoTo app has been an enriching experience. I have contributed significantly to its
                performance, user experience, and backend functionality. This experience has expanded my
                technical skills and given me a deeper understanding of the challenges faced by international
                jobseekers. I am proud to be a part of the GoTo team, where our work is making a real difference in the
                lives of jobseekers, paving the way for a more inclusive and accessible job market in Australia.
            </li>
            <li>
                [ <a target="_blank" rel="noreferrer"
                    href="https://store.steampowered.com/app/342480/Gunscape/">gunscape</a> ] Build your own
                high-octane, fast-paced shooter maps and share them with
                your friends
            </li>
            <li>
                [ <a target="_blank" rel="noreferrer" href="https://kids.scholastic.com/kid/homebase/">home base</a> ]
                Scholastic's virtual hub for their flagship gaming products
            </li>
        </ul>
    </main>
    <Footer />
</div>
