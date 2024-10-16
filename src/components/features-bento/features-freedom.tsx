export function FeatureFreedom() {
  return (
    <div className="absolute flex max-h-[400px] min-h-[400px] w-full flex-col overflow-hidden rounded-lg p-6 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]">
      <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-lg bg-[#1e1e1e] font-mono text-white">
        <div className="flex items-center bg-[#2d2d2d] px-4 py-2">
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ff605c]" />
          <div className="mr-2 h-3 w-3 rounded-full bg-[#ffbd44]" />
          <div className="mr-2 h-3 w-3 rounded-full bg-[#00ca4e]" />
          <span className="ml-auto text-sm text-[#9e9e9e]">Ututo LTS</span>
        </div>
        <div className="overflow-auto px-4 py-2">
          <div className="text-[#9e9e9e]">
            <span>ututo@ututo:</span>
            <span className="text-white">~$</span>
            <span className="ml-2 text-[#00ca4e]">uname</span>
            <span className="ml-2 text-[#ffbd44]">-a</span>
          </div>
          <div className="mt-2">
            <div className="text-[#9e9e9e]">
              Linux ututo 6.5.0-41-generic #41~11-Ututo SMP PREEMPT_DYNAMIC Mon Jun 3 11:32:55 UTC 2 x86_64 x86_64
              x86_64 GNU/Linux
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
