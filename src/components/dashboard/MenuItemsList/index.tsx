import { MenuItem as MenuItemType } from "../../../contants/menu_items";
import MenuItem from "../MenuItem";

type MenuItemsListProps = {
  options: MenuItemType[],
};

export default function MenuItemsList({ options }: MenuItemsListProps) {
  return (
    <>
      {options.map((option) => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </>
  );
}