import Link from 'next/link'
import { ArrowUpRight, Heart } from 'lucide-react'
import type { Article, MobSummary, Version } from '@/lib/content'
import VersionBanner from "@/components/VersionBanner/VersionBanner";
import { getMobIcon } from '@/components/MobBanner/mobIcons';


export function VersionCard({
  version,
  featured = false,
}: {
  version: Version;
  featured?: boolean;
}) {
  return (
    <Link
      className={`content-card version-card ${featured ? "featured" : ""}`}
      href={`/versions/${version.slug}`}
    >

      <div className="card-image">

        <VersionBanner
          version={version.id}
          edition={version.edition as "Java" | "Bedrock"}
          mode={featured ? "featured" : "card"}
        />

        <span className="edition-badge">
          {version.edition}
        </span>

      </div>


      <div className="card-body">

        <div className="card-meta">

          <span>
            {version.date || version.releaseDate}
          </span>

          <ArrowUpRight size={18} />

        </div>


        <h3>
          {version.name}
        </h3>


        <p>
          {version.summary}
        </p>


        <div className="tag-row">

          {version.features
            .slice(0, 3)
            .map((feature) => (

              <span key={feature}>
                {feature}
              </span>

            ))}

        </div>

      </div>

    </Link>
  );
}



export function MobCard({
  mob
}: {
  mob: MobSummary
}) {

  const Icon = getMobIcon(mob.banner)

  return (

    <Link
      className="content-card mob-card"
      href={`/mobs/${mob.slug}`}
    >

      <div className="card-image mob-card-image">

        <div className="mob-card-icon">
          <Icon size={180} />
        </div>

        <span className="edition-badge">
          {mob.category}
        </span>

      </div>


      <div className="card-body">

        <div className="card-meta">

          <span className="stat">
            <Heart size={15} />
            {mob.health} HP
          </span>

          <span className="stat">
            {mob.editions.join(' • ')}
          </span>

        </div>


        <h3>
          {mob.name}
        </h3>

      </div>

    </Link>

  );
}



export function ArticleCard({
  article,
  index
}: {
  article: Article;
  index?: number;
}) {

  return (

    <Link
      className="article-card"
      href={`/${article.type === 'guide' ? 'guides' : 'news'}/${article.slug}`}
    >

      <span className="article-number">
        {String(index ?? 1).padStart(2, '0')}
      </span>


      <div className="article-copy">

        <span className="eyebrow">
          {article.category} · {article.readTime}
        </span>


        <h3>
          {article.title}
        </h3>


        <p>
          {article.description}
        </p>


      </div>


      <ArrowUpRight aria-hidden="true" />

    </Link>

  );
}