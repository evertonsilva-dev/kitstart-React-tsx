import React from "react";
import { Button } from "src/styles/components";
import { useTheme } from "src/ThemeContext";

export default function Home() {
  const themeToggle = useTheme();

  return (
    <div>
      <Button onClick={() => themeToggle.toggle()}>Toggle Theme</Button>
    </div>
  );
}
