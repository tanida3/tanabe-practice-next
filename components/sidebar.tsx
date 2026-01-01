export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#050042] text-white p-6">
      <div className="space-y-4">
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          サービス概要
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          お知らせ・ニュース
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          よくある質問
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          お問い合わせ
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          利用規約
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          プライバシーポリシー
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          情報セキュリティ方針
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          API概要
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          開発者ドキュメント
        </div>
        <div className="cursor-pointer hover:text-gray-300 hover:bg-[#0D2965] rounded-lg px-2 py-2 text-sm font-bold">
          投資家向け情報
        </div>
      </div>

      <div className="mt-30 space-y-4">
        <div className="cursor-pointer hover:text-gray-300 text-[13px] font-medium">
          わたしたちについて
        </div>
        <div className="cursor-pointer hover:text-gray-300 text-[13px] font-medium">
          会社概要
        </div>
        <div className="cursor-pointer hover:text-gray-300 text-[13px] font-medium">
          ミッション
        </div>
      </div>

      <div className="mt-10">
        <div className="flex gap-4">
          <div className="cursor-pointer hover:text-gray-300 text-[10px]">
            利用規約
          </div>
          <div className="cursor-pointer hover:text-gray-300 text-[10px]">
            プライバシーポリシー
          </div>
        </div>

        <div className="cursor-pointer hover:text-gray-300 text-[10px]">
          情報セキュリティ方針
        </div>
      </div>
    </aside>
  );
}
