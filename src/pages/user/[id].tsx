import { useRouter } from "next/router"
export default function UserData() {
    const router = useRouter()
    const userdata = router.query.id

    const handleClick = () => {
        router.push('/')
    }
    return (
        <div onClick={handleClick}>
            welcome to {userdata} page
        </div>
    )
}