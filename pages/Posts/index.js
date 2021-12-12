import Link from "next/link";
function Blog({ posts }) {
  return (
    <>
      <h1>Posts</h1>

      {posts.map((post) => (
        <Link href={`Posts/${post.id}`} key={post.id}>
          <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
