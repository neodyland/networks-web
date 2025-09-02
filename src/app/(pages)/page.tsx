import Link from "next/link";
import { Button } from "@/components/ui/button";

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
                <h2 className="text-2xl font-bold mb-4">形態</h2>
                <p>
                    非営利で進めるため、無償で提供しています。しかし、金がかかるため、寄付を受け付けております。寄付金は主にネットワークの維持に使われます。
                </p>
            </div>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">寄付特典</h2>
                <p>
                    VMの貸し出しを一ヶ月貸し出します！(継続で利用する場合は、寄付をお願いします。)
                </p>
            </div>
            <div className="py-8">
                <h2 className="text-2xl font-bold mb-4">寄付先</h2>
                <p>以下のリンクから寄付を行うことができます。</p>
                <Button asChild className="mt-4">
                    <a href="https://buy.stripe.com/5kQ7sK4QDbkYduidYbcMM09">
                        寄付する！
                    </a>
                </Button>
            </div>
        </>
    );
}
