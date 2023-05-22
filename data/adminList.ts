import { CommonListType } from '../types';
import { AiOutlineEdit } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

export const adminList: CommonListType[] = [
  {
    name: 'Manage Social Media',
    link: '/screen/manageSocialMedia',
    enabled: true,
    icon: AiOutlineEdit,
  },
  {
    name: 'Community Messages',
    link: '/',
    enabled: false,
    tooltip: 'Coming Soon',
    icon: BsMessenger,
  },
];
