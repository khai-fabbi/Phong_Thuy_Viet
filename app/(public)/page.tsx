"use client"

import { useToast } from "@/hooks/useToast"
import {
  AcademicsAndResearch,
  AffiliateOrganization,
  ArticleContainer,
  ContactSection,
  EventContainer,
  NewsContainer,
  Overview,
  SuggestedExperts,
  TopBanner,
  TranningCourseContainer,
} from "./_components"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <TopBanner />
      <div className="container py-6">
        <div className="grid grid-cols-2 gap-6">
          <Overview />
          <NewsContainer />
          <div className="col-span-2">
            <ArticleContainer />
          </div>

          <div className="col-span-2 ">
            <SuggestedExperts />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6">
          <TranningCourseContainer />
          <EventContainer />
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6">
          <AcademicsAndResearch />
          <AcademicsAndResearch />
          <AffiliateOrganization />
        </div>
      </div>
      <ContactSection />
    </div>
  )
}
