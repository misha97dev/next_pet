import Link from "next/link";
import CreatePostForm from "./createPostForm";

async function getPosts() {
  // const res = await fetch(`http://localhost:3000/api/get-posts`);
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-posts`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  const data: {
    id: number;
    title: string;
    content?: string;
    published: boolean;
  }[] = await getPosts();

  return (
    <main className="min-h-screen p-24">
      <Link
        className="bg-white px-4 py-2 text-black font-bold rounded-md"
        href={"/dashboard"}
      >
        dashboard
      </Link>

      <CreatePostForm />
      <div>
        {data &&
          data.map((post) => (
            <div key={post.id}>
              <h2 className="py-3">{post.title}</h2> <p>{post.content}</p>
            </div>
          ))}
      </div>
    </main>
  );
}
