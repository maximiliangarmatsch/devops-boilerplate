require("dotenv").config()

const PORT = process.env.PORT | 3000

module.exports = {
  ci: {
    collect: {
      url: `localhost:${PORT}` ,
      assert: {
        assertions: {
          "categories:performance": ["warn", { minScore: 0.1 }],
          "categories:accessibility": ["warn", { minScore: 0.1 }],
          "categories:seo": ["warn", { minScore: 0.1 }],
          "categories:best-practices": ["warn", { minScore: 0.1 }],
        },
      },
    },
  },
};
