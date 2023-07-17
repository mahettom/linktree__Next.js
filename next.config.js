/** @type {import('next').NextConfig} */

// ——————————————————————————————————————————— Optimize Image from this location (hostname) —————————————

const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'nextjs.org',
            },
        ],
    },
}

module.exports = nextConfig
