import IsRole from "@/context/isRole";
import { MenuItem_role as MenuItemType } from "../../../contants/menu_items";
import MenuItem from "../MenuItem";


type MenuItemsListProps = {
  options: MenuItemType[],
};

export default  function MenuItemsList({ options }: MenuItemsListProps) {

  const role = IsRole()
  const res = options.filter((option)=>option.role === role?.userRole)
  console.log(role,res)
  return (
    <>
      {res.map((option) => (
        <MenuItem menuItem={option} key={option.id} />
      ))}
    </>
  );
}