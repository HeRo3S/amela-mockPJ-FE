// src/server.js
import configs from "constants/config";
import { createServer, Model, Response } from "miragejs";
import { createMultipleEmployees } from "mocks/objects/employeesList";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
    },

    routes() {
      // this.namespace = configs.API_DOMAIN;
      this.namespace = "https://example.com/";

      this.get("/employeesList", () => {
        console.log(this.namespace);
        const result = createMultipleEmployees(35);
        return new Response(200, {}, { data: result });
      });
    },
  });

  return server;
}
