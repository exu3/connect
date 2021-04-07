import { useEffect } from "react";
import Link from "next/link";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import { BsChevronCompactDown } from "react-icons/bs";
import Footer from "../components/footer";
import Button from "../components/button";
import Step from "../components/step";
import Testimonial from "../components/testimonial";

export default function Home() {
  useEffect(() => {
    console.log("Ella was here. https://ela.now.sh");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="">
        <section>
          <div className="text-center">
            <p className="text-gray-400 text-xl font-montserrat font-semibold">
              command tech presents
            </p>
            <h1 className="text-5xl font-extrabold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#C67DFF] to-[#497CFF] text-shadow-lg dark:text-shadow-white">
              Command Connect
            </h1>
            <h3 className="text-lg md:text-xl font-openSans mt-2 md:w-4/5 mx-auto px-5">
              A virtual mentorship program for female and non-binary students
              interested in STEM.
            </h3>
            <Button buttonDestination="/about" buttonText="Learn more" />
            <Link href="#about">
              <BsChevronCompactDown
                size={50}
                color="gray"
                className="mx-auto mt-5"
              />
            </Link>
          </div>
        </section>
        <img
          src="https://cloud-7l2evhbes-hack-club-bot.vercel.app/0saly-1.png"
          alt="woman on rocket"
          className="hidden md:flex absolute md:-ml-32 md:z-0"
        />
        <section id="about" className="mt-5 z-50 relative">
          <h2 className="text-center font-bold">our mission</h2>
          <div className="text-xl text-center mx-4 md:mx-40 lg:mx-72">
            Statistics show that female and non-binary individuals are still
            widely underrepresented in vast fields of technology. Here at
            Command Tech, our mission is to improve those inequities through the
            application of intersectional mentorship.{" "}
          </div>
        </section>
        <section className="mt-28">
          <h2 className="text-center font-bold mb-8" id="steps">
            how it works
          </h2>
          <div className="mx-24 md:mx-40 lg:justify-center flex flex-col justify-center">
            <Step
              icon="https://cloud-kpbkrdp6v-hack-club-bot.vercel.app/0saly-26_1.png"
              action="read the guidelines"
            />
            <Step
              icon="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
              action="apply for the program"
            />
            <Step
              icon="https://cloud-lbhrtik23-hack-club-bot.vercel.app/0doodle-2_1.png"
              action="get connected"
            />
          </div>
        </section>
        <img
          src="https://cloud-1dbtgci6g-hack-club-bot.vercel.app/0wheeeeeeeeeeeeee.png"
          className="hidden md:flex w-72 absolute right-20 -bottom-48"
          alt="woman looking at phone"
        />
        <section className="mt-24" id="testimonials">
          <h2 className="text-center font-bold">testimonials</h2>
          <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
            <Testimonial
              quote="This was kewl lorem ipusm blah blah blah. i loved this mentorship program a lot yeet. yeet, yote."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Blob Ross"
              role="Mentor"
            />
            <Testimonial
              quote="This was kewl lorem ipusm blah blah blah. i loved this mentorship program a lot yeet. yeet, yote."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Blob Ross"
              role="Mentor"
            />
            <Testimonial
              quote="This was kewl lorem ipusm blah blah blah. i loved this mentorship program a lot yeet. yeet, yote."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Blob Ross"
              role="Student"
            />
            <Testimonial
              quote="This was kewl lorem ipusm blah blah blah. i loved this mentorship program a lot yeet. yeet, yote."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Blob Ross"
              role="Mentor"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
