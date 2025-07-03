const ToggleSetting = ({ title, description }) => (
  <div className="flex justify-between items-center border-b border-gray-800 pb-4">
    <div>
      <p className="text-sm font-semibold">{title}</p>
      <p className="text-sm text-white/70">{description}</p>
    </div>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-500 rounded-full peer peer-checked:bg-green-500 transition-all duration-300"></div>
    </label>
  </div>
);

export default ToggleSetting;