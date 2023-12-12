
import { MdFormatListBulleted,MdFormatListBulletedAdd,MdOutlineCategory  } from "react-icons/md";
import { BiCommentDetail,BiCategory } from "react-icons/bi";
import { TbCategoryPlus } from "react-icons/tb";
import {
    Dashboard,
    ShoppingCart,
    People,
    AttachMoney,
    AddShoppingCart,
    Done,
    Business,
    HomeWork,
    Person,
    PostAdd,
    AddComment
} from '@styled-icons/material'

import { useEffect } from 'react'

type MenuOption ={
    name:string,
    icon:React.ComponentType,
    url:string,
    subItems?:MenuOption[]
}
type MenuOption_role ={
    role:string,
    name:string,
    icon:React.ComponentType,
    url:string,
    subItems?:MenuOption_role[]
}
export type MenuItem_role ={
    role:string,
    name:string,
    icon:React.ComponentType,
    url:string,
    id:string,
    depth:number,
    subItems?:MenuItem_role[]
}
export type MenuItem ={
    name:string,
    icon:React.ComponentType,
    url:string,
    id:string,
    depth:number,
    subItems?:MenuItem[]
}
const MENU_OPTIONS_ROLE_BASED:MenuOption_role[]=[
    {
        role:'ADMIN',
        name: 'Posts',
        icon: MdFormatListBulleted,
        url: '/dashboard/admin/posts/list'
    },
    {
        role:'ADMIN',
        name: "Comments",
        icon: BiCommentDetail,
        url: "/dashboard/admin/comment",
       
    },
    {
        role:'ADMIN',
        name: "Category",
        icon: MdOutlineCategory,
        url: "/dashboard/admin/comment",
        subItems: [
            {
                role:'ADMIN',
                name: "Create",
                icon: TbCategoryPlus,
                url: "/dashboard/admin/category/create",
            },
            {
                role:'ADMIN',
                name: "List",
                icon: BiCategory,
                url: "/dashboard/admin/category/list",
               
            },
        ],
       
    },
    {
        role:'USER',
        name: "Posts",
        icon: People,
        url: "/",
        subItems: [
            {
                role:'USER',
                name: "Create",
                icon: MdFormatListBulletedAdd,
                url: "/dashboard/user/posts/create",
            },
            {
                role:'USER',
                name: "Post List",
                icon: MdFormatListBulleted,
                url: "/dashboard/user/posts/list",
               
            },
        ],
    },
    {
        role:'USER',
        name:'Comments',
        icon:BiCommentDetail,
        url:"/dashboard/user/comment"
    }
]

const MENU_OPTIONS:MenuOption[] = [
    {
        name: 'Dashboard',
        icon: Dashboard,
        url: '/dashboard'
    },
    {
        name: "Orders",
        icon: ShoppingCart,
        url: "/orders",
        subItems: [
            {
                name: "New",
                icon: AddShoppingCart,
                url: "/new-orders",
            },
            {
                name: "Completed",
                icon: Done,
                url: "/completed-orders",
            },
        ],
    },
    {
        name: "Customers",
        icon: People,
        url: "/customers",
        subItems: [
            {
                name: "Corporate",
                icon: Business,
                url: "/corporate",
            },
            {
                name: "SMB",
                icon: HomeWork,
                url: "/smb",
                subItems: [
                    {
                        name: "Retail",
                        icon: Person,
                        url: "/retail",
                    },
                ],
            },
        ],
    },
    {
        name:'Inventory',
        icon:AttachMoney,
        url:"/inventory"
    }
]



const makeMenuLevel=(options:MenuOption_role[],depth = 0):MenuItem_role[]=>{
    return options.map((option,idx)=>({
        ...option,
        id:depth === 0 ? idx.toString() : `${depth}.${idx}`,
        depth,
        subItems:option.subItems && option.subItems.length > 0 
        ? makeMenuLevel(option.subItems, depth + 1)
        :undefined,
    }))
}

export const MENU_ITEMS:MenuItem_role[] = makeMenuLevel(MENU_OPTIONS_ROLE_BASED)

