<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import { format, parseJSON } from "date-fns";

  export let id = "";
  let post = {};

  fetch(
    `https://www.googleapis.com/blogger/v3/blogs/5806378615545131214/posts/${id}?key=AIzaSyCqvyetoYKF2BgdW3WmPzpGStM79SKEYQA`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      post = { ...post, data };
      console.log(post);
    });
</script>

<div class="container">
  <Header />
  <main>
    <h1 class="blog-title">{post.data?.title || ""}</h1>
    <p class="blog-date">
      {post.data
        ? `[ posted ${format(
            parseJSON(post.data?.published || ""),
            "yyyy-MM-dd"
          )} ]`
        : ``}
    </p>
    <div class="blog-content-container">{@html post.data?.content || ""}</div>
  </main>
  <Footer />
</div>
