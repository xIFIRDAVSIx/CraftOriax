import type { Metadata } from "next";

import { CatalogGrid } from "@/components/catalog-grid";
import { bedrockVersions } from "@/lib/content";


export const metadata: Metadata = {

  title:
    "Minecraft Bedrock Edition версии"

};



export default function Page(){


  return (

    <main>


      <header className="page-hero">


        <span className="eyebrow">
          Bedrock Edition
        </span>


        <h1>
          ВЕРСИИ BEDROCK
        </h1>


      </header>



      <section className="catalog">


        <CatalogGrid

          items={bedrockVersions}

          type="versions"

        />


      </section>


    </main>

  );

}