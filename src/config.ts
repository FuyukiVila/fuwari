import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
  title: "ゆき",
  subtitle: "ヴぃら",
  lang: "zh_CN", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko'
  themeColor: {
    hue: 250, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false, // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: "https://s2.loli.net/2024/12/10/zuACeSQIYOgxDZJ.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: true, // Display the credit text of the banner image
      text: "Saclia / YURI", // Credit text to be displayed
      url: "https://www.pixiv.net/artworks/124648531", // (Optional) URL link to the original artwork or artist's page
    },
  },
  toc: {
    enable: true, // Display the table of contents on the right side of the post
    depth: 2, // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [
    // Leave this array empty to use the default favicon
    {
      src: "favicon/favicon.png", // Path of the favicon, relative to the /public directory
      // theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
      // sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    },
  ],
};

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: "GitHub",
      url: "https://github.com/fuyukivila/yuki.fuyuki.fun", // Internal links should not include the base path, as it is automatically added
      external: true, // Show an external link icon and will open in a new tab
    },
  ],
};

export const profileConfig: ProfileConfig = {
  avatar: "https://s2.loli.net/2024/12/11/y82jlxJGn5SDCpI.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: "Fuyuki_Vila",
  bio: "Haru La Fuyuki",
  links: [
    {
      name: "Bilibili",
      icon: "fa6-brands:bilibili", // Visit https://icones.js.org/ for icon codes
      // You will need to install the corresponding icon set if it's not already included
      // `pnpm add @iconify-json/<icon-set-name>`
      url: "https://space.bilibili.com/23772649",
    },
    {
      name: "GitHub",
      icon: "fa6-brands:github",
      url: "https://github.com/fuyukivila",
    },
    {
      name: "Music",
      icon: "ri:netease-cloud-music-line",
      url: "https://music.163.com/#/user/home?id=410193348",
    },
  ],
};

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/legalcode.zh-hans",
};
