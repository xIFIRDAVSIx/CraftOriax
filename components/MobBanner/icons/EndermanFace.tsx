import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '################',
  '################',
  '################',
  '################',
  '################',
  '#XXOOXX##XXOOXX#',
  '#XXOOXX##XXOOXX#',
  '################',
  '################',
  '################',
  '################',
  '################',
  '################',
  '################',
  '################'
]

const palette: Record<string, string> = {
  '#': '#161616',
  'X': '#d35cff',
  'O': '#721c92',
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