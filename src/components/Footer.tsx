import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer>
      <Box>
        <Box>
          <Box>
            <span>SkyPass</span>
          </Box>
          <Box>
            <a
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              noteで最新情報をチェック
            </a>
          </Box>
          <Box>© 2024 SkyPass. All rights reserved.</Box>
        </Box>
      </Box>
    </footer>
  );
};
