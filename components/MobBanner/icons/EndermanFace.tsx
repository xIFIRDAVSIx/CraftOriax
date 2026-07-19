import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '    ##    ##    ',
  '   ####  ####   ',
  '  ######  ######',
  '  ######  ######',
  '   ####  ####   ',
  '    ##    ##    ',
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
  '#': '#1a1a2e',
  ' ': 'transparent'
}

export default function EndermanFace({
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
