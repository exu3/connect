import HeadObject from './head'
import Footer from './footer'
import Nav from './nav'

const Layout = (props) => {
    return (
            <div className="dark:text-white dark:bg-black">
                <HeadObject />
                <Nav/>
                <div className="mx-5 md:mx-28 lg:mx-56">
                    {props.children} {/* without props, it renders an empty div */}
                </div>
                <Footer />
            </div>
    )
}

export default Layout