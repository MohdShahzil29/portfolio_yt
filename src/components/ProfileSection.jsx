import { useState } from 'react';
import model from '../assets/model2.png'

// Main component
const ProfileSection = () => {
  const [activeTab, setActiveTab] = useState('skills');

  // Tab content logic
  const renderContent = () => {
    switch (activeTab) {
      case 'skills':
        return (
          <>
            <p className="text-lg font-semibold">User Experience Design - UI/UX</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-10/12"></div>
            </div>

            <p className="text-lg font-semibold">Web & User Interface Design - Development</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-9/12"></div>
            </div>

            <p className="text-lg font-semibold">Interaction Design - Animation</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-7/12"></div>
            </div>
          </>
        );
      case 'awards':
        return (
          <>
            <p className="text-lg font-semibold">Best UI/UX Designer of the Year</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-11/12"></div>
            </div>

            <p className="text-lg font-semibold">Top 10 Product Designers Worldwide</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-9/12"></div>
            </div>

            <p className="text-lg font-semibold">Award for Excellence in Animation Design</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-8/12"></div>
            </div>
          </>
        );
      case 'education':
        return (
          <>
            <p className="text-lg font-semibold">Bachelor of Arts in Graphic Design</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-9/12"></div>
            </div>

            <p className="text-lg font-semibold">Certified User Experience Designer</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-10/12"></div>
            </div>

            <p className="text-lg font-semibold">Diploma in Animation and Multimedia</p>
            <div className="w-full bg-gray-300 rounded-full h-2 mb-4">
              <div className="bg-blue-500 h-2 rounded-full w-7/12"></div>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-around py-10 px-4 lg:px-20 bg-white">
      {/* Profile Image */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
        <img
          src={model}
          alt="Profile"
          className="rounded-full w-[27rem] h-[26rem] object-cover"
        />
      </div>

      {/* About Section */}
      <div className="w-full lg:w-[50.666667%] text-center lg:text-left mt-10 lg:mt-0">
        <h3 className="text-sm uppercase tracking-wide text-blue-500">About Me</h3>
        <h1 className="text-4xl font-bold text-gray-800 mt-2">
          20 Year's Experience <br />
          on <span className="text-blue-500">Product Design</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Hello there! I'm <span className="font-semibold">Robert Junior</span>. I specialize in web design
          and development, and I'm deeply passionate and committed to my craft. With <span className="font-semibold">20 years</span> of experience as a professional graphic designer.
        </p>

        {/* Tab buttons */}
        <div className="flex justify-center lg:justify-start mt-8">
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-4 py-2 rounded-full mx-2 ${activeTab === 'skills' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
          >
            Main Skills
          </button>
          <button
            onClick={() => setActiveTab('awards')}
            className={`px-4 py-2 rounded-full mx-2 ${activeTab === 'awards' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
          >
            Awards
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 rounded-full mx-2 ${activeTab === 'education' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'}`}
          >
            Education
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-10">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
