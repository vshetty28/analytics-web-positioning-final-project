import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Fuel, Coffee, ShowerHead, Wifi, ArrowRight, Star, Clock, Car } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Rest Stops on I-95 | East Coast Highway Rest Areas Guide",
  description: "Discover the best rest stops on I-95 from Maine to Florida. Complete guide to rest areas, travel plazas, and highway amenities along the East Coast corridor.",
  keywords: ["best rest stops I-95", "I-95 rest areas", "East Coast rest stops", "I-95 travel plazas"],
  openGraph: {
    title: "Best Rest Stops on I-95 | East Coast Highway Rest Areas Guide",
    description: "Complete guide to rest areas, travel plazas, and highway amenities along the I-95 East Coast corridor.",
    type: "article",
  },
}

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Best Rest Stops on I-95 - Complete East Coast Highway Guide",
	description: "Comprehensive guide to the best rest stops along Interstate 95 from Maine to Florida.",
	author: { "@type": "Organization", name: "RestStopsUSA Editorial Team" },
	publisher: { "@type": "Organization", name: "RestStopsUSA" },
	datePublished: "2026-03-01",
	dateModified: "2026-05-11",
};

const restStops = [
  {
    name: "Maine Turnpike Service Plazas",
    location: "Multiple locations, ME",
    mileMarker: "Various",
    rating: 4.5,
    amenities: ["fuel", "food", "wifi", "restrooms"],
    description: "Well-maintained service plazas featuring local Maine vendors and scenic views.",
  },
  {
    name: "New Hampshire Welcome Center",
    location: "Seabrook, NH",
    mileMarker: "MM 1",
    rating: 4.3,
    amenities: ["restrooms", "wifi", "information", "vending"],
    description: "State welcome center with tourism information and clean facilities.",
  },
  {
    name: "Connecticut Service Plazas",
    location: "Multiple locations, CT",
    mileMarker: "Various",
    rating: 4.2,
    amenities: ["fuel", "food", "wifi", "restrooms"],
    description: "Modernized service areas with diverse dining options and EV charging.",
  },
  {
    name: "Maryland House Travel Plaza",
    location: "Aberdeen, MD",
    mileMarker: "MM 82",
    rating: 4.6,
    amenities: ["fuel", "food", "wifi", "restrooms", "showers"],
    description: "Award-winning travel plaza with extensive food court and amenities.",
  },
  {
    name: "South of the Border",
    location: "Dillon, SC",
    mileMarker: "MM 1",
    rating: 4.0,
    amenities: ["fuel", "food", "shopping", "lodging"],
    description: "Iconic roadside attraction with restaurants, shops, and entertainment.",
  },
  {
    name: "Florida Welcome Center",
    location: "Yulee, FL",
    mileMarker: "MM 380",
    rating: 4.4,
    amenities: ["restrooms", "wifi", "information", "picnic"],
    description: "Gateway to Florida with tourism assistance and rest facilities.",
  },
]

const stateGuides = [
  { state: "Maine", highlights: "Scenic turnpike plazas with local cuisine" },
  { state: "New Hampshire", highlights: "Welcome centers with White Mountain info" },
  { state: "Massachusetts", highlights: "Service areas near Boston" },
  { state: "Connecticut", highlights: "Modernized plazas with diverse dining" },
  { state: "New York", highlights: "Multiple rest areas through NYC corridor" },
  { state: "New Jersey", highlights: "Turnpike service areas every 30 miles" },
  { state: "Delaware", highlights: "Compact state with well-placed stops" },
  { state: "Maryland", highlights: "Award-winning travel plazas" },
  { state: "Virginia", highlights: "Scenic rest areas with history" },
  { state: "North Carolina", highlights: "Welcome centers at state line" },
  { state: "South Carolina", highlights: "Iconic attractions like South of the Border" },
  { state: "Georgia", highlights: "Peach state welcome centers" },
  { state: "Florida", highlights: "Multiple rest areas through the state" },
]

const faqs = [
  {
    question: "How many rest stops are on I-95?",
    answer: "Interstate 95 features over 100 rest stops, service plazas, and welcome centers along its 1,920-mile route from Maine to Florida. The frequency varies by state, with some states offering rest areas every 30-50 miles.",
  },
  {
    question: "Are I-95 rest stops safe at night?",
    answer: "Most I-95 rest stops are well-lit and patrolled, especially state-operated welcome centers and major service plazas. For overnight stops, commercial truck stops along I-95 generally offer better security with 24-hour operations.",
  },
  {
    question: "Can I sleep at I-95 rest stops?",
    answer: "Policies vary by state. Most allow 2-4 hours of rest for safety purposes, but overnight sleeping is typically prohibited at state rest areas. Check individual state regulations or use designated truck stops for extended stops.",
  },
  {
    question: "What are the best I-95 rest stops for families?",
    answer: "Family-friendly options include the Maryland House Travel Plaza with its extensive food court, Connecticut service plazas with diverse dining, and the Florida Welcome Centers with picnic areas and playgrounds.",
  },
  {
    question: "Which I-95 rest stops have showers?",
    answer: "Truck stops along I-95 like Pilot Flying J and Love's offer shower facilities. Major service plazas in New Jersey and Maryland also have shower amenities available for all travelers.",
  },
  {
    question: "Are there EV charging stations at I-95 rest stops?",
    answer: "Yes, many I-95 rest stops now feature EV charging stations, particularly in the Northeast corridor. Connecticut, New York, and New Jersey service plazas have added extensive charging infrastructure.",
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
  lodging: MapPin,
}

export default function I95Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/best-rest-stops-i-95" />

      <Header />

      <main className="min-h-screen">
        <div className="bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={[{ name: "Best Rest Stops on I-95" }]} />
          </div>
        </div>
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                East Coast Corridor Guide
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Best Rest Stops on I-95
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Your comprehensive guide to rest areas, service plazas, and travel centers along
                Interstate 95 from Maine to Florida. Covering 1,920 miles through 15 states on
                America&apos;s busiest highway corridor.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-background/70">
                <span className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  1,920 Miles
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  15 States
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Updated May 2026
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Top Rest Stops */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Top-Rated Rest Stops on I-95
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
              State-by-State I-95 Rest Stop Guide
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
                Planning Your I-95 Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Interstate 95 is the main north-south highway along the Eastern Seaboard, connecting
                major cities from Boston to Miami. With over 1,900 miles of road, planning your rest
                stops is essential for a safe and comfortable journey.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Rest Stop Frequency by Region
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Northeast (ME-NJ):</strong> Service plazas every 20-40 miles on toll roads,
                with extensive food and fuel options. The New Jersey Turnpike features some of the
                largest service areas on the East Coast.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Mid-Atlantic (DE-VA):</strong> State rest areas every 50-60 miles with
                basic amenities. The Maryland House and Chesapeake House are notable exceptions
                with full-service facilities.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Southeast (NC-FL):</strong> Welcome centers at state borders with rest
                areas spaced every 40-70 miles. Commercial truck stops fill gaps between state facilities.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Tips for I-95 Travelers
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Plan stops around major metro areas to avoid peak traffic</li>
                <li>The NJ Turnpike service areas offer the most comprehensive amenities</li>
                <li>Download offline maps for areas with spotty cell coverage</li>
                <li>Consider the I-95 toll costs when planning your budget</li>
                <li>Keep cash handy for some older toll plazas</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-muted px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="I-95 Rest Stop FAQs" />
        </div>

        {/* Related Routes */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Explore More Routes
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Rest Stops on I-10", href: "/best-rest-stops-i-10", desc: "Coast-to-coast southern route" },
                { title: "Best Road Trip Stops USA", href: "/best-road-trip-stops-usa", desc: "Scenic attractions nationwide" },
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
