import { useTheme } from "next-themes";
import { ThemeProvider } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { themeDark, themeLight } from "@theme/index";
import GlobalStyles from "@theme/global";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);

  useEffect(() => {
    if (resolvedTheme === undefined || null) return;
    if (resolvedTheme === "system") return;
    if (resolvedTheme === "dark") return setCurrentTheme(themeDark);
    return setCurrentTheme(themeLight);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
