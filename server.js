const express = require("express")
const next = require("next")
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

app
  .prepare()
  .then(() => {
      const server = express();

      server.use(bodyParser.json())
      server.use(bodyParser.urlencoded({ extended: false }))

      // When clicking the "preview" button in the cms, it will take you to this route
      server.get("/_preview/:id/:wpnonce", (req, res) => {
        const actualPage = "/preview";
        const queryParams = { id: req.params.id, wpnonce: req.params.wpnonce };
        app.render(req, res, actualPage, queryParams);
      });

      // This will get triggered for any main level pages like / or /contact
      server.get("/blog/:article", (req, res) => {
        const actualPage = "/blog/article"
        const queryParams = { queryParams: req.query }
        app.render(req, res, actualPage, queryParams)
      })

      // This will get triggered for any main level pages like / or /contact
      server.get("/", (req, res) => {
        const actualPage = "/"
        const queryParams = { queryParams: req.query }
        app.render(req, res, actualPage, queryParams)
      })

      // This will get triggered for any main level pages like / or /contact
      server.get("/:page", (req, res) => {
        const actualPage = "/default"
        const queryParams = { queryParams: req.query }
        app.render(req, res, actualPage, queryParams)
      })

      // Handle all other request
      server.get("*", (req, res) => {
          return handle(req, res);
      });

      server.listen(port, err => {
          if (err) throw err;
          console.log("> Ready on http://localhost:" + port);
      });
  })
  .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
  });
