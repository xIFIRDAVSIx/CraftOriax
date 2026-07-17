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

  return allVersions.map(v => ({
    slug: v.slug
  }));

}



export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {

  const {
    slug
  } = await params;


  const v =
    allVersions.find(
      x => x.slug === slug
    );


  return {

    title:
      v?.name ?? "Версия",

    description:
      v?.summary

  };

}



export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {


  const {
    slug
  } = await params;


  const v =
    allVersions.find(
      x => x.slug === slug
    );



  if (!v)
    notFound();



  return (

    <main>


      <article className="detail-hero">


        <div className="breadcrumbs">

          <Link href="/versions">
            Версии
          </Link>


          <span>
            /
          </span>


          <span>
            {v.name}
          </span>


        </div>



        <div className="detail-heading">

          <span className="eyebrow">

            {v.edition} Edition

          </span>


          <h1>
            {v.name}
          </h1>


          <p>
            {v.summary}
          </p>


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

          {v.blocks.map(x => (
            <span key={x}>
              {x}
            </span>
          ))}

        </div>


      </section>


    </main>

  );

}