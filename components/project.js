import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CgClose } from "react-icons/cg";

export default function Project({
  owner,
  title,
  type,
  thumbnail,
  profileIcon,
  award,
  description,
  handleKeyDown,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div
        className="py-4 focus:outline-none focus:border-gray-100"
        role="button"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onClick={() => setShowModal(true)}
      >
        <div className="flex flex-col text-center">
          <h2 className="font-montserrat font-bold text-2xl">{title}</h2>

          <p className="font-openSans text-base">
            {owner} • {type}
          </p>
        </div>
        <div className="rounded-3xl h-52 w-3/4 overflow-hidden border-4 border-purple-300 dark:border-blue-400 mx-auto">
          <img src={thumbnail} alt="featured project" />
        </div>
      </div>
      {showModal ? (
        <AnimatePresence>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="transition duration-700 ease-in-out border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-500 outline-none focus:outline-none overflow-y-auto max-h-96 md:max-h-screen">
                {/* Modal header */}
                <div className="flex flex-col justify-center w-full pt-12 pb-5 px-5 space-y-3 rounded-t-lg">
                  <div className="flex items-center justify-end">
                    <button
                      className="text-gray-600 dark:text-white font-sans font-bold uppercase outline-none focus:outline-none ml-4"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      <CgClose size={30} />
                    </button>
                  </div>

                  <div className="flex flex-col space-y-3 px-4">
                    <h3 className="text-4xl font-bold">{title}</h3>

                    <p className="text-xl">
                      {owner} • {type}
                    </p>
                  </div>
                </div>
                <div className="px-8">
                  <p className="my-4 text-lg">{description}</p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 bg-black" />
        </AnimatePresence>
      ) : null}
    </div>
  );
}
