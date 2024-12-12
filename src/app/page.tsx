"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCurrent } from "@/features/auth/api/useCurrent";
import { useLogout } from "@/features/auth/api/useLogout";
import { UserButton } from "@/features/auth/components/UserButton";

export default function Home() {
  const router = useRouter();

  const { data, isLoading } = useCurrent();
  const { mutate } = useLogout();

  useEffect(() => {
    if (!data && !isLoading) {
      router.push("/sign-in");
    }
  }, [data]);

  return (
    <div className="">
      <UserButton />
    </div>
  );
}
