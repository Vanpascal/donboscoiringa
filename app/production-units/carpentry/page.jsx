import React from "react";

const Carpentry = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Carpentry Production Unit
        </h1>
        <div className="space-y-4">
          <p className="text-gray-700">
            The Carpentry Production Unit specializes in creating high-quality
            wooden products, including furniture, doors, windows, and custom
            wooden structures. This unit utilizes advanced woodworking tools and
            techniques to ensure precision and durability in every product.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            Production Process
          </h2>
          <p className="text-gray-700">
            The process begins with sourcing high-quality raw materials,
            followed by detailed design and crafting. The unit ensures strict
            quality control throughout each stage of production:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Material selection and procurement</li>
            <li>Design and customization based on customer needs</li>
            <li>Cutting, sanding, and assembly of wooden parts</li>
            <li>Finishing and polishing</li>
            <li>Quality inspection and packaging</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            Product Categories
          </h2>
          <p className="text-gray-700">
            Our Carpentry Production Unit creates a variety of products for both
            residential and commercial purposes, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Custom furniture (tables, chairs, cabinets, etc.)</li>
            <li>Wooden doors and windows</li>
            <li>Flooring and paneling</li>
            <li>Wooden decorative items</li>
            <li>Construction materials (beams, frames, etc.)</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">
            Technologies and Tools
          </h2>
          <p className="text-gray-700">
            The unit is equipped with state-of-the-art machinery to enhance
            production efficiency and product quality:
          </p>
          <ul className="list-disc pl-6 text-gray-700">
            <li>CNC wood cutting machines</li>
            <li>Wood planers and sanders</li>
            <li>Jigsaws and routers</li>
            <li>Hand tools for detailed craftsmanship</li>
            <li>Wood finishing equipment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Carpentry;
