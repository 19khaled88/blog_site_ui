import MenuItemsList from "../MenuItemsList";
import { SidebarContainer } from "./styles";
import { MENU_ITEMS } from "@/contants/menu_items"; 

type SidebarProps = {
    isOpened: boolean;
  };

export default function Sidebar({isOpened}:SidebarProps){
    return <SidebarContainer isOpened={isOpened}>
      {/* <MenuItemsList options={MENU_ITEMS}/> */}
      <MenuItemsList options={MENU_ITEMS}/>
    </SidebarContainer>
}