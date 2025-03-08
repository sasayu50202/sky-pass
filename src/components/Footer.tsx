import { Box } from "@chakra-ui/react";
import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-4">
      <Box className="max-w-6xl mx-auto">
        <Box className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Box className="flex items-center gap-2">
            {/* <Plane className="w-6 h-6" /> */}
            <span className="text-xl font-bold">SkyPass</span>
          </Box>
          <Box className="flex items-center gap-4">
            <a
              href="https://note.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
            >
              noteで最新情報をチェック
            </a>
          </Box>
          <Box className="text-slate-400 text-sm">
            © 2024 SkyPass. All rights reserved.
          </Box>
        </Box>
      </Box>
    </footer>
  );
};
