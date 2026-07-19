import type { SVGProps } from 'react'

export type MobIconProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export function PixelGrid({
  pixels,
  palette,
  size = 16,
  ...rest
}: MobIconProps & {
  pixels: string[]
  palette: Record<string, string>
}) {
  const rows = pixels.length
  const cols = pixels[0].length
  const cell = size / Math.max(rows, cols)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${cols} ${rows}`}
      shapeRendering="crispEdges"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {pixels.map((row, y) =>
        row.split('').map((ch, x) => {
          const fill = palette[ch]
          if (!fill) return null
          return (
            <rect
              key={`${x}-${y}`}
              x={x}
              y={y}
              width={1}
              height={1}
              fill={fill}
            />
          )
        })
      )}
    </svg>
  )
}
