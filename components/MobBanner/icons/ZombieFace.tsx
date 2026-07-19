import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '   ##      ##   ',
  '  ####    ####  ',
  '  ####    ####  ',
  '   ##      ##   ',
  '  ############  ',
  ' ############## ',
  '############### ',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '############### ',
  ' ############## ',
  '  ############  ',
  '   ##########   ',
  '    ########    '
]

const palette: Record<string, string> = {
  '#': '#4a7a3a',
  ' ': 'transparent'
}

export default function ZombieFace({
  size = 240,
  ...rest
}: MobIconProps) {
  return (
    <PixelGrid
      pixels={pixels}
      palette={palette}
      size={size}
      {...rest}
    />
  )
}
