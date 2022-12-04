<script>
  import { Router, Route, Link } from "svelte-routing";
  import Home from "./routes/home.svelte";
  import Portfolio from "./routes/portfolio.svelte";
  import Cv from "./routes/cv.svelte";
  import BlogContent from "./components/BlogContent.svelte";
  export let url = "";
</script>

<Router {url}>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="portfolio" component={Portfolio} />
    <Route path="cv" component={Cv} />
    <Route path="blog/:id" let:params>
      <BlogContent id={params.id} />
    </Route>
  </div>
</Router>
