'use client';

import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Notion Clone</h1>
      <ul>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-black">Page 1</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-black">Page 2</a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-gray-700 hover:text-black">Page 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
