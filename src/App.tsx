import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { ThemeProvider, CssBaseline } from "@mui/material"

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className="app">
      <h1>home</h1>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        hello
      </ThemeProvider>
    </div>
  )
}

export default App
