import Link from "next/link";
import { notFound } from "next/navigation";

import {
  versions,
  bedrockVersions
} from "@/lib/content";

import VersionBanner from "@/components/VersionBanner/VersionBanner";


const allVersions = [
  ...versions,
  ...bedrockVersions
];

export function generateStaticParams() {
  return allVersions.map((v) => ({
    slug: v.slug
  }));

}



export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const v = allVersions.find((x) => x.slug === slug);

  return {
    title: v?.name ?? "Версия",
    description: v?.summary
  };
}

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const v = allVersions.find((x) => x.slug === slug);

  if (!v) notFound();

  return (

    <main>

<article className="detail-hero">

  <div className="breadcrumbs">
    <Link href="/versions">Версии</Link>
    <span>/</span>
    <span>{v.name}</span>
  </div>

  <div className="detail-heading">
    <span className="eyebrow">
      {v.edition} Edition
    </span>

    <h1>{v.name}</h1>
  </div>

  <div className="detail-image">
    <VersionBanner
      version={v.id}
      edition={v.edition as "Java" | "Bedrock"}
      mode="page"
    />
  </div>

</article>

      <section className="detail-body">

        <div className="facts-grid">
          <div className="fact">
            <span>Дата выхода</span>
            <strong>{v.releaseDate}</strong>
          </div>

          {v.codename && (
            <div className="fact">
              <span>Кодовое имя</span>
              <strong>{v.codename}</strong>
            </div>
          )}

          <div className="fact">
            <span>Издание</span>
            <strong>{v.edition} Edition</strong>
          </div>
        </div>

        <p>{v.summary}</p>

        <h2>ГЛАВНЫЕ ИЗМЕНЕНИЯ</h2>

        <ul className="detail-list">
          {v.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

        {v.blocks.length > 0 && (
          <>
            <h2>НОВЫЕ БЛОКИ</h2>

            <div className="tag-row">
              {v.blocks.map((block) => (
                <span key={block}>{block}</span>
              ))}
            </div>
          </>
        )}

        {v.items.length > 0 && (
          <>
            <h2>НОВЫЕ ПРЕДМЕТЫ</h2>

            <div className="tag-row">
              {v.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </>
        )}

        {v.mobs.length > 0 && (
          <>
            <h2>НОВЫЕ МОБЫ</h2>

            <div className="tag-row">
              {v.mobs.map((mob) => (
                <span key={mob}>{mob}</span>
              ))}
            </div>
          </>
        )}

        {v.biomes.length > 0 && (
          <>
            <h2>НОВЫЕ БИОМЫ</h2>

            <div className="tag-row">
              {v.biomes.map((biome) => (
                <span key={biome}>{biome}</span>
              ))}
            </div>
          </>
        )}

        {v.structures.length > 0 && (
          <>
            <h2>НОВЫЕ СТРУКТУРЫ</h2>

            <div className="tag-row">
              {v.structures.map((structure) => (
                <span key={structure}>{structure}</span>
              ))}
            </div>
          </>
        )}

        {v.patches.length > 0 && (
          <>
            <h2>ПАТЧИ</h2>

            <div className="patches">
              {v.patches.map((patch) => (
                <div className="patch-card" key={patch.version}>
                  <h3>{patch.version}</h3>

                  <p>{patch.releaseDate}</p>

                  <ul>
                    {patch.changes.map((change: string) => (
                      <li key={change}>{change}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}