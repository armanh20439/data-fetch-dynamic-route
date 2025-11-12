import Link from "next/link"

export default async function page(){
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json()
    return(<>
        <h1 className="bg-amber-600 text-2xl text-center text-amber-50 my-6">All Blogs are Here</h1>
        <ul className="grid gap-2 grid-cols-3 ">
            {posts.map((post:any)=>(
                <li className="py-5 border-2" key={post.id}>
                    {post.title} -{post.id}
                </li>
            ))}
        </ul>
        <div className="flex justify-center items-center">
            <Link href="/" className="bg-orange-500 border-2 text-2xl rounded-2xl text-amber-50 p-2  hover:underline">Home</Link>
        </div>
        </>
    )
}