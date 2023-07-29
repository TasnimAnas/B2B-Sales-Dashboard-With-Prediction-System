import { createTheme } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import "date-fns";
import { memo, useState } from "react";
import "../styles/AnalysisPage.css";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

function AnalysisPage({ data }) {
  const dist = data
    ? data.length > 0
      ? data[0].DISTRIBUTION_CHANNEL
      : null
    : null;
  const [distributionChannel, setDistributionChannel] = useState(dist);
  const [channelSend, setChannelSend] = useState(dist);
  const [customerNumber, setCustomerNumber] = useState("");
  const [customerSend, setCustomerSend] = useState("");
  const inputStyles = {
    background: "white",
    color: "black",
    borderRadius: "4px",
  };

  const theme = createTheme({
    palette: {
      white: {
        main: "#ffffff",
      },
    },
  });

  return (
    <div className="analysisPageContainer">
      <div className="spacer">
        <div>
          <div className="firstPart">
            <div>
              <TextField
                className="distChannel"
                fullWidth
                label="Distribution Channel"
                size="medium"
                variant="filled"
                inputProps={{
                  style: inputStyles,
                }}
                value={distributionChannel}
                onChange={(e) => {
                  setDistributionChannel(e.target.value);
                }}
              />
            </div>
            <div>
              <TextField
                className="custNumber"
                fullWidth
                label="Customer Number"
                type="number"
                size="medium"
                variant="filled"
                inputProps={{
                  style: inputStyles,
                }}
                value={customerNumber}
                onChange={(e) => {
                  setCustomerNumber(e.target.value);
                }}
              />
            </div>
            <ThemeProvider theme={theme}>
              <Button
                color="white"
                variant="outlined"
                size="medium"
                style={{ width: "100%" }}
                onClick={() => {
                  setChannelSend(distributionChannel);
                  setCustomerSend(customerNumber);
                }}
              >
                View
              </Button>
            </ThemeProvider>
          </div>
        </div>
        <div className="secondPart">
          <BarChart
            data={data}
            distributionChannel={channelSend}
            customerNumber={customerSend}
          />
        </div>
        <div className="thirdPart">
          <PieChart
            data={data}
            distributionChannel={channelSend}
            customerNumber={customerSend}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(AnalysisPage);
