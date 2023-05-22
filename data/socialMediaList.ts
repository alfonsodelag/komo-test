import { CommonListType } from '../types';
import {BsInstagram} from "react-icons/bs"
import {BsTiktok} from "react-icons/bs";
import {BsDiscord} from "react-icons/bs";
import {BsLinkedin} from "react-icons/bs";

export const socialMediaList: CommonListType[] = [
  {
    name: 'Instagram',
    icon: BsInstagram,
    link: '/pages',
    enabled: true,
  },
  {
    name: 'TikTok',
    icon: BsTiktok,
    link: '/pages',
    enabled: true,
  },
  {
    name: 'Discord',
    icon: BsDiscord,
    link: '/pages',
    tooltip: 'Coming Soon',
    enabled: false,
  },
  {
    name: 'LinkedIn',
    icon: BsLinkedin,
    link: '/pages',
    tooltip: 'Coming Soon',
    enabled: false,
  },
];
