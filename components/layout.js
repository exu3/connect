import HeadObject from './head'
import Footer from './footer'
import Nav from './nav'

const Layout = (props) => {
    return (
            <div className="dark:text-white dark:bg-black">
                <HeadObject />
                <Nav/>
                <div className="">
                    {props.children} {/* without props, it renders an empty div */}
                </div>
                <Footer />
            </div>
    )
}

export default Layout