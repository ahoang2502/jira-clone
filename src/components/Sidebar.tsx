import Image from "next/image";
import Link from "next/link";

import { DottedSeparator } from "./Dotted-Separator";
import { Navigation } from "./Navigation";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href="/" className="flex items-end gap-x-3">
        <Image src="/logo.svg" alt="logo" width={48} height={48} />
        <p className="font-bold text-4xl">Jira</p>
      </Link>

      <DottedSeparator className="my-4" />
      <WorkspaceSwitcher />

      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
