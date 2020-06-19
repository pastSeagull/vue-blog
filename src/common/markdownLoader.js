const markdown = require('markdown-it');

function markLoader (src) {
  const md = markdown({
    html: true,
    linkify: true,
    typographer: true,
  });
  const html = md.render(src);

  return (
    '<template>\n'
    + `<div class="markdown-body">${html}</div>\n`
    + '</template>\n'
  );
}
module.exports = markLoader;