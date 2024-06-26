import { css } from 'styled-components'
import { SPACES } from '@design-system/theme'
import { colors } from '@design-system/theme/themes/dark/colors'

export const menuItemCss = css`
  .uif-menu-item-entry {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    height: 32px;
    border-radius: ${SPACES[4]}px;
    padding: 0 ${SPACES[4]}px;
    gap: ${SPACES[2]}px;
    user-select: none;

    &:hover {
      color: ${colors.mainInteract.secondary};
      background: ${colors.mainInteract['secondary-invert']};
    }
  }

  .uif-menu-item-entry-icon {
    display: flex;
    align-items: center;
  }

  .uif-menu-item-entry-title {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  .uif-menu-item-entry-arrow {
    transition: all ease 150ms;
  }

  .uif-menu-item-subs {
    transition: grid-template-rows ease 150ms;
    display: grid;
    grid-template-rows: 0fr;
  }

  .uif-menu-item-subs-wrapper {
    overflow: hidden;
  }

  .uif-menu-item-subs .uif-menu-item-entry-title {
    margin-left: 20px;
  }

  .uif-menu-item-subs .uif-menu-item-subs .uif-menu-item-entry-title {
    margin-left: 30px;
  }
  
  &.expanded,
  .expanded {
    > .uif-menu-item-entry .uif-menu-item-entry-arrow {
      transform: rotate(90deg);
    }

    > .uif-menu-item-subs {
      grid-template-rows: 1fr;
    }
  }

  .menu-collapsed & {
    .uif-menu-item-entry-arrow {
      display: none;
    }

    &.expanded,
    .expanded {
      & > .uif-menu-item-subs {
        display: block;
      }
    }

    .uif-menu-item-subs {
      position: absolute;
      left: 66px;
      margin-top: -32px;
      background-color: ${colors.bg.base};
      border-radius: ${SPACES[4]}px;

      .uif-menu-item-entry-title {
        margin: 0;
      }
    }
  }
`

export const menuCss = css`
  overflow: auto;
  padding: 0 ${SPACES[8]}px;
  color: ${colors.textIconsElements.primary};
  display: flex;
  flex-direction: column;
  gap: ${SPACES[2]}px;

  &.menu-collapsed {
    overflow: visible;
  }
`
