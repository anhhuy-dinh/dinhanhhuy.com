import FaGithub from 'notion-nextjs-lib/dist/icons/FaGithub'
// import FaPenNib from 'notion-nextjs-lib/dist/icons/FaPenNib'
import GrCircleInformation from 'notion-nextjs-lib/dist/icons/GrCircleInformation'
import ImPencil2 from 'notion-nextjs-lib/dist/icons/ImPencil2'
import RiHome2Line from 'notion-nextjs-lib/dist/icons/RiHome2Line'
import TiTag from 'notion-nextjs-lib/dist/icons/TiTag'

import me from './me'

export type MenuType = {
  name: string
  uri: string
  icon: any
}

export const MenuAbout = {
  name: 'About',
  uri: '/about/',
  icon: GrCircleInformation
}

export const MENUS: MenuType[] = [
  {
    name: 'Home',
    uri: '/',
    icon: RiHome2Line
  },
  MenuAbout,
  // {
  //   name: 'Blog',
  //   uri: '/blogs/',
  //   icon: FaPenNib
  // },
  {
    name: 'Notes',
    uri: '/notes/',
    icon: ImPencil2
  },
  {
    name: 'Topics',
    uri: '/tags/',
    icon: TiTag
  },
  {
    name: 'Projects',
    uri: '/projects/',
    icon: FaGithub
  }
]

export const MenuGithub = {
  name: 'Github',
  path: me.github,
  icon: FaGithub,
  external: true,
  hideOnDesktop: true,
  hide: true
}
