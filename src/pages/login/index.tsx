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
    console.log(data);
    // ここでAPIリクエストを実装
    reset();
  };

  return (
    <VStack m={4}>
      <Heading as="h1" textAlign="center" size="2xl" mb={4}>
        ログイン画面
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={8}>
          <Field invalid={!!errors.email} errorText={errors.email?.message}>
            <Input placeholder="メールアドレス *" {...register("email")} />
          </Field>
          <Field
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <Input placeholder="パスワード *" {...register("password")} />
          </Field>
        </Stack>
        <Button type="submit" mt={8} w="100%">
          ログイン
        </Button>
      </form>
    </VStack>
  );
};
export default LoginPage;
