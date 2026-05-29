import HeavyButton from "../component/heavyButton";
import RenderedTime from "./RenderdTime";
import Image from "next/image";

interface Post {
    id: number;
    title: string;
    body: string;
}

export async function generateStaticParams() {
    const posts: Post[] = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
    ).then((res) => res.json());

    return posts.map((post) => ({
        id: post.id.toString(),
    }));
}

async function getPost(id: string) {
    const res = await fetch(
        //urlのidが動的にパラメータとしてコンポーネントに渡される
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
            next: { revalidate: 60 },
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch post");
    }

    return res.json();
}

export default async function PostDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const post: Post = await getPost(id);

    const renderedAt = new Date().toLocaleTimeString();//現在の時刻を取得(サーバーとクライアントで値が異なる)

    return (
        <div>
            <Image
                src={`https://picsum.photos/seed/${id}/800/400?blur=3`}
                alt="Profile Picture"
                width={800}
                height={400}
                priority
            />
            <HeavyButton />
            <RenderedTime />
            <p>サーバーでのRendered at: {renderedAt}</p>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
