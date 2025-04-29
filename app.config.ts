// runtimeConfigとだいたい同じだが、こちらは.envでオーバーライドできない
// 多用してしまうとグローバルな変数定義と変わらない気がするので、こっちはあまり使わないかも
export default defineAppConfig({
  title: 'example App Title',
  theme: {
    primaryColor: '#000000'
  }
})