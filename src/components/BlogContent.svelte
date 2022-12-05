<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { format, parseJSON } from "date-fns";
  import LoadingAnimation from "./LoadingAnimation.svelte";

  export let id = "";
  let post = {};
  let isLoading = true;

  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts/${id}?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      post = { ...post, data };
      isLoading = false;
    });
</script>

<div class="container">
  <Header />
  <main>
    {#if isLoading}
      <LoadingAnimation style="loadingBar" />
      <p class="blog-filler" />
    {:else}
      <h1 class="blog-title">{post.data?.title || ""}</h1>
      <p class="blog-date">
        {post.data
          ? `[ posted ${format(
              parseJSON(post.data?.published || ""),
              "yyyy-MM-dd @ p"
            )} ]`
          : ``}
      </p>
      <div class="blog-content-container">{@html post.data?.content || ""}</div>
    {/if}
  </main>
  <Footer />
</div>
