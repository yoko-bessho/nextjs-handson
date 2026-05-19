import Link from "next/link";

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
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link href={`/blog${post.id}`}>{ post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
