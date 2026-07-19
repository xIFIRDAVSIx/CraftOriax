const fs = require('fs');
const path = require('path');

const MOBS_DIR = path.join(__dirname, '../data/mobs');
const OUTPUT = path.join(__dirname, '../data/mobs.json');

const files = fs
  .readdirSync(MOBS_DIR)
  .filter((file) => file.endsWith('.json'));

const mobs = [];

for (const file of files) {
  const mob = JSON.parse(
    fs.readFileSync(path.join(MOBS_DIR, file), 'utf8')
  );

  mobs.push({
    slug: mob.slug,
    name: mob.name,
    summary: mob.summary,
    category: mob.category,
    health: mob.health,
    banner: mob.banner ?? 'default',
    editions: mob.editions ?? ['Java', 'Bedrock']
  });
}

mobs.sort((a, b) => a.name.localeCompare(b.name, 'ru'));

fs.writeFileSync(
  OUTPUT,
  JSON.stringify(mobs, null, 2),
  'utf8'
);

console.log(`✅ Создано ${mobs.length} мобов.`);