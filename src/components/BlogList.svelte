<script>
  import { format, parseJSON } from "date-fns";

  let posts = [];
  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.items.forEach((item) => (posts = [...posts, item]));
    });
</script>

<ul>
  {#each posts as post}
    <li>
      [ {format(parseJSON(post.published), "yyyy-MM-dd")} ]
      <a href={`blog/${post.id}`}>{post.title}</a>
    </li>
  {/each}
</ul>
