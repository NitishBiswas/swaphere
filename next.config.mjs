/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true, // Disable image optimization
    },
    async rewrites() {
        return [
            {
                source: '/userapi/:path*', // The local path you want to use in your code
                destination: 'https://api.quiickpage.com/api/v2/:path*', // The actual external API URL
            },
        ];
    },
}

export default nextConfig;
