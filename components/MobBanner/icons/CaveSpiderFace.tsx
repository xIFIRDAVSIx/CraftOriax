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
  '#': '#113a46',
  'R': '#c81e1e',
  ' ': 'transparent'
}

export default function CaveSpiderFace({
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