"use client"

import { useState, useSyncExternalStore } from "react"
import { Circle, Square } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import { OverviewTab } from "@/components/overview-tab"
import { DirectionsTab } from "@/components/directions-tab"
import { RecipesTab } from "@/components/recipes-tab"
import { ReviewsTab } from "@/components/reviews-tab"
import { isSummerMonth } from "@/lib/season"

const HEAT_BUBBLES = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: (index * 37 + 7) % 96,
  delay: (index % 4) * 0.12,
  duration: 1.8 + (index % 3) * 0.25,
  size: 18 + ((index * 11) % 28),
  color: ["#facc15", "#dc2626", "#f97316"][index % 3],
}))

const subscribeToSeason = () => () => {}
const getSummerSnapshot = () => isSummerMonth(new Date().getMonth())
const getServerSummerSnapshot = () => false

export default function BauhausBrutalism() {
  const [darkMode, setDarkMode] = useState(false)
  const [heatReplay, setHeatReplay] = useState(0)
  const isSummer = useSyncExternalStore(subscribeToSeason, getSummerSnapshot, getServerSummerSnapshot)

  const toggleDarkMode = () => {
    setDarkMode(current => !current)
    if (isSummer) {
      setHeatReplay(current => current + 1)
    }
  }

  return (
    <div className={`min-h-screen font-mono ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground min-h-screen">
        {isSummer ? (
          <div key={heatReplay} className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
            {HEAT_BUBBLES.map(bubble => (
              <span
                key={bubble.id}
                className="heat-bubble"
                style={{
                  left: `${bubble.left}%`,
                  animationDelay: `${bubble.delay}s`,
                  animationDuration: `${bubble.duration}s`,
                  width: `${bubble.size}px`,
                  height: `${bubble.size}px`,
                  backgroundColor: bubble.color,
                }}
              />
            ))}
          </div>
        ) : null}
        {/* Navigation */}
        <header className="sticky top-0 z-40 w-full border-b-8 border-black bg-primary">
          <div className="container flex h-16 md:h-20 items-center justify-between">
            <div className="flex items-center gap-2 md:gap-4">
              <Image
                src="/logo.png"
                alt="Swamp Ass and Salt Rims Logo"
                width={104}
                height={104}
                className="h-16 w-16 md:h-20 md:w-20 object-contain"
              />
              <span className="font-black text-xl md:text-2xl tracking-tighter text-white hidden sm:block">
                SWAMP ASS & SALT RIMS
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
                className="h-10 w-10 bg-yellow-500 border-4 border-black flex items-center justify-center hover:bg-yellow-400 transition-colors"
              >
                {darkMode ? <Circle className="h-5 w-5" /> : <Square className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </header>

        <main className="container py-8 md:py-12">
          <MargaritaMachineTabs isSummer={isSummer} />
        </main>
      </div>
    </div>
  )
}

function MargaritaMachineTabs({ isSummer }: { isSummer: boolean }) {
  return (
    <Tabs defaultValue="overview" className="space-y-8 md:space-y-12">
      <div className="flex justify-center">
        <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 h-auto bg-transparent gap-2 md:gap-4">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
      bg-white border-4 border-black text-base md:text-lg font-bold h-14 md:h-16"
          >
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger
            value="directions"
            className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
      bg-white border-4 border-black text-base md:text-lg font-bold h-14 md:h-16"
          >
            DIRECTIONS
          </TabsTrigger>
          <TabsTrigger
            value="recipes"
            className="data-[state=active]:bg-red-600 data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
      bg-white border-4 border-black text-base md:text-lg font-bold h-14 md:h-16"
          >
            RECIPES
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=active]:border-4 data-[state=active]:shadow-brutal
      bg-white border-4 border-black text-base md:text-lg font-bold h-14 md:h-16"
          >
            REVIEWS
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview">
        <OverviewTab />
      </TabsContent>
      <TabsContent value="directions">
        <DirectionsTab />
      </TabsContent>
      <TabsContent value="recipes">
        <RecipesTab isSummer={isSummer} />
      </TabsContent>
      <TabsContent value="reviews">
        <ReviewsTab />
      </TabsContent>
    </Tabs>
  )
}
