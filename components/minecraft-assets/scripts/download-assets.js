const fs = require("fs");
const path = require("path");
const https = require("https");
const { execSync } = require("child_process");

const VERSION = "1.21.8";

const MANIFEST =
  "https://piston-meta.mojang.com/mc/game/version_manifest_v2.json";

function download(url, file) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      const stream = fs.createWriteStream(file);
      res.pipe(stream);

      stream.on("finish", () => {
        stream.close(resolve);
      });
    });
  });
}

(async () => {

  console.log("Получение списка версий...");

  const manifest = await fetch(MANIFEST).then(r => r.json());

  const version = manifest.versions.find(v => v.id === VERSION);

  const versionJson = await fetch(version.url).then(r => r.json());

  console.log("Скачивание client.jar...");

  await download(
    versionJson.downloads.client.url,
    "client.jar"
  );

  console.log("Распаковка...");

  execSync("tar -xf client.jar");

  console.log("Готово.");

})();