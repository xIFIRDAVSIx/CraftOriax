const fs = require("fs");

const INFO_PATH =
  "./data/bedrock-versions-info.json";

const OUTPUT_PATH =
  "./data/bedrock-versions.json";


if (!fs.existsSync(INFO_PATH)) {
  console.log(
    "Нет файла bedrock-versions-info.json"
  );
  process.exit(1);
}


const versionsInfo =
  JSON.parse(
    fs.readFileSync(
      INFO_PATH,
      "utf8"
    )
  );


function sortVersions(a, b) {

  const va =
    a.split(".").map(Number);

  const vb =
    b.split(".").map(Number);


  return (
    (vb[0] || 0) -
    (va[0] || 0)
  )
  ||
  (
    (vb[1] || 0) -
    (va[1] || 0)
  );

}


const versions =
  Object.keys(versionsInfo)
    .sort(sortVersions)
    .map(id => {

      const info =
        versionsInfo[id];


      return {
        slug:
          `bedrock-${id.replaceAll(".", "-")}`,

        id,

        title:
          info.title ||
          `Minecraft: Bedrock Edition ${id}`,

        name:
          info.title ||
          `Bedrock Edition ${id}`,

        edition:
          "Bedrock",

        releaseDate:
          info.releaseDate || "",

        codename:
          info.codename || "",

        summary:
          info.summary ||
          "Описание отсутствует.",

        features:
          info.features || [],

        blocks:
          info.blocks || [],

        items:
          info.items || [],

        mobs:
          info.mobs || [],

        biomes:
          info.biomes || [],

        structures:
          info.structures || [],

        patches:
          info.patches || [],

        image:
          info.image ||
          `/images/bedrock/${id}.webp`,

        accent:
          info.accent ||
          "default"
      };

    });


fs.writeFileSync(
  OUTPUT_PATH,
  JSON.stringify(
    versions,
    null,
    2
  ),
  "utf8"
);


console.log(
  `Создано ${versions.length} Bedrock версий.`
);