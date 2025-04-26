"use client";

import { PencilIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { ProjectAvatar } from "@/features/projects/components/ProjectAvatar";
import { TaskViewSwitcher } from "@/features/tasks/components/TaskViewSwitcher";
import { useProjectId } from "@/features/projects/hooks/useProjectId";

const ProjectIdClient = () => {
  const projectId = useProjectId();
  const {} = useGetProject();

  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <ProjectAvatar
            name={initialValues.name}
            image={initialValues.imageUrl}
            className="size-8"
          />
          <p className="text-lg font-semibold">{initialValues.name}</p>
        </div>

        <div className="">
          <Button variant="secondary" size="sm" asChild>
            <Link
              href={`/workspaces/${initialValues.workspaceId}/projects/${initialValues.$id}/settings`}
            >
              <PencilIcon className="size-4 mr-2" />
              Edit Project
            </Link>
          </Button>
        </div>
      </div>

      <TaskViewSwitcher hideProjectFilter />
    </div>
  );
};

export default ProjectIdClient;
