// import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana, redHatDisplay } from "@/ui/fonts";

export default function FsaeLiveLogo() {
  return (
    <div
      className={`${redHatDisplay.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <p className="text-4xl">
        FSAE
        <span className="text-red-500 font-bold"> Live</span>
      </p>
      <div className="w-2 h-2 -mt-10 -ml-0.5 rounded-full bg-red-500"></div>
    </div>
  );
}
