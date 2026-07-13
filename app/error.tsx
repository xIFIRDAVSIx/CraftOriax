'use client'
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="search-page"><span className="eyebrow">Ошибка</span><h1>МИР НЕ<br/>ОТВЕЧАЕТ</h1><p>Не удалось загрузить этот фрагмент энциклопедии.</p><button className="button primary" onClick={reset}>Попробовать снова</button></main>}
