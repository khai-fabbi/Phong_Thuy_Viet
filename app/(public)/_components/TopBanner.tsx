import { Banner } from "@/components/common"

const TopBanner = () => {
  return (
    <section>
      <Banner />
      <div className="overflow-hidden bg-primary backdrop-blur-sm py-4">
        <div
          className="text-white text-4xl font-semibold whitespace-nowrap py-4 animate-marquee"
          style={{
            animationDuration: `30s`,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        >
          <span className="inline-block px-4">
            🌟 Chào mừng đến với Phong Thủy Việt - Nơi chia sẻ kiến thức phong
            thủy chuyên nghiệp 🌟
          </span>
          <span className="inline-block px-4">
            🌟 Chào mừng đến với Phong Thủy Việt - Nơi chia sẻ kiến thức phong
            thủy chuyên nghiệp 🌟
          </span>
        </div>
      </div>
    </section>
  )
}

export default TopBanner
