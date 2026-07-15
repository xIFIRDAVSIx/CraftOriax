const fs = require("fs");

const MOJANG_URL =
  "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

const INFO_PATH = "./data/versions-info.json";

let versionsInfo = {};

if (fs.existsSync(INFO_PATH)) {
  versionsInfo = JSON.parse(
    fs.readFileSync(INFO_PATH, "utf8")
  );
}


// Берём только основные версии
function isMainRelease(id) {
  const parts = id.split(".");

  if (parts.length === 2) {
    return true;
  }

  return false;
}


// Получение информации из базы
function getVersionInfo(id) {

  // Например 1.20
  if (versionsInfo[id]) {
    return versionsInfo[id];
  }


  // Например 1.20.6 -> 1.20
  const major = id.match(/^\d+\.\d+/)?.[0];


  if (major && versionsInfo[major]) {
    return versionsInfo[major];
  }


  return {};
}


// Картинка
function getVersionImage(id, info) {

  if (info.image) {
    return info.image;
  }

  return `/images/${id}.webp`;
}



async function generateVersions() {

  console.log(
    "Получаем версии Minecraft..."
  );


  const response = await fetch(
    MOJANG_URL
  );


  const data = await response.json();



  let releases =
    data.versions.filter(
      version =>
        version.type === "release" &&
        isMainRelease(version.id)
    );



  // новые версии сверху
  releases.sort(
    (a, b) =>
      new Date(b.releaseTime) -
      new Date(a.releaseTime)
  );


  const versions =
    releases.map(version => {


      const date =
        new Date(version.releaseTime);


      const info =
        getVersionInfo(
          version.id
        );



      return {

        slug:
          `java-${version.id.replaceAll(".", "-")}`,


        id:
          version.id,


        title:
          info.title ||
          `Minecraft ${version.id}`,


        name:
          info.title ||
          `Java Edition ${version.id}`,


        edition:
          "Java",



        releaseDate:
          info.releaseDate ||
          version.releaseTime.substring(0, 10),



        date:
          date.toLocaleDateString(
            "ru-RU",
            {
              day: "numeric",
              month: "long",
              year: "numeric"
            }
          ),



        year:
          date.getFullYear(),



        codename:
          info.codename || "",



        summary:
          info.summary ||
          "Описание пока отсутствует.",



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
          getVersionImage(
            version.id,
            info
          ),



        accent:
          info.accent ||
          "default"

      };

    });



  fs.writeFileSync(
    "./data/versions.json",
    JSON.stringify(
      versions,
      null,
      2
    ),
    "utf8"
  );



  console.log(
    `Создано ${versions.length} версий.`
  );

}



generateVersions()
  .catch(console.error);