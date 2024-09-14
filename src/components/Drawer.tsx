const Drawer = ({ isOpen, onClose }: any) => {
    return (
      <div
        className={`fixed inset-0 bg-black bg-opacity-75 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        aria-labelledby="drawer-label"
        role="dialog"
        aria-modal="true"
      >
        <div className="relative w-64 h-full bg-gray-900 p-6 shadow-lg">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-amber-400 hover:text-amber-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="space-y-4 mt-12">
            <li>
              <a
                href="#"
                className="block text-amber-400 hover:text-amber-300 font-bold text-lg border-b border-amber-700 pb-2"
              >
                View All Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-amber-400 hover:text-amber-300 font-bold text-lg border-b border-amber-700 pb-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Drawer