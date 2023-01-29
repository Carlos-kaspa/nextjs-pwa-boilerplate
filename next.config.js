const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
})

module.exports = withPWA({
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts'],
    env: {
        NEXT_PUBLIC_DUMMYAPI_URL: process.env.NEXT_PUBLIC_DUMMYAPI_URL,
    },
    images: {
        remotePatterns: [{ hostname: 'i.dummyjson.com' }],
    },
    output: 'standalone',
})
