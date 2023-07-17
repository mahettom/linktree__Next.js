/** @type {import('next').NextConfig} */

// ——————————————————————————————————————————— Optimize Image from this location (hostname) —————————————

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'nextjs.org',
            },
            {
                hostname: 'github.githubassets.com',
            },
            {
                hostname: 'logowik.com',
            },
            {
                hostname: 'img.freepik.com',
            }
        ],
    },
}

module.exports = nextConfig
