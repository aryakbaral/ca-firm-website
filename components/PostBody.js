import { parseContent } from "@/lib/parseContent";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 font-display text-2xl leading-snug text-navy-900">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-5 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-ink/80">
              <span className="mt-3 h-px w-4 shrink-0 bg-gold-500" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-8 border-l-2 border-gold-500 pl-6 font-display text-xl italic leading-snug text-navy-900">
          {block.text}
        </blockquote>
      );
    default:
      return <p className="mt-5 leading-relaxed text-ink/80">{block.text}</p>;
  }
}

export default function PostBody({ post }) {
  const blocks = post.content || parseContent(post.content_text);
  return (
    <>
      {blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}
    </>
  );
}
