import React from 'react'

export type MenuItemData = {
  state?: string,
  routeParams?: any,
  parentState?: string,
  parentPluginId?: string,
  weight?: number,
  key: string,
  iconClass?: any,
  itemClass?: string | null,
  icon?: any,
  klId?: string,
  items?: MenuItemData[],
  onClick?: () => void,
  condition?: () => boolean,
  path?: string[],
  additionalElements?: React.ReactNode,
  groupsTree?: boolean,
  isRoot?: boolean,
  isNew?: boolean
}

export type MenuItemProps = {
  className?: string,
  key: string,
  data: MenuItemData,
  onClick?: () => void
}

export type MenuProps = {
  menuItems: any,
  className?: string,
  collapsed?: boolean
}
