import React, { FC } from 'react'
import styled from 'styled-components'
import { Tag as AntdTag } from 'antd'
import { chipCss } from './chipCss'
import { ChipProps, ChipViewProps } from './types'
import { useThemedChip } from './useThemedChip'
import { Close } from '@kaspersky/icons/8'
import { Badge } from '@src/badge'
import { useTestAttribute } from '@helpers/hooks/useTestAttribute'

const StyledChip = styled(AntdTag).withConfig({
  shouldForwardProp: (prop) => !['cssConfig'].includes(prop)
})`${chipCss}`

export const Chip: FC<ChipProps> = (rawProps: ChipProps) => {
  const themedProps = useThemedChip(rawProps)
  const props = useTestAttribute(themedProps)
  return <ChipView {...props} />
}

const ChipView: FC<ChipViewProps> = ({
  label,
  icon,
  counter,
  disabled = false,
  onClose,
  testId,
  testAttributes,
  ...rest
}: ChipViewProps) => {
  return (
    <StyledChip
      closable
      disabled={disabled}
      onClose={disabled ? (e: React.MouseEvent<HTMLElement>) => e.preventDefault() : onClose}
      closeIcon={<Close />}
      tabIndex={0}
      {...testAttributes}
      {...rest}
    >
      {icon}
      {label}
      {counter && <Badge count={counter} mode='neutral' />}
    </StyledChip>
  )
}
