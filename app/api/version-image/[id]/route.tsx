import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  return new ImageResponse(
    (
      <div
        style= {{
    width: "1200px",
    height: "630px",
    display: "flex",
    alignItems: "center",
    background: "#111315",
    padding: "70px",
    color: "white",
    fontFamily: "sans-serif",
  }}
      >
  <div
          style={
  {
    width: 90,
      height: 90,
        borderRadius: 18,
          background: "#9BE22D",
            marginRight: 40,
          }
}
        />

  < div
style = {{
  display: "flex",
    flexDirection: "column",
          }}
        >
  <div
            style={
  {
    fontSize: 72,
      fontWeight: 800,
        lineHeight: 1,
            }
}
          >
  MINECRAFT{ " " }
<span style={ { color: "#9BE22D" } }>
  JAVA
  </span>
  </div>

  < div
style = {{
  marginTop: 28,
    background: "#9BE22D",
      color: "#111315",
        borderRadius: 999,
          padding: "12px 24px",
            fontSize: 32,
              fontWeight: 700,
                display: "flex",
                  alignSelf: "flex-start",
            }}
          >
  Version { id }
</div>
  </div>
  </div>
    ),
{
  width: 1200,
    height: 630,
    }
  );
}