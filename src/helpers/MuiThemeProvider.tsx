import { useTheme } from "next-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { themeDark, themeLight } from "@theme/index";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(themeDark);

  useEffect(() => {
    resolvedTheme === "light"
      ? setCurrentTheme(themeLight)
      : setCurrentTheme(themeDark);
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
