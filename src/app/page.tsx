"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [value, setInput] = useState("");
  const trpc = useTRPC();
  const { data: messages } = useQuery(trpc.messages.getMany.queryOptions());
  const createMessage = useMutation(
    trpc.messages.create.mutationOptions({
      onSuccess: () => toast.success("Message created"),
    })
  );

  return (
    <div>
      <Input value={value} onChange={(e) => setInput(e.target.value)} />
      <Button
        onClick={() => createMessage.mutate({ value })}
        disabled={createMessage.isPending}
      >
        Invoke Background Job
      </Button>
      {JSON.stringify(messages, null, 2)}
    </div>
  );
}
