import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Camera, Mountain, Sunset, TreePine, ArrowRight, Star, Compass } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Road Trip Stops USA | Scenic Attractions & Must-See Destinations",
  description: "Discover the best road trip stops across America. Unique attractions, scenic overlooks, and must-visit destinations for memorable journeys.",
  keywords: ["best road trip stops USA", "scenic road trip destinations", "unique roadside attractions", "American road trip guide"],
  openGraph: {
    title: "Best Road Trip Stops USA | Scenic Attractions & Must-See Destinations",
    description: "Unique attractions, scenic overlooks, and must-visit destinations for memorable American road trips.",
    type: "article",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Road Trip Stops USA - Scenic Attractions Guide",
  description: "Comprehensive guide to the best road trip stops and attractions across America.",
  author: { "@type": "Organization", name: "RestStopsUSA Editorial Team" },
  publisher: { "@type": "Organization", name: "RestStopsUSA" },
  datePublished: "2024-03-01",
  dateModified: "2024-12-01",
}

const featuredStops = [
  {
    name: "Cadillac Ranch",
    location: "Amarillo, TX",
    route: "I-40",
    rating: 4.6,
    type: "Roadside Attraction",
    description: "Iconic art installation of half-buried Cadillacs covered in graffiti.",
  },
  {
    name: "Grand Canyon Skywalk",
    location: "Grand Canyon West, AZ",
    route: "Near I-40/US-93",
    rating: 4.8,
    type: "Natural Wonder",
    description: "Glass-bottom walkway extending over the Grand Canyon.",
  },
  {
    name: "Wall Drug",
    location: "Wall, SD",
    route: "I-90",
    rating: 4.4,
    type: "Roadside Attraction",
    description: "Famous roadside shop with free ice water and Western memorabilia.",
  },
  {
    name: "Bonneville Salt Flats",
    location: "Wendover, UT",
    route: "I-80",
    rating: 4.7,
    type: "Natural Wonder",
    description: "Vast white salt flats perfect for unique photos.",
  },
  {
    name: "The Thing",
    location: "Dragoon, AZ",
    route: "I-10",
    rating: 4.0,
    type: "Mystery Attraction",
    description: "Mysterious roadside attraction that asks 'What is it?'",
  },
  {
    name: "Meteor Crater",
    location: "Winslow, AZ",
    route: "I-40",
    rating: 4.5,
    type: "Natural Wonder",
    description: "Best-preserved meteorite impact site on Earth.",
  },
]

const regionalGuides = [
  {
    region: "Pacific Coast",
    highlights: ["Highway 1 scenic overlooks", "Redwood forests", "Oregon coast views"],
    icon: Sunset,
  },
  {
    region: "Southwest Desert",
    highlights: ["Route 66 landmarks", "National park vistas", "Desert oases"],
    icon: Mountain,
  },
  {
    region: "Rocky Mountains",
    highlights: ["Alpine passes", "Hot springs", "Wildlife viewing"],
    icon: TreePine,
  },
  {
    region: "Great Plains",
    highlights: ["Quirky roadside attractions", "Historic sites", "Prairie landscapes"],
    icon: Compass,
  },
  {
    region: "East Coast",
    highlights: ["Historic landmarks", "Coastal drives", "Fall foliage routes"],
    icon: Camera,
  },
  {
    region: "Deep South",
    highlights: ["Plantation tours", "Cajun country", "Civil rights sites"],
    icon: MapPin,
  },
]

const faqs = [
  {
    question: "What are the most iconic road trip stops in America?",
    answer: "Iconic American road trip stops include Route 66 landmarks like Cadillac Ranch, natural wonders like the Grand Canyon and Yellowstone, quirky attractions like Wall Drug and the World's Largest Ball of Twine, and historic sites like the Gateway Arch.",
  },
  {
    question: "How do I plan stops for a cross-country road trip?",
    answer: "Plan stops every 2-3 hours of driving, mixing practical rest stops with interesting attractions. Research destinations along your route, book accommodations in advance during peak season, and build in flexible time for unexpected discoveries.",
  },
  {
    question: "What are the best scenic drives in the USA?",
    answer: "Top scenic drives include Pacific Coast Highway (CA), Blue Ridge Parkway (VA/NC), Going-to-the-Sun Road (MT), Overseas Highway (FL), and the Columbia River Gorge (OR/WA). Each offers unique landscapes and memorable photo opportunities.",
  },
  {
    question: "Are roadside attractions worth stopping for?",
    answer: "Absolutely! Roadside attractions are part of American road trip culture. Many are free or inexpensive, provide a fun break from driving, and create memorable experiences. Classics like the World's Largest Prairie Dog or the Corn Palace are uniquely American.",
  },
  {
    question: "What should I pack for a road trip with multiple stops?",
    answer: "Pack a cooler for snacks and drinks, comfortable shoes for walking, camera equipment, weather-appropriate layers, first aid kit, paper maps as backup, and entertainment for passengers. Consider a National Parks pass if visiting multiple parks.",
  },
  {
    question: "How can I find hidden gem stops along my route?",
    answer: "Use apps like Roadtrippers or Atlas Obscura, ask locals at rest stops, check social media hashtags for your route, and read travel blogs from recent travelers. Sometimes the best stops are the unplanned ones you discover along the way.",
  },
]

export default function RoadTripPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/best-road-trip-stops-usa" />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Best Road Trip Stops USA" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                Scenic Attractions & Destinations
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Best Road Trip Stops USA
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Discover the must-see attractions, scenic overlooks, and unique destinations that 
                make American road trips unforgettable. From iconic landmarks to hidden gems, 
                plan your perfect journey across the nation.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Stops */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Must-Visit Road Trip Destinations
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredStops.map((stop) => (
                <Card key={stop.name} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded">
                        {stop.type}
                      </span>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{stop.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mt-3">{stop.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{stop.location}</p>
                    <p className="text-xs text-muted-foreground">Route: {stop.route}</p>
                    <p className="text-sm text-muted-foreground mt-3">{stop.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Guides */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Explore by Region
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {regionalGuides.map((guide) => (
                <Card key={guide.region} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <guide.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground text-lg">{guide.region}</h3>
                    </div>
                    <ul className="space-y-2">
                      {guide.highlights.map((highlight) => (
                        <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <article className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl font-bold text-foreground">
                Making Your Road Trip Memorable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The best road trips aren&apos;t just about the destination—they&apos;re about the journey 
                and the stops along the way. America&apos;s highways offer countless opportunities for 
                adventure, from world-famous landmarks to quirky roadside attractions that exist 
                nowhere else on Earth.
              </p>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Classic American Road Trip Routes
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Route 66:</strong> The &quot;Mother Road&quot; from Chicago to Santa Monica features 
                classic diners, neon signs, and Americana at its finest. Key stops include 
                Cadillac Ranch, the Blue Whale of Catoosa, and the Wigwam Motel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Pacific Coast Highway:</strong> Wind along California&apos;s stunning coastline 
                with stops at Big Sur, Hearst Castle, and countless ocean viewpoints.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Blue Ridge Parkway:</strong> America&apos;s favorite drive offers 469 miles of 
                scenic beauty through the Appalachian Highlands with numerous overlooks and hiking trails.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Tips for Finding the Best Stops
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Research your route before departure but leave room for spontaneity</li>
                <li>Talk to locals—they know the best hidden gems</li>
                <li>Check for seasonal events and festivals along your route</li>
                <li>Download offline maps for areas with limited cell service</li>
                <li>Start early to maximize daylight for sightseeing and photos</li>
                <li>Keep a travel journal to remember your favorite discoveries</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-muted px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="Road Trip Planning FAQs" />
        </div>

        {/* Related Routes */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Plan Your Route
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Rest Stops on I-95", href: "/best-rest-stops-i-95", desc: "East Coast corridor" },
                { title: "Best Rest Stops on I-10", href: "/best-rest-stops-i-10", desc: "Southern cross-country" },
                { title: "Best Highway Rest Areas", href: "/best-highway-rest-areas", desc: "State facilities nationwide" },
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
