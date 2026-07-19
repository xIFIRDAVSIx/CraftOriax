import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '    ########    ',
  '  ############  ',
  ' ################',
  '################',
  '####  ######  ###',
  '####  ######  ###',
  '####  ######  ###',
  '################',
  '################',
  '##  ##########  #',
  '##  ##########  #',
  '##  ##      ##  #',
  '################',
  ' ############## ',
  '   ##########   '
]

const palette: Record<string, string> = {
  '#': '#1e3a5f',
  ' ': 'transparent'
}

export default function WardenFace({
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
