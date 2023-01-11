import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { BsTelegram, BsWhatsapp, BsChat } from "react-icons/bs";

const actions = [
  {
    icon: (
      <a href="https://telegram.me/+265981728175" target="_blank">
        <BsTelegram className="text-[20px]" />
      </a>
    ),
    name: "Telegram",
  },
  {
    icon: (
      <a href="https://wa.me/+265881815626" target="_blank">
        <BsWhatsapp className="text-[20px]" />
      </a>
    ),
    name: "Whatsapp",
  },
];

export const Chat = () => {
  return (
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
  );
};
