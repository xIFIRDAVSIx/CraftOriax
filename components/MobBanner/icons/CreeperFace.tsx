import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '                ',
  '  ##########    ',
  ' ############## ',
  '################',
  '################',
  '####  ####  ####',
  '####  ####  ####',
  '####  ####  ####',
  '################',
  '######  ########',
  '######    ######',
  '######    ######',
  '#######  #######',
  '################',
  '  ############  '
]

const palette: Record<string, string> = {
  '#': '#5a8c3a',
  ' ': 'transparent'
}

export default function CreeperFace({
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
