var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/zl90/personal-portfolio.git", // Update to point to your repository
    user: {
      name: "zl90", // update to use your name
      email: "101400977+zl90@users.noreply.github.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
