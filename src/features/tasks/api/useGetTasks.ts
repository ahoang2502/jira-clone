import { useQuery } from "@tanstack/react-query";

import { client } from "@/lib/rpc";
import { TaskStatus } from "../types";

interface UseGetTasksProps {
  workspaceId: string;
  projectId?: string | null;
  status?: TaskStatus | null;
  assigneeId?: string | null;
  search?: string | null;
  dueDate?: string | null;
}

export const useGetTasks = ({
  workspaceId,
  projectId,
  assigneeId,
  dueDate,
  status,
  search,
}: UseGetTasksProps) => {
  const query = useQuery({
    queryKey: [
      "tasks",
      workspaceId,
      projectId,
      search,
      status,
      assigneeId,
      dueDate,
    ],
    queryFn: async () => {
      const response = await client.api.tasks.$get({
        query: {
          workspaceId,
          projectId: projectId ?? undefined,
          status: status ?? undefined,
          search: search ?? undefined,
          dueDate: dueDate ?? undefined,
          assigneeId: assigneeId ?? undefined,
        },
      });

      if (!response.ok) throw new Error("Failed to get tasks");

      const { data } = await response.json();

      return data;
    },
  });

  return query;
};
