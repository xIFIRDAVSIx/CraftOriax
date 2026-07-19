import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '      ####      ',
  '    ########    ',
  '   ##########   ',
  '  ############  ',
  '  ####    ####  ',
  '  ####    ####  ',
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
  '#': '#8a6a3a',
  ' ': 'transparent'
}

export default function SnifferFace({
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
