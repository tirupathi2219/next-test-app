import Goback from "@/components/Goback";
import Link from "next/link";

export default function UserInfo() {
    const data = ['user1', 'user2', 'user3', 'user4']
    return (
        <>
          {data.map((item) => {
            return <h3><Link href={`/user/${item}`}>{item}</Link></h3>
          })}
          <div><Goback/></div>
        </>
    )
}
