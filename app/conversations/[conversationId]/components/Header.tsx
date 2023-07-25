"use client";

import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const Header = ({ conversation }: HeaderProps): JSX.Element => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }

    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      <div
        className="
       bg-white
         w-full
         flex
         justify-between
         items-center
         border-b-[1px]
         sm:px-4
         py-3
         px-4
         lg:px-6
         shadow-sm
        "
      >
        <div className="flex gap-3 items-center">
          <Link
            href={"/conversations"}
            className="
             lg:hidden
             block
             text-purple-500
             hover:text-purple-600
             transition
             cursor-pointer
          "
          >
            <HiChevronLeft size={32} />
          </Link>

          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className="flex flex-col">
            <div className="font-medium">{conversation.name || otherUser.name}</div>
            <div className="text-sm font-normal text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>

        <HiEllipsisHorizontal
          size={32}
          onClick={() => setDrawerOpen(true)}
          className="
         cursor-pointer
         transition
         text-purple-500
         hover:text-purple-600
        "
        />
      </div>
    </>
  );
};

export default Header;
