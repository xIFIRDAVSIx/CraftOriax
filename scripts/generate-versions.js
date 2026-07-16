const fs = require("fs");

const MOJANG_URL =
  "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

const INFO_PATH =
  "./data/versions-info.json";


let versionsInfo = {};


if (fs.existsSync(INFO_PATH)) {

  versionsInfo =
    JSON.parse(
      fs.readFileSync(
        INFO_PATH,
        "utf8"
      )
    );

}



// Получить основную версию
function getMainVersion(id) {

  const parts =
    id.split(".");


  // Новый формат Minecraft
  // например 26.1
  if (!id.startsWith("1.")) {

    return `${parts[0]}.${parts[1]}`;

  }


  // Старый формат
  // 1.20.6 -> 1.20
  return `${parts[0]}.${parts[1]}`;

}



// Берём только release
function isRelease(version) {

  return version.type === "release";

}



// Получение информации
function getVersionInfo(id) {


  if (versionsInfo[id]) {

    return versionsInfo[id];

  }



  const main =
    getMainVersion(id);



  if (versionsInfo[main]) {

    return versionsInfo[main];

  }
  return {};

}

// Картинка
function getVersionImage(id, info) {
  if (info.image) {
    return info.image;
  }

  return `/api/version-image/${getMainVersion(id)}`;
}

// Сортировка
function sortVersions(a, b) {


  const va =
    getMainVersion(a.id)
      .split(".")
      .map(Number);

  const vb =
    getMainVersion(b.id)
      .split(".")
      .map(Number);

  return (

    (vb[0] || 0)
    -
    (va[0] || 0)

  )
    ||
    (

      (vb[1] || 0)
      -
      (va[1] || 0)

    );
}

async function generateVersions() {


  console.log(
    "Получаем версии Minecraft..."
  );

  const response =
    await fetch(
      MOJANG_URL
    );

  const data =
    await response.json();

  let releases =
    data.versions.filter(
      isRelease
    );

  // Убираем дубликаты
  const unique = {};

  for (const version of releases) {

    const main =
      getMainVersion(
        version.id
      );

    if (

      !unique[main]

      ||

      new Date(version.releaseTime)

      >

      new Date(
        unique[main].releaseTime
      )

    ) {


      unique[main] =
        version;


    }


  }

  releases =
    Object.values(unique);



  releases.sort(
    sortVersions
  );

  const versions =
    releases.map(version => {


      const date =
        new Date(
          version.releaseTime
        );

      const info =
        getVersionInfo(
          version.id
        );

      return {


        slug:
          `java-${getMainVersion(version.id)
            .replaceAll(".", "-")}`,



        id:
          getMainVersion(
            version.id
          ),



        title:
          info.title
          ||
          `Minecraft ${getMainVersion(version.id)}`,



        name:
          info.title
          ||
          `Java Edition ${getMainVersion(version.id)}`,



        edition:
          "Java",




        releaseDate:
          info.releaseDate
          ||
          version.releaseTime.substring(
            0,
            10
          ),




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
          info.codename
          ||
          "",



        summary:
          info.summary
          ||
          "Описание пока отсутствует.",




        features:
          info.features
          ||
          [],



        blocks:
          info.blocks
          ||
          [],



        items:
          info.items
          ||
          [],



        mobs:
          info.mobs
          ||
          [],



        biomes:
          info.biomes
          ||
          [],



        structures:
          info.structures
          ||
          [],



        patches:
          info.patches
          ||
          [],



        image:
          getVersionImage(
            version.id,
            info
          ),



        accent:
          info.accent
          ||
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
  .catch(
    console.error
  );