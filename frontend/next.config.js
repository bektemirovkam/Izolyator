/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: "/uploads/:path*",
                destination: `${process.env.API_URL}/uploads/:path*`
            }
        ]
    },
    experimental: {
        serverActions: {
            allowedOrigins: ["prompostavki.kz", "localhost"]
        }
    }
}

module.exports = nextConfig
