import { notFound } from "next/navigation";


async function fetchUser(id:string){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!res.ok){
        return null;
    }
    const user = await res.json();
    return user;
}


export default async function UserPage({
    params,
}:{
    params: Promise<{userId: string}>;
}) {
    const {userId} = await params;
    const user = await fetchUser(userId);
    
    if (!user){
        notFound();
    }
    return(
        <div>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong>{user.email}</p>
            <p><strong>Phone:</strong>{user.phone}</p>

        </div>
    )
}

/*original basic code: equivalent to structre params in js.
export default asunc function UserPage({
 params,
}: {
params: Promise<{ userId: string }>;
}) {
const {userId } = await params;
return <div>{userId}</div>
}*/