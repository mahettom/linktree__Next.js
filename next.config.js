/** @type {import('next').NextConfig} */

// ——————————————————————————————————————————— Optimize Image from this location (hostname) —————————————

const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                hostname: 'media.licdn.com',
            },
            {
                hostname: 's2.qwant.com',
            },
            {
                hostname: 'pngimg.com',
            },
            {
                hostname: 'img.freepik.com',
            },
            {
                hostname: 'testrigor.com'
            },
        ],
    },
}

module.exports = nextConfig
