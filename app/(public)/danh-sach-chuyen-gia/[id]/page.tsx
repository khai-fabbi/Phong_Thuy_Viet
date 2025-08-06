import React from "react"
import {
  ExpertArticles,
  ExpertProfile,
  ExpertProfileBanner,
} from "./_components"

const ExpertDetailPage = () => {
  return (
    <div className="container space-y-6 mb-16">
      <ExpertProfileBanner />
      <div className="grid grid-cols-4 gap-6">
        <div className="h-auto">
          <ExpertProfile />
        </div>
        <div className="col-span-3">
          <ExpertArticles />
        </div>
      </div>
    </div>
  )
}

export default ExpertDetailPage
