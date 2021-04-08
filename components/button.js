import Link from "next/link";

export default function Button({ buttonText, buttonDestination }) {
  return (
    <div>
      <Link href={buttonDestination}>
        <div className="mx-auto mt-3 font-montserrat border cursor-pointer border-gray-200 font-medium bg-gradient-to-r from-blue-300 to-purple-400 text-center rounded-full px-5 py-1 text-md w-48 shadow-lg">
          <div className="justify-center">{buttonText}</div>
        </div>
      </Link>
    </div>
  );
}
