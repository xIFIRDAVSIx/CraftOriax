import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '################',
  '################',
  '################',
  '################',
  '################',
  '##XXXX####XXXX##',
  '##XXXX####XXXX##',
  '################',
  '################',
  '####XXXXXXXX####',
  '####XXXXXXXX####',
  '################',
  '################',
  '################',
  '################'
]

const palette: Record<string, string> = {
  '#': '#5d9b43',
  'X': '#1a1a1a',
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