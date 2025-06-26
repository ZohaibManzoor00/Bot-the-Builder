import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("Transcoding", "10s");
    await step.sleep("Uploading", "5s");
    await step.sleep("Processing", "8s");
    return { message: `Hello ${event.data.email}!` };
  },
);
