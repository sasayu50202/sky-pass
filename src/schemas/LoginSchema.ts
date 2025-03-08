import { z } from "zod";

// スキーマ定義
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "メールアドレスは必須です！")
    .email("有効なメールアドレスを入力してください"),
  password: z.string().min(8, "パスワードは8文字以上で入力してください"),
});

export type LoginFormTypes = z.infer<typeof loginSchema>;
