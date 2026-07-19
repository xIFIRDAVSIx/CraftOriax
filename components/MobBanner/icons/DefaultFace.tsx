import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '    ########    ',
  '  ############  ',
  ' ################',
  '################',
  '###  ##    ##  ##',
  '###  ##    ##  ##',
  '###  ##    ##  ##',
  '################',
  '################',
  '####  ######  ###',
  '####  ######  ###',
  '####  ######  ###',
  '################',
  ' ############## ',
  '   ##########   '
]

const palette: Record<string, string> = {
  '#': '#5b8cff',
  ' ': 'transparent'
}

export default function DefaultFace({
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
