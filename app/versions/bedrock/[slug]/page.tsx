import { notFound } from "next/navigation";

import {
  bedrockVersions
} from "@/lib/content";

import VersionBanner from "@/components/VersionBanner/VersionBanner";


export function generateStaticParams(){

  return bedrockVersions.map(v=>({

    slug:v.slug

  }));

}



export default async function Page({

 params

}:{

 params:Promise<{slug:string}>

}){


 const {
  slug
 } = await params;



 const v =
  bedrockVersions.find(
    x=>x.slug===slug
  );



 if(!v)
  notFound();



 return (

  <main>


   <article className="detail-hero">


    <h1>
     {v.name}
    </h1>


    <p>
     {v.summary}
    </p>



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



   </section>


  </main>

 );

}