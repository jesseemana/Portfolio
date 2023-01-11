import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import { BsTelegram, BsWhatsapp, BsChat } from "react-icons/bs";

const actions = [
  { icon: <BsTelegram />, name: "Telegram" },
  { icon: <BsWhatsapp />, name: "Whatsapp" },
];

export const Chat = () => {
  return (
    <div className="containers">
      <Box sx={{ height: 0, flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          className="fixed b-20 r-90"
          sx={{ position: "fixed", bottom: 20, right: 30 }}
          icon={<BsChat className="text-[30px]" />}
        ></SpeedDial>
      </Box>
    </div>
  );
};
