import { CommonListType } from "../types";
import { BsInstagram, BsTiktok, BsDiscord, BsLinkedin } from "react-icons/bs";

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
];
