import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { Field } from "../../components/ui/field";
import { NextPage } from "next";

// スキーマ定義
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスは必須です！")
    .email("有効なメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上で入力してください"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginPage: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormValues) => {
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
