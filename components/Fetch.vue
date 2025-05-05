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
const { data: discounts, status } = await useAsyncData('cart-discount', async () => {
  const [coupons, offers] = await Promise.all([
    $fetch('/cart/coupons'),
    $fetch('/cart/offers'),
  ])
  return { coupons, offers }
})
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