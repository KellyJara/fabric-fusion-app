import ButtonComponent from "./button";

export default async function Users() {
    console.log("Hey is this in the server or client");

     const res = await fetch("https://jsonplaceholder.typicode.com/users");
     const users = await res.json();
     console.log(users);

    return(
        <div>
            {" "}
            <h1>User List</h1>
            <ul>
                {users.map((user: {id: number; email: string})=>(
                  <li key={user.id}>
                    <h3>{user.id}</h3>
                    <h3>{user.email}</h3>
                  </li>
                ))}
            </ul> {" "}
      
        </div>
    )
}