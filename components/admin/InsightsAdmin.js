"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { postCategories } from "@/lib/posts";

const inputCls =
  "w-full border border-navy-900/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-gold-600 focus:outline-none focus:ring-1 focus:ring-gold-600";
const labelCls = "block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60";

const slugify = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const emptyForm = {
  title: "",
  category: postCategories[0],
  author: "Tax Desk",
  excerpt: "",
  read_time: "4 min read",
  status: "draft",
  content_text: "",
};

export default function InsightsAdmin() {
  const [rows, setRows] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [msg, setMsg] = useState("");

  async function load() {
    if (!supabase) return;
    const r = await supabase
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });
    setRows(r.data || []);
  }

  useEffect(() => {
    load();
  }, []);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  async function save(ev) {
    ev.preventDefault();
    if (!supabase) return;
    if (!form.title.trim() || !form.content_text.trim()) {
      setMsg("A title and content are required.");
      return;
    }
    let slug = slugify(form.title);
    if (rows.some((r) => r.slug === slug && r.id !== editingId)) slug = `${slug}-2`;

    const payload = {
      title: form.title.trim(),
      category: form.category,
      author: form.author.trim() || "Tax Desk",
      excerpt: form.excerpt.trim(),
      read_time: form.read_time.trim() || "4 min read",
      status: form.status,
      content_text: form.content_text,
      slug,
    };

    if (editingId) {
      await supabase.from("blog_posts").update(payload).eq("id", editingId);
      setMsg("Updated.");
    } else {
      await supabase.from("blog_posts").insert({
        ...payload,
        date_label: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      });
      setMsg(form.status === "published" ? "Published live." : "Draft saved.");
    }
    setForm(emptyForm);
    setEditingId(null);
    load();
  }

  function edit(r) {
    setEditingId(r.id);
    setForm({
      title: r.title,
      category: r.category,
      author: r.author,
      excerpt: r.excerpt || "",
      read_time: r.read_time || "4 min read",
      status: r.status,
      content_text: r.content_text || "",
    });
    setMsg("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function remove(id) {
    if (!window.confirm("Delete this post permanently?")) return;
    await supabase.from("blog_posts").delete().eq("id", id);
    if (editingId === id) {
      setEditingId(null);
      setForm(emptyForm);
    }
    load();
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
      {/* Editor */}
      <form onSubmit={save} className="border-t-2 border-gold-500 bg-white p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
          {editingId ? "Edit note" : "Write a new note"}
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className={labelCls} htmlFor="cms-title">Title *</label>
            <input id="cms-title" className={`${inputCls} mt-2`} value={form.title} onChange={set("title")} placeholder="e.g. TDS on consultancy fees: what changed this quarter" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="cms-category">Category</label>
              <select id="cms-category" className={`${inputCls} mt-2`} value={form.category} onChange={set("category")}>
                {postCategories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls} htmlFor="cms-author">Author / desk</label>
              <input id="cms-author" className={`${inputCls} mt-2`} value={form.author} onChange={set("author")} />
            </div>
          </div>
          <div>
            <label className={labelCls} htmlFor="cms-excerpt">Excerpt (one or two sentences for listings)</label>
            <textarea id="cms-excerpt" rows={2} className={`${inputCls} mt-2`} value={form.excerpt} onChange={set("excerpt")} />
          </div>
          <div>
            <label className={labelCls} htmlFor="cms-content">Content *</label>
            <textarea
              id="cms-content"
              rows={14}
              className={`${inputCls} mt-2 font-mono text-[13px] leading-relaxed`}
              value={form.content_text}
              onChange={set("content_text")}
              placeholder={"Write like a document:\n\nPlain lines become paragraphs.\n## A line starting with two hashes becomes a heading\n- A line starting with a dash becomes a bullet\n> A line starting with > becomes a pull-quote"}
            />
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelCls} htmlFor="cms-read">Read time</label>
              <input id="cms-read" className={`${inputCls} mt-2`} value={form.read_time} onChange={set("read_time")} />
            </div>
            <div>
              <label className={labelCls} htmlFor="cms-status">Status</label>
              <select id="cms-status" className={`${inputCls} mt-2`} value={form.status} onChange={set("status")}>
                <option value="draft">draft (hidden from site)</option>
                <option value="published">published (live on site)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="submit" className="bg-navy-900 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-white hover:bg-navy-700">
            {editingId ? "Save changes" : "Save note"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setForm(emptyForm);
              }}
              className="border border-navy-900/20 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
            >
              Cancel edit
            </button>
          )}
        </div>
        {msg && <p className="mt-4 text-sm text-forest-700">{msg}</p>}
      </form>

      {/* Library */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-ink/50">
          Published & drafts ({rows.length})
        </p>
        <div className="mt-4 space-y-3">
          {rows.map((r) => (
            <div key={r.id} className="border border-navy-900/10 bg-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="font-display text-lg leading-snug text-navy-900">{r.title}</p>
                <span
                  className={`font-mono text-[10px] uppercase tracking-[0.16em] ${
                    r.status === "published" ? "text-forest-700" : "text-ink/45"
                  }`}
                >
                  {r.status}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                {r.category} · {r.date_label || "undated"} · /insights/{r.slug}
              </p>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => edit(r)}
                  className="border border-navy-900/20 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60 hover:border-navy-900 hover:text-navy-900"
                >
                  Edit
                </button>
                <button
                  onClick={() => remove(r.id)}
                  className="border border-[#b3261e]/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[#b3261e] hover:bg-[#b3261e] hover:text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!rows.length && (
            <p className="border border-navy-900/10 bg-white px-4 py-8 text-center text-ink/50">
              No CMS notes yet — the six seeded notes remain live from the code library.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
