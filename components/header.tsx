export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-[#050042] text-white">
      <div className="flex items-center gap-2">
        <img src="Vector.svg" alt="XPIA logo" className="h-8 w-auto" />
        <span>XPIA</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="cursor-pointer flex items-center gap-1">
          JP
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
        <span className="cursor-pointer">サインアップ</span>
        <button className="rounded bg-[#3565C6] px-4 py-1 text-white hover:bg-[#2E56AD]">
          ログイン
        </button>
      </div>
    </header>
  );
}
