'use client';

import { useState } from "react";
import dynamic from "next/dynamic";

const Heavy = dynamic(() => import("./heavy"), {
    loading: () => <p>Loading...</p>,
    ssr: false, //サーバーサイドレンダリングを無効にすることで、クライアントサイドでのみHeavyコンポーネントがレンダリングされるようになります
});

export default function HeavyButton() {
    const [showHeavy, setShowHeavy] = useState(false);

    return (
        <div>
            <button
                onClick={() => setShowHeavy(true)}
            className="block p-4 m-4 bg-blue-900 text-white rounded-xl">Show Heavy Component</button>
            {showHeavy && <Heavy />}
        </div>
    );
}