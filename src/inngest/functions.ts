import { Sandbox } from "@e2b/code-interpreter";
import { inngest } from "./client";
import { openai, createAgent } from "@inngest/agent-kit";
import { getSandbox } from "./utils";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    const sandboxId = await step.run("get-sandbox-id", async () => {
      const sandbox = await Sandbox.create("lovable-v0-clone-2");
      return sandbox.sandboxId;
    });
    const codeAgent = createAgent({
      name: "code-agent",
      system: `You are an expert next.js developer. You write readable, maintainable, and performant code. You write simple Next.js and React Snippets.`,
      model: openai({ model: "gpt-4o" }),
    });
    const { output } = await codeAgent.run(
      `Summarize the following snippet: ${event.data.value}`
    );
    const sandboxUrl = await step.run("get-sandbox-url", async () => {
      const sandbox = await getSandbox(sandboxId);
      const host = sandbox.getHost(3000);
      return `http://${host}`;
    });

    return { output, sandboxUrl };
  }
);
