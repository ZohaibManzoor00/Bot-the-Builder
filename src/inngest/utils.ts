import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, type Message, TextMessage } from "@inngest/agent-kit";
import { SANDBOX_TIMEOUT } from "./types";

export const getSandbox = async (sandboxId: string) => {
  const sandbox = await Sandbox.connect(sandboxId);
  await sandbox.setTimeout(SANDBOX_TIMEOUT);
  return sandbox;
};

export const lastAssistantTextMessageContent = async (result: AgentResult) => {
  const lastAssistantTextMessageIdx = result.output.findLastIndex(
    (message) => message.role == "assistant"
  );
  const message = result.output[lastAssistantTextMessageIdx] as
    | TextMessage
    | undefined;
  return message?.content
    ? typeof message.content === "string"
      ? message.content
      : message.content.map((c) => c.text).join("")
    : undefined;
};

export const parseAgentOutput = (value: Message[], defaultOutput: string) => {
  const output = value[0];
  if (output.type !== "text") return defaultOutput;

  if (Array.isArray(output.content)) return output.content.map((txt) => txt).join("");

  return output.content ?? defaultOutput;
};
