import React from "react";

function PhotoGallery() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-purple-900 text-center">
          Our Campus
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <img
            src="/images/image1.jpg"
            alt="Gallery 1"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image2.jpg"
            alt="Gallery 2"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
          <img
            src="/images/image3.jpg"
            alt="Gallery 3"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default PhotoGallery;
