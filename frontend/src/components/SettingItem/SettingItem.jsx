const SettingItem = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-gray-800 pb-2">
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="text-sm text-white/70">{value}</p>
    </div>
    <button className="bg-[#2c2f2c] hover:bg-[#3b3e3b] text-white px-4 py-1 rounded-md">
      Update
    </button>
  </div>
);

export default SettingItem;