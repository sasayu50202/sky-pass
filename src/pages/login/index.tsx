import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { NextPage } from "next";
import { LoginFormTypes, loginSchema } from "@/schemas/LoginSchema";

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormTypes>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormTypes) => {
    console.log("ログイン情報:", data);
    // ここでAPIリクエストを実装
    reset();
  };

  return (
    <VStack p={8}>
      <Heading as="h1">ログイン画面</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Field
            label="email"
            invalid={!!errors.email}
            errorText={errors.email?.message}
          >
            <Input
              {...register("email", { required: "First name is required" })}
            />
          </Field>
          <Field
            label="password"
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <Input
              {...register("password", { required: "Last name is required" })}
            />
          </Field>
        </Stack>
        <Button type="submit">ボタン</Button>
      </form>
    </VStack>
  );
};
export default LoginPage;
