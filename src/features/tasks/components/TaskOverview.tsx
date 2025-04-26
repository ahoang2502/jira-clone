import { PencilIcon } from "lucide-react";

import { DottedSeparator } from "@/components/Dotted-Separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { snakeCaseToTitleCase } from "@/lib/utils";
import { useEditTaskModal } from "../hooks/useEditTaskModal";
import { Task } from "../types";
import { OverviewProperty } from "./OverviewProperty";
import { TaskDate } from "./TaskDate";

import { MemberAvatar } from "@/features/members/components/MemberAvatar";

interface TaskOverviewProps {
  task: Task;
}

export const TaskOverview = ({ task }: TaskOverviewProps) => {
  const { open } = useEditTaskModal();

  return (
    <div className="flex flex-col gap-y-4 col-span-1">
      <div className="bg-muted rounded-lg p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold">Overview</p>

          <Button size="sm" variant="secondary" onClick={() => open(task.$id)}>
            <PencilIcon className="size-4 mr-2" />
            Edit
          </Button>
        </div>

        <DottedSeparator className="my-4" />
        <div className="flex flex-col gap-y-4">
          <OverviewProperty label="Assignee">
            <MemberAvatar name={task.assignee.name} className="size-6" />
            <p className="text-sm font-medium">{task.assignee.name}</p>
          </OverviewProperty>

          <OverviewProperty label="Due date">
            <TaskDate value={task.dueDate} className="text-sm font-medium" />
          </OverviewProperty>

          <OverviewProperty label="Status">
            <Badge variant={task.status}>
              {snakeCaseToTitleCase(task.status)}
            </Badge>
          </OverviewProperty>
        </div>
      </div>
    </div>
  );
};
