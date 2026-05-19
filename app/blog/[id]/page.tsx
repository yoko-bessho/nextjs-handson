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

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
}
