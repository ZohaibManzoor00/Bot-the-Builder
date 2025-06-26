"use client";

import { toast } from "sonner";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [value, setInput] = useState("");
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => toast.success("Background Job Started"),
    }),
  );

  return (
    <div>
      <Input value={value} onChange={(e) => setInput(e.target.value)} />
      <Button onClick={() => invoke.mutate({ value })} disabled={invoke.isPending}>
        Invoke Background Job
      </Button>
    </div>
  );
}
