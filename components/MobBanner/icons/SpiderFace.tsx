import { PixelGrid, type MobIconProps } from './shared'

const pixels = [
  '                ',
  '   #        #   ',
  '  ###      ###  ',
  ' #####    ##### ',
  '#######  #######',
  '################',
  '################',
  '##  ########  ##',
  '##  ########  ##',
  '##  ##    ##  ##',
  '##  ##    ##  ##',
  '##  ##    ##  ##',
  '################',
  ' ################',
  '  ############## ',
  '   ##########   '
]

const palette: Record<string, string> = {
  '#': '#3a2a1a',
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
