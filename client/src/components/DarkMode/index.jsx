import { useTheme } from "@/Providers/ThemeProvider"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useEffect, useState } from "react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export function ThemeSwitch() {

  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState();

  useEffect(() => {
    if (theme == "dark") setChecked(true);
    else if (theme == "light") setChecked(false);
  }, [theme]);

  function handleChange() {
    if (checked) {
      setTheme("light");
      setChecked(false)
    } else {
      setTheme("dark");
      setChecked(true);
    }
  }
  return (
    <div className="flex items-center space-x-2">
      <HoverCard>
        <HoverCardTrigger>
          <Switch checked={checked} onCheckedChange={handleChange} />
        </HoverCardTrigger>
        <HoverCardContent className="text-sm w-fit h-fit">
          Change to <span className="font-semibold">{checked ? "Light" : "Dark"}</span>  Mode
        </HoverCardContent>
      </HoverCard>


    </div>
  )
}
