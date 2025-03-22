"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 justify-center items-center">
      <AlertTriangle className="size-6 text-muted-foreground text-muted-foreground" />
      <p className="text-sm">Something went wrong</p>

      <Button variant="secondary" size="sm" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
