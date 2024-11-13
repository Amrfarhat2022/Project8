
import Header1 from "./componnets/header/Header1";
import Header2 from "./componnets/header/Header2";
import Header3 from "./componnets/header/Header3";
import Hero from "./componnets/hero/Hero";
import {Box} from "@mui/material";
import Main from "./componnets/main/Main";
import Foot from "./componnets/footer/Foot";
import Scroll from "./componnets/scroll/Scroll";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {

  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header1 />

        <Header2 />
        <Header3 />
        <Box bgcolor={theme.palette.bgg.main}>
          <Hero/>
          <Main/>
        </Box>
        <Foot/>
        <Scroll/>

      </ThemeProvider>



    </ColorModeContext.Provider>


  );
}

export default App;
