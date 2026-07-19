import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '                ',
  '   ##########   ',
  ' ############## ',
  '############### ',
  '#####  ##  #####',
  '#####  ##  #####',
  '#####  ##  #####',
  '################',
  '################',
  '####  ######  ###',
  '####  ######  ###',
  '################',
  ' ############## ',
  '   ##########   ',
  '                '
]

const palette: Record<string, string> = {
  '#': '#d8d8c8',
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
