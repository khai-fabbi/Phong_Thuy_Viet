"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/useToast"
import {
  ArrowRight,
  Building,
  Calendar,
  CheckCircle,
  Clock,
  Home as HomeIcon,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react"
import Link from "next/link"
import { TopBanner } from "./_components"

export default function Home() {
  const toast = useToast()
  return (
    <div>
      {/* Hero Section */}
      <TopBanner />
    </div>
  )
}
