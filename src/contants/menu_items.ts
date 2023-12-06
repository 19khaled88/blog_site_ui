
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
        name: 'Dashboard',
        icon: Dashboard,
        url: '/dashboard'
    },
    {
        role:'ADMIN',
        name: "Orders",
        icon: ShoppingCart,
        url: "/orders",
        subItems: [
            {
                role:'ADMIN',
                name: "New",
                icon: AddShoppingCart,
                url: "/new-orders",
            },
            {
                role:'ADMIN',
                name: "Completed",
                icon: Done,
                url: "/completed-orders",
            },
        ],
    },
    {
        role:'USER',
        name: "Customers",
        icon: People,
        url: "/customers",
        subItems: [
            {
                role:'USER',
                name: "Corporate",
                icon: Business,
                url: "/corporate",
            },
            {
                role:'USER',
                name: "SMB",
                icon: HomeWork,
                url: "/smb",
                subItems: [
                    {
                        role:'USER',
                        name: "Retail",
                        icon: Person,
                        url: "/retail",
                    },
                ],
            },
        ],
    },
    {
        role:'USER',
        name:'Inventory',
        icon:AttachMoney,
        url:"/inventory"
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

