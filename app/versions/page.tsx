import BackButton from "@/components/buttons/buttonBack";
import InfoButton from "@/components/buttons/info-button";
import { CatalogGrid } from "@/components/catalog-grid";
import {
  versions,
  bedrockVersions
} from "@/lib/content";


export default function Page(){

  const allVersions = [
    ...versions,
    ...bedrockVersions
  ];


  return (

    <main>

      <header className="page-hero">

        <span className="eyebrow">
          Хронология игры
        </span>

        <h1>
          ВЕРСИИ MINECRAFT
        </h1>

        <p>
          Java и Bedrock Edition
        </p>

      </header>


      <section className="catalog">

        <CatalogGrid
          items={allVersions}
          type="versions"
        />

      </section>

    </main>

  );

}