import { X } from 'lucide-react';

export default function Location() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-950/60 z-50">
      <div className="w-100 h-95 rounded-2xl bg-gray-100 shadow-2xl p-5 flex flex-col justify-between">
       
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium text-gray-800">Where are you today?</h2>
          <button 
            aria-label="Close modal"
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 transition-colors text-gray-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Add your location search input or list items here */}
        <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">
          [Location input goes here]
        </div>

      </div>
    </div>
  );
}