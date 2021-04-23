import FinalProjects from "../projects/projects.json";
import Project from "../components/project";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function Gallery() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <section>
        <h1>Projects</h1>
      </section>
      <main>
        <div className="mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {FinalProjects.map(
            ({
              projectTitle,
              studentName,
              projectType,
              coverImage,
              projectDescription,
            }) => (
              <Project
                owner={studentName}
                title={projectTitle}
                type={projectType}
                description={projectDescription}
                thumbnail={
                  coverImage ?? encodeURI(`https://og-image.vercel.app/.png`)
                }
              />
            )
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
