import { z } from 'zod'

export const createArticleSchema = z.object({
  title: z
    .string()
    .nonempty({ message: 'タイトルを入力してください' })
    .max(255, { message: 'タイトルは255文字以内で入力してください' }),
  content: z
    .string()
    .nonempty({ message: '本文を入力してください' })
    .max(60000, { message: '本文は60000文字以内で入力してください' }),
})

export const editArticleSchema = z.object({
  title: z
    .string()
    .nonempty({ message: 'タイトルを入力してください' })
    .max(255, { message: 'タイトルは255文字以内で入力してください' }),
  category_id: z.number({
    invalid_type_error: 'カテゴリーを選択してください',
  }),
  content: z
    .string()
    .nonempty({ message: '本文を入力してください' })
    .max(60000, { message: '本文は60000文字以内で入力してください' }),
})
