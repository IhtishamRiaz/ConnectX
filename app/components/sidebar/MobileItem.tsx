"use client";

import clsx from "clsx";
import Link from "next/link";

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const MobileItem = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}: MobileItemProps): JSX.Element => {
  const handleClick = () => {
    if (onClick) {
      return onClick;
    }
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        `
      group
      flex
      justify-center
      gap-x-3
      text-sm
      leading-6
      font-semibold
      w-full
      p-4
      text-gray-400
      hover:text-purple-600
      hover:bg-gray-100`,
        active && "text-purple-600 bg-gray-100"
      )}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
};

export default MobileItem;
