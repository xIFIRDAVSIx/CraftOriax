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
  '#': '#c9c4a8',
  'X': '#1a1a1a',
  ' ': 'transparent'
}

export default function SkeletonFace({
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
