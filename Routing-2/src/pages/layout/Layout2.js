import { Fragment } from "react"
import Header from "../../components/header/Header"
import { Outlet } from "react-router-dom"

const Layout2 = () => {
    return (
        <Fragment>
            <Header></Header>
            <Outlet/>
        </Fragment>
    )
}
export default Layout2;