import { Layout } from "@/components/layout"

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
