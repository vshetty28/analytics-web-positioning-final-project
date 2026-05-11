import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Fuel, Coffee, ShowerHead, Wifi, ArrowRight, Star, Truck, CreditCard, Bed } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Travel Centers America | Full-Service Highway Plazas Guide",
  description: "Find the best travel centers across America. Comprehensive guide to full-service highway plazas with fuel, food, showers, and amenities for all travelers.",
  keywords: ["best travel centers America", "highway travel plazas", "truck stops USA", "travel plaza amenities"],
  openGraph: {
    title: "Best Travel Centers America | Full-Service Highway Plazas Guide",
    description: "Comprehensive guide to full-service highway plazas with fuel, food, showers, and amenities.",
    type: "article",
  },
}

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Best Travel Centers America - Full-Service Highway Plazas",
	description: "Comprehensive guide to the best travel centers and truck stops across America.",
	author: { "@type": "Organization", name: "RestStopsUSA Editorial Team" },
	publisher: { "@type": "Organization", name: "RestStopsUSA" },
	datePublished: "2026-03-01",
	dateModified: "2026-05-11",
};

const travelCenterChains = [
  {
    name: "Buc-ee's",
    locations: "50+ locations",
    rating: 4.9,
    specialty: "Massive stores, famous restrooms, Texas BBQ",
    amenities: ["fuel", "food", "shopping", "restrooms"],
    description: "Texas-based chain known for the cleanest restrooms in America and world's largest convenience stores.",
  },
  {
    name: "Pilot Flying J",
    locations: "750+ locations",
    rating: 4.3,
    specialty: "Largest truck stop chain, comprehensive services",
    amenities: ["fuel", "food", "showers", "wifi", "parking"],
    description: "America's largest travel center network with extensive trucker amenities and loyalty programs.",
  },
  {
    name: "Love's Travel Stops",
    locations: "600+ locations",
    rating: 4.4,
    specialty: "Family-friendly, Godfather's Pizza",
    amenities: ["fuel", "food", "showers", "wifi"],
    description: "Family-owned chain known for clean facilities and consistent service nationwide.",
  },
  {
    name: "TA/Petro",
    locations: "270+ locations",
    rating: 4.2,
    specialty: "Full-service restaurants, extensive truck services",
    amenities: ["fuel", "food", "showers", "repair"],
    description: "Full-service travel centers with sit-down restaurants and comprehensive truck services.",
  },
  {
    name: "Wawa",
    locations: "950+ locations",
    rating: 4.5,
    specialty: "Fresh hoagies, quality convenience",
    amenities: ["fuel", "food", "coffee"],
    description: "East Coast favorite known for made-to-order hoagies and quality coffee.",
  },
  {
    name: "QuikTrip (QT)",
    locations: "900+ locations",
    rating: 4.6,
    specialty: "Fresh food, clean stores, competitive prices",
    amenities: ["fuel", "food", "restrooms"],
    description: "Midwest and South chain praised for cleanliness and fresh food options.",
  },
]

const amenityGuide = [
  { name: "24/7 Fuel", icon: Fuel, desc: "Diesel and gasoline available around the clock" },
  { name: "Food Courts", icon: Coffee, desc: "Multiple restaurant options under one roof" },
  { name: "Shower Facilities", icon: ShowerHead, desc: "Private showers for truckers and travelers" },
  { name: "Free WiFi", icon: Wifi, desc: "Internet access for work or entertainment" },
  { name: "Truck Parking", icon: Truck, desc: "Reserved spaces for commercial vehicles" },
  { name: "Loyalty Programs", icon: CreditCard, desc: "Earn points for fuel and purchases" },
]

const faqs = [
  {
    question: "What is the difference between a travel center and a truck stop?",
    answer: "While the terms are often used interchangeably, travel centers typically offer more amenities for all travelers including families, while truck stops focus primarily on commercial driver needs. Modern travel centers like Buc-ee's cater to everyone with extensive food options and shopping.",
  },
  {
    question: "Which travel center chain has the cleanest restrooms?",
    answer: "Buc-ee's is consistently rated as having the cleanest restrooms in America, with full-time attendants maintaining facilities around the clock. QuikTrip and Wawa are also known for exceptionally clean facilities.",
  },
  {
    question: "Can non-truckers use truck stop showers?",
    answer: "Yes! Most travel centers with shower facilities allow any paying customer to use them. Showers typically cost $12-15 and include a private room, towels, and toiletries. Some loyalty programs offer free showers with fuel purchases.",
  },
  {
    question: "Do travel centers allow overnight parking?",
    answer: "Many travel centers allow overnight parking, especially for commercial drivers. Policies vary by location—some have designated areas and time limits. Always check with staff and look for posted signs.",
  },
  {
    question: "Which travel center has the best food?",
    answer: "Buc-ee's is famous for their Texas BBQ brisket and fresh fudge. Wawa offers excellent made-to-order hoagies. TA/Petro locations feature full-service restaurants. Many Love's have Godfather's Pizza.",
  },
  {
    question: "How do travel center loyalty programs work?",
    answer: "Major chains like Pilot Flying J (myRewards Plus), Love's (My Love Rewards), and TA/Petro (UltraOne) offer points for fuel and purchases. Points can be redeemed for free showers, food, merchandise, and fuel discounts.",
  },
]

export default function TravelCentersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/best-travel-centers-america" />

      <Header />

      <main className="min-h-screen">
        <div className="bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
            <Breadcrumbs items={[{ name: "Best Travel Centers America" }]} />
          </div>
        </div>
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                Full-Service Highway Plazas
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Best Travel Centers America
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Your complete guide to America&apos;s best travel centers and truck stops. Find
                full-service facilities with fuel, food, showers, and everything you need
                for a comfortable journey.
              </p>
            </div>
          </div>
        </section>

        {/* Amenity Overview */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenityGuide.map((amenity) => (
                <div key={amenity.name} className="text-center p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <amenity.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-foreground">{amenity.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{amenity.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Center Chains */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Top Travel Center Chains
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {travelCenterChains.map((chain) => (
                <Card key={chain.name} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-semibold text-foreground text-xl">{chain.name}</h3>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{chain.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{chain.locations}</p>
                    <p className="text-xs text-primary font-medium mb-3">{chain.specialty}</p>
                    <p className="text-sm text-muted-foreground mb-4">{chain.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {chain.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="text-xs bg-muted px-2 py-1 rounded-full capitalize"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Choosing the Right Travel Center
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Today&apos;s travel centers offer far more than just fuel. Whether you&apos;re a long-haul
                trucker needing a hot shower, a family on vacation looking for a meal, or a business
                traveler needing WiFi, there&apos;s a travel center designed for your needs.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                For Commercial Drivers
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Pilot Flying J and TA/Petro lead the industry for professional drivers with
                dedicated truck parking, DEF at the pump, CAT scales, and comprehensive
                maintenance services. Their loyalty programs offer significant savings on
                fuel and amenities.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                For Families
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Buc-ee&apos;s and Love&apos;s excel at family-friendly travel. Clean restrooms, diverse
                food options, and unique shopping experiences make these stops destinations
                rather than just pit stops. Kids especially love Buc-ee&apos;s beaver mascot
                merchandise.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Regional Favorites
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li><strong>East Coast:</strong> Wawa and Sheetz offer superior food quality</li>
                <li><strong>Midwest &amp; South:</strong> QuikTrip provides consistent excellence</li>
                <li><strong>Texas &amp; Southeast:</strong> Buc-ee&apos;s sets the industry standard</li>
                <li><strong>Nationwide:</strong> Love&apos;s and Pilot offer reliable consistency</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-background px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="Travel Center FAQs" />
        </div>

        {/* Related Routes */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Explore More Guides
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Highway Rest Areas", href: "/best-highway-rest-areas", desc: "State-operated facilities" },
                { title: "Best Rest Stops on I-95", href: "/best-rest-stops-i-95", desc: "East Coast corridor" },
                { title: "Best Rest Stops on I-10", href: "/best-rest-stops-i-10", desc: "Southern cross-country" },
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
