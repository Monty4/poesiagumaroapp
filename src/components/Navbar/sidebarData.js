import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";
import * as HiIcons from "react-icons/hi";
import * as GiIcons from "react-icons/gi";

export const SidebarData = [
    {
        title: 'Inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Poesias',
        path: '/poems',
        icon: <BsIcons.BsMusicNoteBeamed />,
        cName: 'nav-text'
    },
    {
        title: 'Coral Cruz Roja',
        path: '/cruzroja',
        icon: <RiIcons.RiGroupLine />,
        cName: 'nav-text'
    },
    {
        title: 'EMAC',
        path: '/emac',
        icon: <HiIcons.HiOutlineOfficeBuilding />,
        cName: 'nav-text'
    },
    {
        title: 'Temas que te gustarán',
        path: '/themes',
        icon: <GiIcons.GiPapers />,
        cName: 'nav-text'
    },
    {
        title: 'Admin',
        path: '/admin',
        icon: <GiIcons.GiPapers />,
        cName: 'nav-text'
    }
]