import React from "react";

const MainContent = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center p-4">
      <h1 className="my-8 text-4xl md:text-6xl w-full md:w-[500px]">
        Become a better business with us
      </h1>
      <p className="mb-4 w-full md:w-[450px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
        tortor, ultricies ut justo eu
      </p>
      <button className="btn btn-outline btn-secondary mb-8">
        Our business
      </button>
      <div className="w-full">
        <img
          src="/imageofbg.svg"
          alt="background"
          className="w-full h-auto"
        />
      </div>
      <h1 className="my-8 text-2xl md:text-4xl w-full md:w-[600px]">
        Here is whats happening in the world of talk business
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-around mb-8 w-full">
        <div className="flex flex-col items-center justify-start mb-4 md:mb-0">
          <p className="text-indigo-500">MAY 2021</p>
          <h4 className="w-full text-center md:text-left md:w-[200px]">
            Agile focused business services and more
          </h4>
        </div>
        <img
          className="w-full md:w-auto md:h-[300px]"
          src="image1.svg"
          alt="image"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around mb-8 w-full">
        <div className="flex flex-col items-center justify-start mb-4 md:mb-0">
          <p className="text-indigo-500">JUN 2021</p>
          <h4 className="w-full text-center md:text-left md:w-[200px]">
            Agile focused business services and more
          </h4>
        </div>
        <img
          className="w-full md:w-auto md:h-[300px]"
          src="image2.svg"
          alt="image"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around mb-8 w-full">
        <div className="flex flex-col items-center justify-start mb-4 md:mb-0">
          <p className="text-indigo-500">JUL 2021</p>
          <h4 className="w-full text-center md:text-left md:w-[200px]">
            Agile focused business services and more
          </h4>
        </div>
        <img
          className="w-full md:w-auto md:h-[300px]"
          src="image3.svg"
          alt="image"
        />
      </div>
    </main>
  );
};

export default MainContent;
