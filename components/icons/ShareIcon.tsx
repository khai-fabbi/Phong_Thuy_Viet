import { IconSvgProps } from "@/types"

export default function ShareIcon({
  size = 21,
  width = 21,
  height = 21,
  ...props
}: IconSvgProps) {
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.1492 6.07502V2.02502L19.2367 9.11252L12.1492 16.2V12.15C7.08672 12.15 3.54297 13.6688 1.01172 17.2125L1.82172 14.175L2.02422 13.77C2.83631 11.6772 4.21231 9.85035 5.99955 8.49204C7.7868 7.13374 9.91541 6.29712 12.1492 6.07502Z"
        fill="currentColor"
      />
    </svg>
  )
}
