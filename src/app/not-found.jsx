import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100 text-black/70 px-4">
      <div className="text-center max-w-lg bg-white p-10 rounded-2xl shadow-2xl">

        {/* 404 text shadow effect */}
        <h1 className="text-8xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          404
        </h1>

        <p className="mt-4 text-2xl font-semibold drop-shadow-sm">
          Lost in space
        </p>

        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition text-white shadow-md"
          >
            Go Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;