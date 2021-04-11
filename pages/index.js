import { useEffect } from "react";
import HeadObject from "../components/head";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Button from "../components/button";
import Step from "../components/step";
import Testimonial from "../components/testimonial";
import { BsChevronCompactDown } from "react-icons/bs";

export default function Home() {
  useEffect(() => {
    console.log("Ella was here. https://ela.now.sh");
  });

  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject />
      <Nav />
      <main className="">
        <section className="mt-10">
          <div className="text-center">
            <p className="text-gray-400 text-xl font-montserrat font-semibold -mb-4">
              command tech presents
            </p>
            <h1 className="text-5xl font-extrabold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 text-shadow-sm dark:text-shadow-white">
              Command Connect
            </h1>
            <h3 className="text-lg md:text-xl font-openSans mt-2 md:w-4/5 mx-auto px-5">
              A virtual mentorship program for female and non-binary students
              interested in STEM.
            </h3>
            <div className="flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0 mt-4 align-baseline justify-center">
              <a href="https://airtable.com/shrwy0K0B2RlxFcbv">
                <button className="bg-purple-400 text-white font-semibold font-openSans text-lg p-1.5 px-4 rounded-xl">
                  Become a mentor
                </button>
              </a>
              <a href="https://airtable.com/shrbgQXx5nk6EziCW">
                <button className="border-2 border-purple-400 text-purple-400 font-openSans font-semibold text-lg p-1 px-4 rounded-xl">
                  Apply for mentorship
                </button>
              </a>
            </div>

            <div className="animate-bounce">
              <BsChevronCompactDown
                size={50}
                color="gray"
                className="mx-auto mt-5"
              />
              <BsChevronCompactDown
                size={50}
                color="gray"
                className="mx-auto -mt-10"
              />
              <BsChevronCompactDown
                size={50}
                color="gray"
                className="mx-auto -mt-10"
              />
            </div>
          </div>
        </section>
        <img
          src="https://cloud-7l2evhbes-hack-club-bot.vercel.app/0saly-1.png"
          alt="woman on rocket"
          className="hidden md:flex absolute md:-ml-32 md:z-0"
        />
        <section id="about" className="mt-20 z-50 relative">
          <h2 className="text-center font-bold">our mission</h2>
          <div className="text-xl text-center mx-4 md:mx-40 lg:mx-72">
            Statistics show that female and non-binary individuals are still
            widely underrepresented in vast fields of technology. Here at
            Command Tech, our mission is to improve those inequities through the
            application of intersectional mentorship.
          </div>
        </section>
        <section className="mt-28">
          <h2 className="text-center font-bold mb-8 relative z-20" id="steps">
            how it works
          </h2>
          <ul className="mx-24 md:mx-40 inline-block justify-center w-full list-none m-auto">
            <li>
              <Step
                icon="https://cloud-kpbkrdp6v-hack-club-bot.vercel.app/0saly-26_1.png"
                action="read the guidelines"
              />
            </li>
            <li>
              <Step
                icon="https://cloud-awro5n7df-hack-club-bot.vercel.app/0saly-28_1_.png"
                action="apply for the program"
              />
            </li>
            <li>
              <Step
                icon="https://cloud-lbhrtik23-hack-club-bot.vercel.app/0doodle-2_1.png"
                action="get connected"
              />
            </li>
          </ul>
          <div className="flex flex-col space-y-5 md:flex-row md:space-x-6 md:space-y-0 md:mx-auto justify-center">
            <Button buttonDestination="/about" buttonText="Learn more" />
          </div>
        </section>
        <img
          src="https://cloud-1dbtgci6g-hack-club-bot.vercel.app/0wheeeeeeeeeeeeee.png"
          className="hidden md:flex w-72 absolute right-20 -bottom-48 z-0"
          alt="woman looking at phone"
        />
        <section className="mt-24" id="testimonials">
          <h2 className="text-center font-bold leading-loose">testimonials</h2>
          <div className="grid grid-cols-1 mx-10 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
            <Testimonial
              quote="Command Connect is an amazing opportunity to talk to women in STEM and receive guidance."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Hana Gabrielle Bidon"
              role="Mentor"
            />
            <Testimonial
              quote="Command Tech is a truly amazing program! This is my third cycle and I've been paired up with the most enthusiastic, personable mentees and enjoyed every cycle of networking, events, and projects. Looking forward to staying involved with this org as long as possible."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="Ruqaiyah Angeles"
              role="Mentor"
            />
            <Testimonial
              quote="My experience with Command Connect was very insightful, and I learned a lot from my mentor."
              profileIcon="https://source.unsplash.com/random/100x100"
              name="AA"
              role="Mentee"
            />
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-center font-bold">questions?</h2>
          <div>
            <form
              method="POST"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScI-GcaYO_ONUgyBPqNQYM5WMdsZe20vT6OQde_RUNT6TWV2w/formResponse"
              className="flex flex-col mx-10 sm:mx-36 justify-center font-openSans space-y-4"
            >
              <label for="name">Name</label>
              <input
                className="border border-blue-300 dark:text-black focus:border-purple-700 shadow-sm focus:shadow-lg rounded-md p-1"
                type="text"
                id="name"
                name="entry.671305822"
              />
              <label for="email">Email</label>
              <input
                required
                className="border border-blue-300 dark:text-black focus:border-purple-700 shadow-sm focus:shadow-lg rounded-md p-1"
                type="email"
                id="email"
                name="entry.1199514761"
              />
              <label for="message">Message</label>
              <textarea
                className="border border-blue-300 focus:border-purple-700 dark:text-black shadow-sm focus:shadow-lg rounded-md p-1"
                rows="5"
                name="entry.1208007492"
              />
              <button
                className="bg-purple-300 shadow-xl dark:bg-purple-600 hover:bg-purple-700 hover:text-white rounded-md max-w-min p-2"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
