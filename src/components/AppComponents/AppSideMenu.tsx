import { useState } from 'react';

export default function AppSideMenu() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <aside
        className={`${
          isOpen ? 'w-64' : 'w-5.5'
        } fixed z-10 top-0 bg-blue-500 h-full text-white transition-all duration-200`}
      >
        <h2 className={`text-2xl p-4 ${isOpen ? 'block' : 'hidden'}`}>Sidebar</h2>
        {/* Add your sidebar content here */}
        <button
          className="m-4 py-2 px-4 bg-blue-500 text-white rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
      </aside>
      <main className="flex-1 bg-gray-200 p-4 ml-64">
        {/* Add your main content here */}
      </main>
    </div>
  );
}