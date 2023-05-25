import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Grafico de Linha" subtitle="Grafico de linha Simples" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;