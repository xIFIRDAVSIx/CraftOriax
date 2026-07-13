import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
export default function NotFound(){return <main className="search-page"><span className="eyebrow">Ошибка 404</span><h1>ЧАНК НЕ<br/>ЗАГРУЖЕН</h1><p>Кажется, эта страница затерялась где-то за границей мира.</p><Link className="button primary" href="/"><ArrowLeft/> Вернуться на базу</Link></main>}
