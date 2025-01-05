"use client";

import { ResponsiveModal } from "@/components/ResponsiveModal";
import { useCreateWorkspaceModal } from "../hooks/useCreateWorkspaceModal";
import { CreateWorkspaceForm } from "./CreateWorkspaceForm";

export const CreateWorkspaceModal = () => {
  const { isOpen, setIsOpen } = useCreateWorkspaceModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateWorkspaceForm onCancel={close} />
    </ResponsiveModal>
  );
};
