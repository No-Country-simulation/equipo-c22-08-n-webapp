

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-dark">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray">404</h1>
        <p className="text-2xl text-gray mt-4">Page Not Found</p>
        <p className="text-gray-500 mt-2">Sorry, the page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-secondary
                 text-white-2 font-semibold rounded-md shadow-md hover:bg-primary">
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;