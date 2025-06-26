import { env } from "@/lib/env";
import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "summarizer",
      system: `You are an expert Summarizer. You summarize into 2 words ${event.data.value}`,
      model: openai({ model: "gpt-4o" }),
    });
    const { output } = await summarizer.run(
      `Summarize the following text: ${event.data.value}`
    );
    return { output };
  }
);
