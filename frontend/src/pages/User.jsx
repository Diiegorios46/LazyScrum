import SidebarItem from "../components/SidebarItem/SidebarItem"
import Section from "../components/Section/Section";
import ToggleSetting from "../components/ToggleSetting/ToggleSetting";
import SettingItem from "../components/SettingItem/SettingItem";

const Settings = () => {
  return (
    <div className="flex min-h-screen bg-[#111512] text-white">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#111512] border-r border-gray-800 p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-bold mb-10">Lazyscrum</h1>
          <nav className="space-y-4">
            <SidebarItem icon="⚙️" label="Settings" active />
            <SidebarItem icon="🏠" label="Home" url={"./workspace"}/>
            <SidebarItem icon="📋" label="Boards" />
            <SidebarItem icon="📄" label="Templates" />
            <SidebarItem icon="👥" label="Invite team members" />
          </nav>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-2xl font-bold mb-8">Settings</h2>

        {/* Account section */}
        <Section title="Setting">
          <SettingItem label="Email" value="jennifer.miller@email.com" />
          <SettingItem label="Password" value="********" />
          <SettingItem label="Full name" value="Jennifer Miller" />
          <SettingItem label="Language" value="English" />
        </Section>

        {/* Preferences */}
        <Section title="Preferences">
          <ToggleSetting 
            title="Dark mode"
            description="Enable dark mode for a more comfortable viewing experience in low-light environments."
          />
          <ToggleSetting 
            title="Email notifications"
            description="Receive email notifications for board updates, task assignments, and comments."
          />
          <ToggleSetting 
            title="Desktop notifications"
            description="Enable desktop notifications for real-time updates on your boards and tasks."
          />
        </Section>

        {/* Danger Zone */}
        <Section title="Danger zone">
          <div className="flex justify-between items-center py-2">
            <span>Delete account</span>
            <button className="bg-[#2c2f2c] hover:bg-[#3b3e3b] text-white px-4 py-1 rounded-md">
              Delete
            </button>
          </div>
        </Section>
      </main>
    </div>
  );
};


export default Settings;
