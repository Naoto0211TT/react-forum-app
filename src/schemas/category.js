import { z } from 'zod'

export const createCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'カテゴリー名を入力してください' })
    .max(255, { message: 'カテゴリー名は255文字以内で入力してください' }),
})

export const editCategorySchema = z.object({
  name: z
    .string()
    .nonempty({ message: 'カテゴリー名を入力してください' })
    .max(255, { message: 'カテゴリー名は255文字以内で入力してください' }),
})
