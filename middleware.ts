import middleware from "next-auth/middleware";

export default middleware

// 配置在以下的路徑, 將會觸發 middleware 執行
export const config = {
    matcher: ['/users']
}