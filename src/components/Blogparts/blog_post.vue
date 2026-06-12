<template>
  <div>
    <div class="main_box">
      <br>
      <h1>{{ meta.title }}</h1>

      <p class="post-date">{{ formattedDate }}</p>

      <div v-if="meta.tags?.length" class="tags">
        <span
          v-for="tag in meta.tags"
          :key="tag"
          class="tag"
        >
          {{ tag }}
        </span>
      </div>

      <div
        class="markdown-content"
        v-html="html"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import MarkdownIt from "markdown-it"
import fm from "front-matter"

const route = useRoute()

const html = ref("")
const meta = ref({})

const md = new MarkdownIt({
  html: true,
  breaks: true, // 改行を <br> に変換
  linkify: true,
  typographer: true
})

onMounted(async () => {
  const slug = route.params.slug

  const modules = import.meta.glob(
    "../../assets/posts/*.md",
    {
      query: "?raw",
      import: "default"
    }
  )

  const path = `../../assets/posts/${slug}.md`

  if (!modules[path]) {
    console.error(`Markdown file not found: ${path}`)
    return
  }

  const text = await modules[path]()

  const parsed = fm(text)

  meta.value = parsed.attributes
  html.value = md.render(parsed.body)
})

const formattedDate = computed(() => {
  if (!meta.value.date) return ""

  const d = new Date(meta.value.date)

  return `${d.getFullYear()}-${String(
    d.getMonth() + 1
  ).padStart(2, "0")}-${String(
    d.getDate()
  ).padStart(2, "0")}`
})
</script>

<style scoped>

/* ---------- Layout ---------- */

.main_box {
  max-width: 900px;
}

@media screen and (max-width: 700px) {
  .main_box {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
}

@media screen and (min-width: 700px) {
  .main_box {
    width: 92%;
    margin-left: 4%;
    margin-right: 4%;
  }
}

/* ---------- Header ---------- */

h1 {
  margin-bottom: 0.5rem;
}

.post-date {
  color: #888;
  margin-bottom: 1rem;
}

/* ---------- Tags ---------- */

.tags {
  margin-bottom: 2rem;
}

.tag {
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;

  padding: 0.25rem 0.75rem;

  border-radius: 999px;

  background-color: #f3f3f3;
  color: #555;

  font-size: 0.85rem;
}

/* ---------- Markdown ---------- */

.markdown-content {
  line-height: 1.9;
  font-size: 1rem;
}

/* v-html用 */

.markdown-content :deep(h1) {
  margin-top: 2.5rem;
  margin-bottom: 1rem;
}

.markdown-content :deep(h2) {
  margin-top: 3rem;
  margin-bottom: 1rem;

  padding-bottom: 0.4rem;

  border-bottom: 1px solid #ddd;
}

.markdown-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 0.8rem;
}

.markdown-content :deep(p) {
  margin: 1rem 0;
}

.markdown-content :deep(ul),
.markdown-content :deep(ol) {
  padding-left: 1.5rem;
  margin: 1rem 0;
}

.markdown-content :deep(li) {
  margin: 0.4rem 0;
}

.markdown-content :deep(hr) {
  margin: 2rem 0;

  border: none;
  border-top: 1px solid #ddd;
}

.markdown-content :deep(blockquote) {
  margin: 1rem 0;
  padding-left: 1rem;

  border-left: 4px solid #ddd;
  color: #666;
}

.markdown-content :deep(code) {
  background: #f5f5f5;
  padding: 0.15rem 0.35rem;
  border-radius: 4px;

  font-size: 0.95em;
}

.markdown-content :deep(pre) {
  overflow-x: auto;

  padding: 1rem;

  border-radius: 8px;

  background: #f5f5f5;
}

.markdown-content :deep(pre code) {
  background: transparent;
  padding: 0;
}

.markdown-content :deep(a) {
  text-decoration: none;
}

.markdown-content :deep(a:hover) {
  text-decoration: underline;
}

.markdown-content :deep(img) {
  max-width: 100%;
  height: auto;

  display: block;
  margin: 1rem auto;
}
</style>