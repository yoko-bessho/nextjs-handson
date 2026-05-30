export default async function Comments() {
    // 思い処理をシミュレート
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div>これは重いコメントコンポーネントです</div>
    );
}