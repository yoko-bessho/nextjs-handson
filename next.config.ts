import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.jp",
                pathname: "/**", //完全一致
            },
            {
                protocol: "https",
                hostname: "picsum.photos",
                pathname: "/seed/**", //seedから始まるパスにマッチ
            }
        ],
    },
};

export default nextConfig;
