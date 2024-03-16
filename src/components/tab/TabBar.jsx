import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {
  LuStore,
  LuHome,
  LuMonitorPlay,
  LuUsers2,
  LuGamepad2,
} from "react-icons/lu";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "auto" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          marginBottom: -1,
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ borderBottom: 0 }}>
          <Tab
            icon={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <LuHome style={{ fontSize: 24 }} />
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            icon={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <LuMonitorPlay style={{ fontSize: 24 }} />
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            icon={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <LuStore style={{ fontSize: 24 }} />
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            icon={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <LuUsers2 style={{ fontSize: 24 }} />
              </div>
            }
            {...a11yProps(3)}
          />
          <Tab
            icon={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}>
                <LuGamepad2 style={{ fontSize: 24 }} />
              </div>
            }
            {...a11yProps(4)}
          />
        </Tabs>
      </Box>
    </Box>
  );
}
