const SidebarItem = ({ icon, label, active, url }) => (
  <a
    href={url}
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer no-underline ${
      active ? "bg-[#2c2f2c]" : "hover:bg-[#1e1f1e]"
    }`}
  >
    <span>{icon}</span>
    <span>{label}</span>
  </a>
);

export default SidebarItem;