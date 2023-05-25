import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team/index";
import Invoices from "./scenes/invoices/index";
import Contacts from "./scenes/contacts/index";
import Bar from "./scenes/bar/index";
import Form from "./scenes/form/index";
import Line from "./scenes/line/index";
import Pie from "./scenes/pie/index";
import FAQ from "./scenes/faq/index";
import Geography from "./scenes/geography/index";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="./scenes/team/index.jsx" element={<Team />} />
              <Route path="./scenes/contacts/index.jsx" element={<Contacts />} />
              <Route path="./scenes/invoices/index.jsx" element={<Invoices />} />
              <Route path="./scenes/form/index.jsx" element={<Form />} />
              <Route path="./scenes/bar/index.jsx" element={<Bar />} />
              <Route path="./scenes/pie/index.jsx" element={<Pie />} />
              <Route path="./scenes/line/index.jsx" element={<Line />} />
              <Route path="./scenes/faq/index.jsx" element={<FAQ />} />
              <Route path="./scenes/calendar/calendar.jsx" element={<Calendar />} />
              <Route path="./scenes/geography/index.jsx" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;