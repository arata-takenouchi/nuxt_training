export default defineEventHandler(() => {
  // return new Date()
  // こうするとレスポンスを変形できる
  const res = {
    createdAt: new Date(),

    toJSON() {
      return {
        createdAt: {
          year: this.createdAt.getFullYear(),
          month: this.createdAt.getMonth(),
          day: this.createdAt.getDate(),
        }
      }
    }
  }
  return res
})