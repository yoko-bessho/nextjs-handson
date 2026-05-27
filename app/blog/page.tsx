import Link from "next/link"
import Image from "next/image";
import profilePic from "../../public/file.svg"; // ローカル画像のインポート
interface Post {
    id: number;
    title: string;
}

async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Failed to fetch posts");
    }

    return res.json();
}

export default async function BlogPage() {
    const posts: Post[] = await getPosts();

    return (
        <div>
            <h1>取得したBlog</h1>
            {/* ローカル画像 */}
            <Image
                src={profilePic}
                alt="Profile Picture"
                width={100} //サイズを必須とすることで、画像のスペースが確保され、レイアウトシフトを防止
                height={100}
                placeholder="blur" //画像が読み込まれる前にぼかし効果を表示する
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==
"
                //Base64エンコードされた小さなぼかし画像を指定することで、画像が読み込まれる前に表示されるぼかし効果の品質を向上させることができます
            />

            <Image
                src="https://placehold.jp/3d4070/ffffff/150x150.png?text=%E5%A4%96%E9%83%A8%E3%81%AE%0A%E7%94%BB%E5%83%8F/"
                alt="External Image"
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==
"
            />
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link
                            href={`/blog/${post.id}`}
                            className="hover:text-blue-500"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
