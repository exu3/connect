import Head from 'next/head'

export default function HeadObject({children}) {
<<<<<<< HEAD
    const title = "Command Connect";
    const description = "Command Connect is a mentorship program by Command Tech.";
    const keywords = "STEM, coding, mentorship, women in stem";
    const author = "Command Tech";
    const twitter = "@commandtech";
=======
    const title = "The Perfect Next.js Theme";
    const description = "This is the perfect Next.js theme that you should use instead of create-next-app.";
    const keywords = "put some fun keywords here";
    const author = "Sarthak Mohanty";
    const twitter = "@sarthaktexas";
>>>>>>> 7d8e11dc1a89c007ca6ed846cc829e46cd881115
    //const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
<<<<<<< HEAD
            <meta property="og:url" content="https://connect.commandtech.codes" /> {/* This is where you put the domain */}
=======
            <meta property="og:url" content="put it in this quotes" /> {/* This is where you put the domain */}
>>>>>>> 7d8e11dc1a89c007ca6ed846cc829e46cd881115
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {/* Add analytics here */}
            {children}
        </Head>
    )
}