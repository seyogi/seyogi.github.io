<template>
  <div>
    <div class="main_box">
      <h1>{{ meta.title }}</h1>
      <p>{{ formattedDate }}</p>
      <br>
      <div class="markdown-content" v-html="html"></div>
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
  html: true,    // HTML タグを許可
  breaks: true, // 改行を <br> に変換しない
  linkify: true,
  typographer: true
})

onMounted(async () => {
  const slug = route.params.slug
  const modules = import.meta.glob('../../assets/posts/*.md', { query: '?raw',import: 'default' });
  const path = `../../assets/posts/${slug}.md`;
  
  if (!modules[path]) {
    console.error(`Markdown file not found: ${path}`);
    return null;
  }
      const text = await modules[path]();

  const parsed = fm(text)

  meta.value = parsed.attributes     // title, date, tags…
  html.value = md.render(parsed.body)  // 本文
})
const formattedDate = computed(() => {
  if (!meta.value.date) return ""
  const d = new Date(meta.value.date)
  return `${d.getFullYear()}-${(d.getMonth()+1).toString().padStart(2,'0')}-${d.getDate().toString().padStart(2,'0')}`
})
</script>

<style scoped>

.markdown-content {
  line-height: 1.8; /* 1.8倍の行間 */
}
@media screen and (max-width: 700px) {
  .main_box {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }
}

/* for Desktop */
@media screen and (min-width: 700px) {
  .main_box {
    width: 92%;
    margin-left: 4%;
    margin-right: 4%;
  }
}
</style>

