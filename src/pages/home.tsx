import Goback from "@/components/Goback";
import Link from "next/link";

export default function Home() {
    return(
        <>
        <h2>Welcome to home </h2>
        <Goback/>
        <Link href='/user' replace>userInfo</Link>
        </>
    )
}