// NG
// const config = useRuntimeConfig()
// export const useMyComposable = () => {
//   config.app.baseURL
// }
// OK（composableの内側でruntime configにアクセスする）
export const useMyComposable = () => {
  const config = useRuntimeConfig()
  return config.app.baseURL
}
