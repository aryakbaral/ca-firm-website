/* Converts plain-text CMS content into render blocks.
   Blank line = paragraph break · "## " = heading · "- " = bullet · "> " = quote */
export function parseContent(text) {
  const lines = String(text || "").split(/\r?\n/);
  const blocks = [];
  let para = [];
  let list = [];

  const flushPara = () => {
    if (para.length) {
      blocks.push({ type: "p", text: para.join(" ") });
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      blocks.push({ type: "ul", items: list });
      list = [];
    }
  };

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (line.startsWith("## ")) {
      flushPara();
      flushList();
      blocks.push({ type: "h2", text: line.slice(3).trim() });
    } else if (line.startsWith("> ")) {
      flushPara();
      flushList();
      blocks.push({ type: "quote", text: line.slice(2).trim() });
    } else if (line.startsWith("- ")) {
      flushPara();
      list.push(line.slice(2).trim());
    } else {
      flushList();
      para.push(line);
    }
  }
  flushPara();
  flushList();
  return blocks;
}
