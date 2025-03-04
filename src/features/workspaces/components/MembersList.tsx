"use client";

import { ArrowLeft, MoreVerticalIcon } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

import { DottedSeparator } from "@/components/Dotted-Separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useGetMembers } from "@/features/members/api/useGetMembers";
import { MemberAvatar } from "@/features/members/components/MemberAvatar";
import { useWorkspaceId } from "../hooks/useWorkspaceId";

export const MembersList = () => {
  const workspaceId = useWorkspaceId();
  const { data } = useGetMembers({ workspaceId });

  return (
    <Card className="w-full h-full border-none shadow-none">
      <CardHeader className="flex flex-row items-center gap-x-4 p-7 space-y-0">
        <Button variant="secondary" size="sm" asChild>
          <Link href={`/workspaces/${workspaceId}`}>
            <ArrowLeft className="size-4 mr-2" />
            Back
          </Link>
        </Button>

        <CardTitle className="text-xl font-bold">Members list</CardTitle>
      </CardHeader>

      <div className="px-7">
        <DottedSeparator />
        <CardContent className="p-7">
          {data?.documents.map((member, index) => (
            <Fragment key={member.$id}>
              <div className="flex items-center gap-2">
                <MemberAvatar
                  name={member.name}
                  className="size-10"
                  fallbackClassName="textlg"
                />

                <div className="flex flex-col">
                  <p className="text-sm font-medium">{member.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {member.email}
                  </p>
                </div>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="ml-auto" variant="secondary" size="icon">
                      <MoreVerticalIcon className="size-4 text-muted-foreground" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent side="bottom" align="end">
                    <DropdownMenuItem
                      className="font-medium"
                      onClick={() => {}}
                      disabled={false}
                    >
                      Set as Administration
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="font-medium"
                      onClick={() => {}}
                      disabled={false}
                    >
                      Set as Member
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      className="font-medium text-amber-700"
                      onClick={() => {}}
                      disabled={false}
                    >
                      Remove {member.name}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {index < data.documents.length - 1 && (
                <Separator className="my-2.5" />
              )}
            </Fragment>
          ))}
        </CardContent>
      </div>
    </Card>
  );
};
