export const createOgTwitter = (name: string, content: string | undefined) => (
  <>
    <meta name={`twitter:${name}`} content={content} />
    <meta property={`og:${name}`} content={content} />
  </>
)

export const createMetaTitle = (content: string | undefined) => (
  <>
    <title>{content}</title>
    {createOgTwitter("title", content)}
  </>
)

export const createMeta = (name: string, content: string | undefined) => {
  if (!content) return
  return (
    <>
      <meta name={name} content={content} />
      {createOgTwitter(name, content)}
    </>
  )
}
