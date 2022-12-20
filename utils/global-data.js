export const getGlobalData = () => {
  const name = process.env.WAGNER_CASTRO
    ? decodeURI(process.env.WAGNER_CASTRO)
    : 'My Blog';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Blog em NextJS';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Todos os direitos reservados.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
