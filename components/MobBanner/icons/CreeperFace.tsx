import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '################',
  '################',
  '##    ####    ##',
  '##    ####    ##',
  '##    ####    ##',
  '################',
  '######    ######',
  '#####      #####',
  '####        ####',
  '####        ####',
  '####  ####  ####',
  '####  ####  ####',
  '################',
  '################',
  '################',
  '                '
]

const palette = {
  '#': '#5f9f3b',
  '+': '#6db847',
  '-': '#4b8230',
  ' ': 'transparent'
}

export default function CreeperFace({
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
