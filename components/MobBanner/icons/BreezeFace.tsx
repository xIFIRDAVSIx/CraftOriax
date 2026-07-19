import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '     ####       ',
  '   ########     ',
  '  ##########    ',
  ' ####  ####    ',
  ' ####  ####    ',
  '  ############  ',
  ' ############## ',
  '############### ',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '###  ##  ##  ###',
  '################',
  ' ############## ',
  '   ##########   ',
  '                '
]

const palette: Record<string, string> = {
  '#': '#cfd8dc',
  ' ': 'transparent'
}

export default function BreezeFace({
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
