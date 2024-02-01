export const seo = {
  title: 'Ray Wu | 开发者、设计师、产品经理、创始人',
  description:
    '我叫 Ray，一名开发者，设计师，产品经理，同时也是优燃佳科技创始人，目前带领着优燃佳致力于创造一个充满创造力的工作环境，同时鼓励团队创造影响世界的产品。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://raywu.cn'
      : 'http://localhost:3000'
  ),
} as const
