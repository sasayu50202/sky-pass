import { Box, Button, Icon, IconButton } from "@chakra-ui/react";
import { CircleUser, LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <Box className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80"
          alt="Airplane in sky"
          className="w-full h-full object-cover"
          width={500}
          height={500}
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </Box>

      {/* Navigation */}
      <Box
        pos="absolute"
        top={6}
        right={6}
        zIndex={20}
        display="flex"
        alignItems="center"
        gap={4}
      >
        <Link href="/login">
          <Button
            bg="whiteAlpha.200"
            color="white"
            px={4}
            py={2}
            rounded="full"
            backdropFilter="blur(10px)"
            _hover={{ bg: "whiteAlpha.300" }}
          >
            ログイン
            <Icon as={LogIn} w={4} h={4} />
          </Button>
        </Link>
        <Link href="/user">
          <IconButton rounded="full" _hover={{ bg: "whiteAlpha.200" }}>
            <Icon as={CircleUser} w={7} h={7} />
          </IconButton>
        </Link>
      </Box>

      <Box className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">SkyPass</h1>
        <p className="text-xl text-white/90 mb-8">
          国立パイロット養成学校の試験対策note
        </p>
      </Box>
    </header>
  );
};
