export default function Maincontent() {
  return (
    <main>
      {/* hero */}
      <section className="bg-[url('/hero-background.svg')] bg-cover bg-center h-screen flex items-center justify-center text-white">
        <div className="text-center max-w-4xl px-6">
          <h1 className="text-5xl font-bold mb-8">
            あなたの情報を、
            <br />
            たった6桁のキーで一括管理。
          </h1>
          <p className="text-base font-light mb-28">
            XPIAは、オンラインでの個人情報入力を劇的に簡素化し、あなたのデジタルライフをより安全でスムーズにします。
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              個人で始める
            </button>
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              法人で始める
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#050042] px-6 py-3 rounded-lg">
              ログイン
            </button>
          </div>
        </div>
      </section>

      {/* value */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            XPIAが提供する価値
          </h2>

          <div className="grid grid-cols-3 gap-8">
            {/* カード1 */}
            <div className="text-center">
              <img src="/icon1.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">
                人力の手間を劇的に削減
              </h3>
              <p className="text-gray-600 text-sm">
                オンラインフォームでの住所や連絡先入力を、たった6桁のキーで完了させます。もう面倒な入力作業は不要です。
              </p>
            </div>

            {/* カード2 */}
            <div className="text-center">
              <img src="/icon2.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">
                強固なセキュリティ
              </h3>
              <p className="text-gray-600 text-sm">
                業界の国際規格を満たした高い安全性により、安心して個人データをご利用いただけます。高度な暗号化技術で情報を守ります。
              </p>
            </div>

            {/* カード3 */}
            <div className="text-center">
              <img src="/icon3.svg" alt="" className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-4 text-black">
                データの一括管理
              </h3>
              <p className="text-gray-600 text-sm">
                情報サイトや管理ツールに散在していた個人情報・書類・支払い情報を一箇所で管理。必要な時にすぐにアクセスできます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* howto */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            XPIAの使い方
          </h2>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {/* STEP1 */}
            <div className="text-center">
              <p className="text-[#3969CD] text-sm font-bold mb-4">STEP 1</p>
              <div className="bg-white rounded-lg h-48 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-black">
                アカウント登録
              </h3>
              <p className="text-gray-600 text-sm">
                XPIAアカウントを無料で作成し、あなたの個人情報集約キーを取得します。
              </p>
            </div>

            {/* STEP2 */}
            <div className="text-center">
              <p className="text-[#3969CD] text-sm font-bold mb-4">STEP 2</p>
              <div className="bg-white rounded-lg h-48 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-black">
                提携サイトと連携
              </h3>
              <p className="text-gray-600 text-sm">
                XPIA提携サイトで、あなたの6桁のキーを入力。初回のみ簡単な連携設定を行います。
              </p>
            </div>

            {/* STEP3 */}
            <div className="text-center">
              <p className="text-[#3969CD] text-sm font-bold mb-4">STEP 3</p>
              <div className="bg-white rounded-lg h-48 mb-6"></div>
              <h3 className="text-xl font-bold mb-4 text-black">
                簡単入力・安全管理
              </h3>
              <p className="text-gray-600 text-sm">
                次回からは、キー入力だけで自動的に情報が連携され、安全に管理できます。
              </p>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              個人で始める
            </button>
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              法人で始める
            </button>
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            お客様の声
          </h2>

          <div className="flex items-center gap-8 mb-12">
            {/* 左矢印 */}
            <button className="text-gray-400 hover:text-gray-600 text-3xl">
              &lt;
            </button>

            {/* レビューカード */}
            <div className="grid grid-cols-2 gap-8 flex-1">
              {/* カード1 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#3969CD] text-xl mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  オンラインでの登録が本当に楽になりました！以前は毎回住所を入力するのが面倒でしたが、XPIAのおかげで数秒で完了します。
                </p>
                <div className="flex items-center gap-3">
                  <img src="/user1.svg" alt="" />
                  <p className="text-sm text-gray-700">山田 太郎 (会社員)</p>
                </div>
              </div>

              {/* カード2 */}
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <div className="text-[#3969CD] text-xl mb-4">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  セキュリティ面が心配でしたが、XPIAは具体的な対策を明示しているので安心して使えています。データの一元管理も便利です。
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src="/user1.svg"
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="text-sm text-gray-700">
                    佐藤 花子 (IT企業 CEO)
                  </p>
                </div>
              </div>
            </div>

            {/* 右矢印 */}
            <button className="text-gray-400 hover:text-gray-600 text-3xl">
              &gt;
            </button>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              他のお客様の声を見る
            </button>
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-black">
            Q&A
          </h2>
          <div className="space-y-6 mb-12">
            {/* 質問1 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-black">
                個人情報集約キーを忘れてしまいました
              </h3>
              <p className="text-gray-600 text-sm">
                会員ページから再発行が可能です。セキュリティのため、本人確認が必要となります。
              </p>
            </div>

            {/* 質問2 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-black">
                提携サイトは今後増えますか？
              </h3>
              <p className="text-gray-600 text-sm">
                はい、日々新しい提携サイトの追加を進めております。お知らせページで最新情報をご確認いただけます。
              </p>
            </div>

            {/* 質問3 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-black">
                利用料金はかかりますか？
              </h3>
              <p className="text-gray-600 text-sm">
                基本的な個人情報集約機能は無料でご利用いただけます。一部の高度な機能やAPI利用には有料プランがございます。
              </p>
            </div>

            {/* 質問4 */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-black">
                アカウントを削除したいのですが
              </h3>
              <p className="text-gray-600 text-sm">
                会員ページよりアカウント削除手続きが可能です。削除すると全てのデータが失われますのでご注意ください。
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-16 py-3 rounded-lg text-white">
              全てを見る
            </button>
          </div>
        </div>
      </section>

      {/* 様々なサイトで利用可能 */}
      <section className="py-20 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            様々なサイトで利用可能
          </h2>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="bg-[#EFF3FD] px-8 py-10 rounded-lg text-sm text-gray-700">
              ECサイトA
            </span>
            <span className="bg-[#EFF3FD] px-8 py-10 rounded-lg text-sm text-gray-700">
              旅行サイトB
            </span>
            <span className="bg-[#EFF3FD] px-8 py-10 rounded-lg text-sm text-gray-700">
              公共サービスC
            </span>
            <span className="bg-[#EFF3FD] px-8 py-10 rounded-lg text-sm text-gray-700">
              金融サイトD
            </span>
            <span className="bg-[#EFF3FD] px-8 py-10 rounded-lg text-sm text-gray-700">
              エンタメサイトE
            </span>
          </div>

          <div className="flex justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-6 py-3 rounded-lg text-white">
              対応サイト一覧を見る
            </button>
          </div>
        </div>
      </section>

      {/* 今すぐXPIAで、新しいオンライン体験を。 */}
      <section className="bg-[url('/hero-background.svg')] bg-cover bg-center py-32 text-white">
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">
            今すぐXPIAで、新しいオンライン体験を。
          </h2>
          <p className="text-lg mb-8">
            簡単、安全、そしてスマートに。あなたのデジタルライフをXPIAが変革します。
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-12 py-3 rounded-lg text-white">
              個人で始める
            </button>
            <button className="bg-[#3969CD] hover:bg-[#2E56AD] px-12 py-3 rounded-lg text-white">
              法人で始める
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
