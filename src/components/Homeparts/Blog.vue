<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import MarkdownIt from "markdown-it"
import fm from "front-matter"
import postlist from "../../assets/posts/posts.json";

const posts = ref([])
const md = new MarkdownIt({ html: true, breaks: true })

onMounted(async () => {
  // 記事リスト JSON を取得
  
  let data = postlist

  // 各記事の Markdown を取得して preview を追加
  const postsWithPreview = await Promise.all(
    data.map(async (post) => {
      const modules = import.meta.glob('../../assets/posts/*.md', { query: '?raw',import: 'default' });
      const path = `../../assets/posts/${post.slug}.md`;
      
      if (!modules[path]) {
        console.error(`Markdown file not found: ${path}`);
        return null;
      }

      // ファイルの中身を文字列として取得
      const text = await modules[path]();
      const parsed = fm(text)
      const rawText = parsed.body
        .replace(/\*\*/g, '') // 画像 Markdown を削除
        .replace(/<[^>]+>/g, '')         // HTML タグを削除
        .replace(/\n{2,}/g, '\n')        // 空行をまとめる
        .trim()

        // 最初の数行だけプレビューにしたい場合
      const lines = rawText.split('\n').filter(line => line.trim() !== '').join(' ')  
      return {
        ...post,
        preview: lines.length > 100 ? lines.slice(0, 100) + '…' : lines// 冒頭3行を preview として追加
      }
    })
  )

  // 日付でソートして最新3件だけ
  posts.value = postsWithPreview
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)
})
</script>

<template>
  <div>
    <ul>
      <div v-for="post in posts" :key="post.slug" class="mb-4 border-b pb-2">
        <router-link :to="`/blog/${post.slug}`" class="text-lg font-bold text-blue-600 hover:underline">
          {{ post.title }}
        </router-link><span class="text-gray-400 text-xs">({{ post.date }})</span>
        <p class="preview">{{ post.preview }}</p>
        <br>
      </div>
    </ul>
  </div>
</template>

<style>
.preview{
    font-size: 12px;
}
</style>