import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  'AAAAAAAAAAAAAAAA',
  'AAAAAAAAAAAAAAAA',
  'AAAAAAAAAAAAAAAA',
  'AAAAAAAAAAAAAAAA',
  'AAAAAAAAAAAAAAAA',
  'AAAAAAAAAAAAAAAA',
  'SSSSAAAAAAAASSSS',
  'SSSSAAAAAAAASSSS',
  'SSSSSSOOOOSSSSSS',
  'SSSSSSOOOOSSSSSS',
  'XX##OOOOOOOO##XX',
  'XX##OOOOOOOO##XX',
  'OOOOOOOOOOOOOOOO',
  'OOOOOOOOOOOOOOOO',
  'OOOOOOOOOOOOOOOO'
]

const palette: Record<string, string> = {
  '#': '#000000',
  'X': '#ffffff',
  'O': '#414e8b',
  'A': '#5d699a',
  'S': '#a4a4a6',
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