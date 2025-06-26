import { caller } from "@/trpc/server";

export default async function Home() {
  const data = await caller.hello({ text: "client" });

  return <div>{data.greeting}</div>;
}
