import { ExternalLink, Pencil, TrashIcon } from "lucide-react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TaskActionsProps {
  id: string;
  projectId: string;
  children: React.ReactNode;
}

export const TaskActions = ({ id, projectId, children }: TaskActionsProps) => {
  return (
    <div className="flex justify-end">
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-48 ">
          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="font-medium p-[10px]"
          >
            <ExternalLink className="size-4 mr-2 stroke-2" />
            Task Details
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="font-medium p-[10px]"
          >
            <ExternalLink className="size-4 mr-2 stroke-2" />
            Open Project
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="font-medium p-[10px]"
          >
            <Pencil className="size-4 mr-2 stroke-2" />
            Edit Task
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => {}}
            disabled={false}
            className="font-medium p-[10px] text-amber-700 focus:text-amber-700"
          >
            <TrashIcon className="size-4 mr-2 stroke-2" />
            Delete Task
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
