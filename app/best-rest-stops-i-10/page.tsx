import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Fuel, Coffee, ShowerHead, Wifi, ArrowRight, Star, Clock, Car, Thermometer } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Rest Stops on I-10 | Southern Cross-Country Highway Guide",
  description: "Discover the best rest stops on I-10 from California to Florida. Complete guide to rest areas, travel plazas, and highway amenities across the southern United States.",
  keywords: ["best rest stops I-10", "I-10 rest areas", "southern rest stops", "I-10 travel plazas"],
  openGraph: {
    title: "Best Rest Stops on I-10 | Southern Cross-Country Highway Guide",
    description: "Complete guide to rest areas, travel plazas, and highway amenities along the I-10 southern corridor.",
    type: "article",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Rest Stops on I-10 - Complete Southern Highway Guide",
  description: "Comprehensive guide to the best rest stops along Interstate 10 from California to Florida.",
  author: { "@type": "Organization", name: "RestStopsUSA Editorial Team" },
  publisher: { "@type": "Organization", name: "RestStopsUSA" },
  datePublished: "2024-02-15",
  dateModified: "2024-12-01",
}

const restStops = [
  {
    name: "Desert Hills Premium Outlets Area",
    location: "Cabazon, CA",
    mileMarker: "MM 117",
    rating: 4.4,
    amenities: ["fuel", "food", "shopping", "restrooms"],
    description: "Shopping destination with nearby rest facilities and dining options.",
  },
  {
    name: "Arizona Welcome Center",
    location: "Ehrenberg, AZ",
    mileMarker: "MM 1",
    rating: 4.2,
    amenities: ["restrooms", "wifi", "information", "picnic"],
    description: "State welcome center with tourism information and desert views.",
  },
  {
    name: "Texas Travel Information Center",
    location: "Anthony, TX",
    mileMarker: "MM 0",
    rating: 4.5,
    amenities: ["restrooms", "wifi", "information", "picnic"],
    description: "Full-service welcome center at the New Mexico-Texas border.",
  },
  {
    name: "Buc-ee&apos;s New Braunfels",
    location: "New Braunfels, TX",
    mileMarker: "Near MM 182",
    rating: 4.9,
    amenities: ["fuel", "food", "shopping", "restrooms"],
    description: "World&apos;s largest convenience store with legendary clean restrooms and BBQ.",
  },
  {
    name: "Louisiana Welcome Center",
    location: "Vinton, LA",
    mileMarker: "MM 4",
    rating: 4.3,
    amenities: ["restrooms", "wifi", "information", "vending"],
    description: "Gateway to Louisiana with Cajun hospitality and travel assistance.",
  },
  {
    name: "Florida Welcome Center",
    location: "Pensacola, FL",
    mileMarker: "MM 1",
    rating: 4.4,
    amenities: ["restrooms", "wifi", "information", "picnic"],
    description: "Entry point to the Sunshine State with beach information.",
  },
]

const stateGuides = [
  { state: "California", highlights: "Desert oasis stops and outlet shopping" },
  { state: "Arizona", highlights: "Desert rest areas with shade structures" },
  { state: "New Mexico", highlights: "Scenic stops with Southwest character" },
  { state: "Texas", highlights: "Legendary Buc-ee&apos;s and sprawling rest areas" },
  { state: "Louisiana", highlights: "Cajun culture welcome centers" },
  { state: "Mississippi", highlights: "Gulf Coast rest facilities" },
  { state: "Alabama", highlights: "Southern hospitality stops" },
  { state: "Florida", highlights: "Beach-themed welcome centers" },
]

const faqs = [
  {
    question: "How long does it take to drive I-10 coast to coast?",
    answer: "Interstate 10 spans approximately 2,460 miles from Santa Monica, CA to Jacksonville, FL. Driving time is roughly 36-40 hours without stops, but we recommend planning 4-5 days with proper rest stops for a safe and enjoyable journey.",
  },
  {
    question: "What are the best Buc-ee&apos;s locations on I-10?",
    answer: "The most notable Buc-ee&apos;s on I-10 include New Braunfels, TX (world&apos;s largest), Luling, TX, and multiple locations across Texas. These mega travel centers offer exceptional facilities, food, and fuel prices.",
  },
  {
    question: "Are there rest stops in the I-10 desert sections?",
    answer: "Yes, Arizona and California maintain rest areas in desert sections, though they may be spaced 50-100 miles apart. Always carry extra water, especially in summer when temperatures exceed 110°F.",
  },
  {
    question: "Which I-10 rest stops have truck parking?",
    answer: "Major truck stops along I-10 include Pilot Flying J, Love&apos;s, and TA/Petro locations throughout Texas, New Mexico, and Arizona. These offer ample truck parking, showers, and 24-hour services.",
  },
  {
    question: "What should I know about driving I-10 through Texas?",
    answer: "Texas has the longest stretch of I-10 at nearly 900 miles. Speed limits reach 80 mph in some areas. Rest stops are plentiful, but distances between cities in West Texas can exceed 100 miles.",
  },
  {
    question: "Are there scenic stops along I-10?",
    answer: "Yes! Highlights include the Arizona desert landscapes, Texas Hill Country near Kerrville, the bayous of Louisiana, and Gulf Coast beaches in Mississippi and Florida.",
  },
]

const amenityIcons: Record<string, typeof Fuel> = {
  fuel: Fuel,
  food: Coffee,
  wifi: Wifi,
  showers: ShowerHead,
  restrooms: MapPin,
  information: MapPin,
  vending: Coffee,
  picnic: MapPin,
  shopping: MapPin,
}

export default function I10Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/best-rest-stops-i-10" />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Best Rest Stops on I-10" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                Southern Cross-Country Guide
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Best Rest Stops on I-10
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Your comprehensive guide to rest areas, service plazas, and travel centers along 
                Interstate 10 from California to Florida. Spanning 2,460 miles through 8 states 
                across America&apos;s southern border.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-background/70">
                <span className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  2,460 Miles
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  8 States
                </span>
                <span className="flex items-center gap-2">
                  <Thermometer className="h-4 w-4" />
                  Desert Climate
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Updated Dec 2024
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Rest Stops */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Top-Rated Rest Stops on I-10
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {restStops.map((stop) => (
                <Card key={stop.name} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground text-lg">{stop.name}</h3>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{stop.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{stop.location}</p>
                    <p className="text-xs text-muted-foreground mb-4">Mile Marker: {stop.mileMarker}</p>
                    <p className="text-sm text-muted-foreground mb-4">{stop.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stop.amenities.slice(0, 4).map((amenity) => {
                        const Icon = amenityIcons[amenity] || MapPin
                        return (
                          <span
                            key={amenity}
                            className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
                          >
                            <Icon className="h-3 w-3" />
                            {amenity}
                          </span>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* State-by-State Guide */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              State-by-State I-10 Rest Stop Guide
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stateGuides.map((guide) => (
                <div
                  key={guide.state}
                  className="bg-card p-4 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <h3 className="font-semibold text-foreground">{guide.state}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{guide.highlights}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Planning Your I-10 Cross-Country Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Interstate 10 offers one of America&apos;s most diverse driving experiences, from the 
                Pacific beaches of Santa Monica through the Sonoran Desert, across the vast Texas 
                plains, through the Louisiana bayous, and ending at Florida&apos;s Atlantic coast.
              </p>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Desert Driving Safety Tips
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The I-10 desert sections through Arizona and California require special preparation. 
                Summer temperatures regularly exceed 110°F (43°C). Always carry at least one gallon 
                of water per person, check your vehicle&apos;s cooling system before departure, and never 
                pass a rest stop with less than a quarter tank of gas.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                The Texas Experience
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Texas accounts for nearly 900 miles of I-10—more than a third of the total route. 
                The state features some of America&apos;s best rest stops, including the legendary Buc-ee&apos;s 
                chain. Don&apos;t miss the opportunity to experience these Texas-sized travel centers with 
                their famous brisket, beaver nuggets, and impeccably clean restrooms.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Recommended Stopping Schedule
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>Day 1:</strong> Los Angeles to Phoenix (370 mi) - Stop at Quartzsite, AZ</li>
                <li><strong>Day 2:</strong> Phoenix to El Paso (430 mi) - Multiple rest areas in AZ/NM</li>
                <li><strong>Day 3:</strong> El Paso to San Antonio (550 mi) - Buc-ee&apos;s in Junction/Kerrville</li>
                <li><strong>Day 4:</strong> San Antonio to New Orleans (540 mi) - Louisiana Welcome Center</li>
                <li><strong>Day 5:</strong> New Orleans to Jacksonville (570 mi) - Gulf Coast rest stops</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-muted px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="I-10 Rest Stop FAQs" />
        </div>

        {/* Related Routes */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Explore More Routes
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Rest Stops on I-95", href: "/best-rest-stops-i-95", desc: "East Coast corridor guide" },
                { title: "Best Highway Rest Areas", href: "/best-highway-rest-areas", desc: "State-operated facilities" },
                { title: "Best Travel Centers America", href: "/best-travel-centers-america", desc: "Full-service highway plazas" },
              ].map((route) => (
                <Link key={route.href} href={route.href} className="group">
                  <Card className="h-full bg-card border-border hover:border-primary/50 transition-all">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {route.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{route.desc}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-primary">
                        View Guide
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
