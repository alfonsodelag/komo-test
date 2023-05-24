import { CommonListType } from "../types";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

export const socialMediaList: CommonListType[] = [
  {
    name: "Instagram",
    icon: BsInstagram,
    link: "/manage-social-media/social-media/instagram",
    enabled: true,
  },
  {
    name: "TikTok",
    icon: BsTiktok,
    link: "/manage-social-media/social-media/tiktok",
    enabled: true,
  },
  {
    name: "Discord",
    icon: BsDiscord,
    link: "/manage-social-media/social-media/discord",
    tooltip: "Coming Soon",
    enabled: true,
  },
  {
    name: "LinkedIn",
    icon: BsLinkedin,
    link: "/manage-social-media/social-media/[slug]",
    tooltip: "Coming Soon",
    enabled: true,
  },
];
