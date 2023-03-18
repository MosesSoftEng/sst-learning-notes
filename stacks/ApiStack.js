/*
 * Defines App Infrastructure.
 */
// SST’s construct 
import { Api, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [table], // Allow API to access DynamoDB table
      },
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main", // Create a note.
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}
