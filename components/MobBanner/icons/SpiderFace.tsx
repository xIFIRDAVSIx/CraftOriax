import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '##RR########RR##',
  '##RR########RR##',
  '####RR####RR####',
  '####RR####RR####',
  '################',
  'RR############RR',
  'RR##RRRRRRRR##RR',
  '####RRRRRRRR####',
  '################',
  '################',
  '################',
  '################',
  '################',
  '################',
  '################'
]

const palette: Record<string, string> = {
  '#': '#3d2420',
  'R': '#c81e1e',
  ' ': 'transparent'
}

export default function SpiderFace({
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