import Link from "next/link";
import { HydrationTest } from "./blog/component/hydration";
import { HydrationTest2 } from "./blog/component/hydration";


export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Next.js HandsOn Blog</h1>
      {/* layoutで定義したfont */}
      <p className="font-mono">指定したfont</p>
      <HydrationTest />
      <HydrationTest2 />
      <nav className="space-y-4">
        <Link
          href="/blog"
        className="block p-4  bg-green-900 text-white rounded-lg hover:bg-green-800">Blog →</Link>
      </nav>
     </main>
   )
 }