import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Command Connect";
  const description =
    "Command Connect is a virtual STEM mentorship program hosted by Command Tech to help link female & non-binary individuals who are interested in technology with experienced professionals in engineering, robotics, AI, and more.";
  const keywords = "STEM, coding, mentorship, women in stem";
  const author = "Command Tech";
  const twitter = "@commandtech";
  const image = "/ogimage.png";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="https://connect.commandtech.codes" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {/* Add analytics here */}
      {children}
    </Head>
  );
}
