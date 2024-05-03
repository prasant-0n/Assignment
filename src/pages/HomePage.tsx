import React from 'react';
import Form from '../components/formSection/Form';
import Editor from '../utils/Editor'
const HomePage: React.FC = () => {
  return (
    <div className=" m-10 flex flex-col lg:flex-row shadow-2xl"
    // style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}
    >
      {/* Left side - Form component */}
      <div className="lg:w-1/2">
        <Form />
      </div>
      {/* Right side - Text container */}
      <div className="flex items-center justify-center p-4 md:p-12">
      <div
        className="p-6 md:p-16 mx-auto w-[600px] h-full bg-white shadow-2xl rounded-lg"
        style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.6)' }}
      >
        {/* <div className="mx-auto w-full max-w-[500px] bg-white">
          
        </div> */}
          
            <Editor />
        </div>
      </div>
    </div>
  
  );
};

export default HomePage;
