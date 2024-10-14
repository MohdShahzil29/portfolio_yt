import { SiJquery, SiWordpress, SiSpotify, SiLess, SiSass } from 'react-icons/si';

const TechIcons = () => {
  return (
    <div className="flex justify-around items-center bg-gray-50 mt-[7rem]">
      <SiJquery className="text-gray-400 text-6xl" />
      <SiWordpress className="text-gray-400 text-6xl" />
      <SiLess className="text-gray-400 text-6xl" />
      <SiSass className="text-gray-400 text-6xl" />
      <SiSpotify className="text-gray-400 text-6xl" />
    </div>
  );
};

export default TechIcons;
