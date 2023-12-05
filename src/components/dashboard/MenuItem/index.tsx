'use client'
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { MenuItem as MenuItemType } from "../../../contants/menu_items";
import { MenuItemContainer } from "./styles";
import MenuItemsList from "../MenuItemsList";
import ExpandIcon from "../ExpandIcon";
import { useState } from "react";

type MenuItemProps = {
  menuItem: MenuItemType,
};

export default function MenuItem({
  menuItem: { name, icon: Icon, url, depth, subItems },
}: MenuItemProps) {
  const [isExpanded, toggleExpanded] = useState(false);


  const pathname = usePathname()
  const selected = pathname === url;
  const isNested = subItems && subItems?.length > 0;

  const onClick = () => {
    toggleExpanded((prev) => !prev);
  };

  return (
    <>
      <MenuItemContainer className={selected ? "selected" : ""} depth={depth}>
        {/* <Link href={url} passHref>
          <span className="menu-item">
            <Icon />
            <p>{name}</p>
          </span>
        </Link> */}
        {isNested ? (
          <>
            <span className="menu-item">
              <Icon />
              <p>{name}</p>
            </span>
            <ExpandIcon isExpanded={isExpanded} handleClick={onClick} />
          </>
        ) :
          <Link href={url} passHref>
            <span className="menu-item">
              <Icon />
              <p>{name}</p>
            </span>
          </Link>
        }
      </MenuItemContainer>
      {isExpanded && isNested ? <MenuItemsList options={subItems} /> : null}
    </>
  );
}