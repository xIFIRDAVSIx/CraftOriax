import type { Metadata } from "next";

import { CatalogGrid } from "@/components/catalog-grid";
import { versions } from "@/lib/content";


export const metadata: Metadata = {

  title:
    "Minecraft Java Edition версии"

};



export default function Page(){

  return (

    <main>


      <header className="page-hero">

        <span className="eyebrow">
          Java Edition
        </span>


        <h1>
          ВЕРСИИ JAVA
        </h1>


      </header>



      <section className="catalog">

        <CatalogGrid

          items={versions}

          type="versions"

        />

      </section>


    </main>

  );

}