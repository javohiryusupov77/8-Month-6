import Notfound from "@/app/componsnts/Notfound/notfound"; 

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-800 pulse">404</h1>
        <p className="text-2xl text-red-600 mt-4 shake">Page Not Found</p>

        <p className="text-gray-800 mt-2">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Notfound time={5} />
      </div>
    </div>
  );
};

export default NotFound;
