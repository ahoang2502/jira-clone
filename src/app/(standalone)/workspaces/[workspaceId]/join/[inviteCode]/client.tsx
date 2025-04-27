"use client";

import { PageError } from "@/components/PageError";
import { PageLoader } from "@/components/PageLoader";

import { useGetWorkspaceInfo } from "@/features/workspaces/api/useGetWorkspaceInfo";
import { JoinWorkspaceForm } from "@/features/workspaces/components/JoinWorkspaceForm";
import { useWorkspaceId } from "@/features/workspaces/hooks/useWorkspaceId";

export const WorkspaceIdJoinClient = () => {
  const workspaceId = useWorkspaceId();
  const { data: initialValues, isLoading } = useGetWorkspaceInfo({
    workspaceId,
  });

  if (isLoading) return <PageLoader />;

  if (!initialValues) return <PageError message="Workspace not found" />;

  return (
    <div className="w-full lg:max-w-xl">
      <JoinWorkspaceForm initialValues={initialValues} />
    </div>
  );
};
