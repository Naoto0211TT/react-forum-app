export const useArticleList = () => {
  const articleRows = (articles = []) =>
    (articles || []).map((article) => {
      // HTMLタグを除去した記事本文
      const sanitizedContent = article.content.replace(
        /<("[^"]*"|'[^']*'|[^'">])*>/g,
        ''
      )
      // 本文の文字を丸め込み（100文字以上の場合）
      const roundedContent =
        article.content.length > 100
          ? `${sanitizedContent.substr(0, 100)}...`
          : sanitizedContent

      return {
        id: article.id,
        title: article.title,
        content: roundedContent,
        categoryName: article.category?.name || '',
      }
    })

  return {
    articleRows,
  }
}
