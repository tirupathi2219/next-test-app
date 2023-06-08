
import Router from 'next/router'
export default function Goback() {
    return (
        <div><button onClick={()=> Router.back()}>prev</button></div>
    )
}