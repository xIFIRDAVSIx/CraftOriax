import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '      ####      ',
  '    ########    ',
  '   ##########   ',
  '  ####  ######  ',
  '  ####  ######  ',
  '  ####  ######  ',
  '  ############  ',
  ' ############## ',
  '############### ',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '################',
  ' ############## ',
  '   ##########   '
]

const palette: Record<string, string> = {
  '#': '#d9a020',
  ' ': 'transparent'
}

export default function BeeFace({
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
