export const emailConfig = {
  from: 'hi@raywu.cn',
  baseUrl:
    process.env.VERCEL_ENV === 'production'
      ? `https://raywu.cn`
      : 'http://localhost:3000',
}
