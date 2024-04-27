<script>
  import { format, parseJSON } from "date-fns";
  import LoadingAnimation from "./LoadingAnimation.svelte";

  let posts = [];
  let isLoading = true;

  void (async () => {
    let response = await (
      await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA`,
        { mode: "cors" },
      )
    ).json();
    posts = [...posts, response.items];

    while (response.nextPageToken) {
      response = await (
        await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA&pageToken=${response.nextPageToken}`,
          { mode: "cors" },
        )
      ).json();
      posts = [...posts, response.items];
    }

    isLoading = false;
    posts = posts.sort((a, b) => a.published - b.published);
  })();
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
