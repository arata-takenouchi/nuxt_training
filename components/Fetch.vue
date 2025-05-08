<script setup lang="ts">
// SSRの場合、useFetchを使うことで、サーバー側で取得したデータをクライアント側に引き継ぐことができる
// サーバー側ですでにデータ取得している場合はキャッシュが使用されるため、
// 同じリクエストがサーバー側とクライアント側で2回行われるということは無い
// const { data } = await useFetch('/api/data')

// ユーザー操作に応じてサーバー側にリクエスト投げるだけのケースなら、普通のfetchでOK
// ただし、レスポンスデータをクライアント側で使うなら、データ含めて事前にレンダリングしてくれるuseFetchでいい（SSRの場合）
// 途中からCSR → SSRに変更する可能性があるプロジェクトなら、最初からuseFetchを使う方が良さそう
async function handleFormSubmit() {
  const res = await $fetch('/api/submit', {
    method: 'POST',
    body: {
      name: 'John Doe',
      email: 'john.doe@example.com',
    },
  })
}

// const { data } = await useFetch('/api/echo')

// 複数のfetchの結果を待つケース
// ただし、データのfetchとcacheが目的なので、副作用を生むのはNG（storeの関数のような）
// const { data: discounts, status } = await useAsyncData('cart-discount', async () => {
//   const [coupons, offers] = await Promise.all([
//     $fetch('/cart/coupons'),
//     $fetch('/cart/offers'),
//   ])
//   return { coupons, offers }
// })

// idが変わるたびにuser取得
// const id = ref(1)
// const { data, error, refresh } = await useFetch('/api/users', {
//   watch: [id],
// })
// ただしURLが変わるわけではない（呼び出した時にURL構築）ので、これはダメ
// const { data, error, refresh } = await useFetch(`/api/users/${id.value}`, {
//   watch: [id],
// })
// パラメータを動的に渡したい場合はこちら（パラメータが変わるたびに再取得）
// const id = ref(null)
// const { data, status } = await useLazyFetch('/api/user', {
//   query: {
//     user_id: id
//   }
// })

// 中身はJSONのため、dataはstringになる
// const { data } = await useFetch('/api/date')

// ストリーム（SSE）のサンプル
const response = await $fetch<ReadableStream>('/chats/ask-ai' {
  method: 'POST',
  body: {
    query: 'pythonについて教えて',
  },
  responseType: 'stream',
})

const reader = response.pipeThrough(new TextDecoderStream()).getReader()

while (true) {
  const { value, done } = await reader.read()

  if (done) {
    break
  }

  console.log('AIからの返信: ', value)
}

// 並列処理のサンプル
const { data } = await useAsyncData(() => {
  return Promise.all([
    $fetch("/api/comments/"),
    $fetch("/api/author/1"),
  ])
})
const comments = computed(() => data.value?.[0])
const author = computed(() => data.value?.[1])
</script>

<template>
  <div v-if="data == null">
    No data
  </div>
  <div v-else>
    <form @submit="handleFormSubmit">
      <!-- form input tags -->
    </form>
  </div>
</template>