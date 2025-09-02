export default function Home() {
    return (
        <>
            <div className="text-white h-[85vh] flex items-center">
                <div>
                    <h2 className="text-4xl">Neody Networks</h2>
                    <p className="mt-4">
                        NeodyによるNeodyのためのNeodyのネットワーク
                    </p>
                </div>
            </div>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">Mission</h2>
                <p>
                    本プロジェクトの役割は主にNeodylandの開発者にグローバルIPアドレスが付いたVMを無償で貸し出して、彼らの開発を支えることです。
                    さらにネットワークの研究を独自に進め、ブログなどで公開をする予定です。
                </p>
            </div>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">料金は？</h2>
                <p>
                    非営利で進めるため、無償で提供しています。しかし、金がかかるため、寄付を受け付けております。寄付金は主にネットワークの維持に使われます。
                </p>
            </div>
        </>
    );
}
