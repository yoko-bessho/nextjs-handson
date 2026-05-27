import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.jp",
                pathname: "/**", //完全一致
            },
        ],
    },
};

export default nextConfig;
