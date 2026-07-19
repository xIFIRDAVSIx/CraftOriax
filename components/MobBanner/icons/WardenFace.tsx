import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  ' HH   XXXXXXXXXXXXXXXX   HH ',
  'HH    XXXXXXXXXXXXXXXX    HH',
  'HH    XXXXXXXXXXXXXXXX    HH',
  ' HH   X#X#X##XX#####XX   HH',
  ' HRR  XX##########X##X  RRH',
  '  RRRRX#####X#########RRRR  ',
  '   RRR###X#######X####RRR'  ,
  '      #X####XXXX###X##',
  '      ####XXXXXXXX####   ',
  '      ###X########X###   ',
  '      ##X##########X##   ',
  '      ################   ',
  '      ##X##XXXXXX##X##   ',
  '      ###XX######XX###   ',
  '      ################   ',
  '      ###############X   '
]

const palette: Record<string, string> = {
  '#': '#1e3a5f',
  'X': '#3c72b9',
  'R': '#152842',
  'H': '#30656f',
  ' ': 'transparent'
}

export default function WardenFace({
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
