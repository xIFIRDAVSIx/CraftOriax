import Link from "next/link";
import { notFound } from "next/navigation";

import {
  versions
} from "@/lib/content";

import VersionBanner from "@/components/VersionBanner/VersionBanner";


export function generateStaticParams(){

  return versions.map(v => ({
    slug: v.slug
  }));

}



export default async function Page({
  params
}: {
  params: Promise<{slug:string}>
}){


  const {
    slug
  } = await params;



  const v =
    versions.find(
      x => x.slug === slug
    );



  if(!v)
    notFound();



  return (

    <main>


      <article className="detail-hero">


        <div className="breadcrumbs">

          <Link href="/versions/java">
            Java версии
          </Link>

          <span>
            /
          </span>

          <span>
            {v.name}
          </span>

        </div>



        <div className="detail-heading">

          <h1>
            {v.name}
          </h1>


          <p>
            {v.summary}
          </p>


        </div>



        <VersionBanner
          version={v.id}
          mode="page"
        />


      </article>



      <section className="detail-body">


        <h2>
          ГЛАВНЫЕ ИЗМЕНЕНИЯ
        </h2>


        <p>
          {v.features.join(" · ")}
        </p>


        <h2>
          БЛОКИ
        </h2>


        <div className="tag-row">

          {v.blocks.map(x =>
            <span key={x}>
              {x}
            </span>
          )}

        </div>


      </section>


    </main>

  );

}