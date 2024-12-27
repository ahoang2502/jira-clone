"use client";

import { useGetWorkspaces } from "@/features/workspaces/api/useGetWorkspaces";

export const WorkspaceSwitcher = () => {
  const {data} = useGetWorkspaces();

  return <div>WorkspaceSwitcher</div>;
};
