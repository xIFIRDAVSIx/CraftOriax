import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '    ##    ##    ',
  '   ####  ####   ',
  '  ######  ######',
  '  ##############',
  '   ############',
  '    ##########  ',
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
  '#': '#9c6ad8',
  ' ': 'transparent'
}

export default function AllayFace({
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
