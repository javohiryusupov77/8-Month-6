import React from "react";

const MainContent = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
      <h1 className="my-16 mb-20 text-6xl w-[500px] h-[50px] text-center">
        Become a better business with us.
      </h1>
      <p className="mb-4 w-[450px] h-[50px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam turpis
        tortor, ultricies ut justo eu.
      </p>
      <button className="btn btn-outline btn-secondary mb-16">
        Our business
      </button>
      <div>
        <img
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="background"
        />
      </div>
      <h1 className="my-16 mb-16 text-4xl w-[600px] h-[50px] text-center">
        Here is whats happening in the world of talk business.
      </h1>
      <div className="flex items-center justify-around mb-16">
        <div className=" h-[300px] flex flex-col items-center justify-start">
          <p className="text-indigo-500">MAY 2021</p>
          <h4 style={{ width: "200px" }}>
            Agile focused business services and more.
          </h4>
        </div>
        <img
          className="h-[300px]"
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div className="flex items-center justify-around mb-16">
        <div className=" h-[300px] flex flex-col items-center justify-start">
          <p className="text-indigo-500">JUN 2021</p>
          <h4 style={{ width: "200px" }}>
            Agile focused business services and more.
          </h4>
        </div>
        <img
          className="h-[300px]"
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
      <div className="flex items-center justify-around mb-16">
        <div className=" h-[300px] flex flex-col items-center justify-start">
          <p className="text-indigo-500">JUL 2021</p>
          <h4 style={{ width: "200px" }}>
            Agile focused business services and more.
          </h4>
        </div>
        <img
          className="h-[300px]"
          src="https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />
      </div>
    </main>
  );
};

export default MainContent;
