/*
 * Defines App Infrastructure.
 */
// SST’s Table construct 
import { Table } from "sst/constructs";

export function StorageStack({ stack, app }) {
  // Create the DynamoDB table
  const table = new Table(stack, "Notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
  });

  // Make table available publicily.
  return {
    table,
  };
}
