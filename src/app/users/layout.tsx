import { Children } from "react"

export default function UserLayout({
    children,
}: {
    children: React.ReactNode
}){
    return (
    <div>
        {" "}
        <h1 style={{color: "red"}}> This is a User Router</h1>
        {children}
        </div>
    );
}