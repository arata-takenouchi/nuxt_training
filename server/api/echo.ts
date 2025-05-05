// headerやcookieをプロキシできる
export default defineEventHandler(event => parseCookies(event))