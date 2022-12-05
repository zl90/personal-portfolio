<script>
  import { format, parseJSON } from "date-fns";
  import LoadingAnimation from "./LoadingAnimation.svelte";

  let posts = [];
  let isLoading = true;
  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.items.forEach((item) => (posts = [...posts, item]));
      isLoading = false;
    });
</script>

<ul class="blog-list">
  {#if isLoading}
    <LoadingAnimation style="loadingBar" />
  {:else}
    {#each posts as post}
      <li>
        [ {format(parseJSON(post.published), "yyyy-MM-dd")} ]
        <a href={`blog/${post.id}`}>{post.title}</a>
      </li>
    {/each}
  {/if}
</ul>
