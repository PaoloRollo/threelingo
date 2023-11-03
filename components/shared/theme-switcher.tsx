import { Key } from "react";
import { Tab, Tabs } from "@nextui-org/react";
import { MoonIcon, SunMediumIcon } from "lucide-react";
import { useTheme } from "next-themes";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Tabs
      fullWidth
      selectedKey={theme}
      onSelectionChange={(key: Key) => setTheme(key.toString())}
    >
      <Tab
        key="dark"
        title={
          <div className="flex space-x-2 items-center">
            <MoonIcon size={20} />
            {/* {sidebarOpen && <p>Dark</p>} */}
          </div>
        }
      />
      <Tab
        key="light"
        title={
          <div className="flex space-x-2 items-center">
            <SunMediumIcon size={20} />
            {/* {sidebarOpen && <p>Light</p>} */}
          </div>
        }
      />
    </Tabs>
  );
};
