import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsTelegram, BsWhatsapp, BsChat } from "react-icons/bs";

const actions = [
  { icon: <BsTelegram href="" className="text-[20px]" />, name: "Telegram" },
  { icon: <BsWhatsapp className="text-[20px]" />, name: "Whatsapp" },
];

export const Chat = () => {
  return (
    <div className="containers">
      <Box sx={{ height: 0, flexGrow: 1 }}>
        <SpeedDial
          ariaLabel="other chat options"
          sx={{ position: "fixed", bottom: 20, right: 20 }}
          icon={<BsChat className="text-[30px]" />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </div>
  );
};
