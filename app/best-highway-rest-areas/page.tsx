import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { FAQSection } from "@/components/faq-section"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { MapPin, Coffee, TreePine, ArrowRight, Star, Clock, PawPrint, Baby, Accessibility } from "lucide-react"

export const metadata: Metadata = {
  title: "Best Highway Rest Areas | State-Operated Rest Stops Guide",
  description: "Find the best highway rest areas across America. Complete guide to state-operated rest stops with free facilities, picnic areas, and travel information.",
  keywords: ["best highway rest areas", "state rest stops", "free rest areas", "highway rest facilities"],
  openGraph: {
    title: "Best Highway Rest Areas | State-Operated Rest Stops Guide",
    description: "Complete guide to state-operated rest stops with free facilities, picnic areas, and travel information.",
    type: "article",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Highway Rest Areas - State-Operated Rest Stops Guide",
  description: "Comprehensive guide to the best state-operated highway rest areas across America.",
  author: { "@type": "Organization", name: "RestStopsUSA Editorial Team" },
  publisher: { "@type": "Organization", name: "RestStopsUSA" },
  datePublished: "2024-04-01",
  dateModified: "2024-12-01",
}

const topRestAreas = [
  {
    name: "Colorado Welcome Center",
    location: "Trinidad, CO",
    state: "Colorado",
    rating: 4.7,
    features: ["Welcome center", "Picnic area", "Pet area", "WiFi"],
    description: "Mountain views and comprehensive travel information for visitors entering Colorado.",
  },
  {
    name: "Texas Travel Information Center",
    location: "Amarillo, TX",
    state: "Texas",
    rating: 4.6,
    features: ["Information center", "Picnic tables", "Vending", "Pet area"],
    description: "Full-service travel center with Route 66 exhibits and friendly staff.",
  },
  {
    name: "Arizona Sunset Point Rest Area",
    location: "I-17 North of Phoenix",
    state: "Arizona",
    rating: 4.8,
    features: ["Scenic views", "Picnic area", "Restrooms", "Pet area"],
    description: "Spectacular desert valley views from covered picnic pavilions.",
  },
  {
    name: "Virginia Welcome Center",
    location: "Fredericksburg, VA",
    state: "Virginia",
    rating: 4.5,
    features: ["Welcome center", "Historic info", "Picnic area", "Vending"],
    description: "Historic state welcome with Civil War information and travel assistance.",
  },
  {
    name: "Oregon Cascade Siskiyou Rest Area",
    location: "Siskiyou Pass, OR",
    state: "Oregon",
    rating: 4.6,
    features: ["Mountain views", "Picnic area", "Restrooms", "Pet area"],
    description: "Stunning Cascade Range views at the California-Oregon border.",
  },
  {
    name: "Florida Welcome Center",
    location: "Pensacola, FL",
    state: "Florida",
    rating: 4.4,
    features: ["Welcome center", "Beach info", "Vending", "Pet area"],
    description: "Gateway to Florida with orange juice samples and vacation planning assistance.",
  },
]

const stateHighlights = [
  { state: "Texas", count: "100+", note: "Largest state rest area network" },
  { state: "California", count: "85+", note: "Scenic coastal and mountain stops" },
  { state: "Florida", count: "50+", note: "Tourist-focused welcome centers" },
  { state: "Virginia", count: "40+", note: "Historic and scenic locations" },
  { state: "Pennsylvania", count: "30+", note: "Well-maintained turnpike plazas" },
  { state: "Colorado", count: "25+", note: "Mountain vistas and clean facilities" },
]

const amenityTypes = [
  { name: "Restrooms", icon: MapPin, available: "All locations" },
  { name: "Picnic Areas", icon: TreePine, available: "Most locations" },
  { name: "Vending Machines", icon: Coffee, available: "Most locations" },
  { name: "Pet Areas", icon: PawPrint, available: "Many locations" },
  { name: "Baby Changing", icon: Baby, available: "Many locations" },
  { name: "Accessibility", icon: Accessibility, available: "All locations" },
]

const faqs = [
  {
    question: "Are highway rest areas free to use?",
    answer: "Yes, state-operated highway rest areas are free for all travelers. They are funded through state transportation budgets and fuel taxes. Some may have vending machines, but basic restroom and parking facilities are always free.",
  },
  {
    question: "Can you sleep overnight at highway rest areas?",
    answer: "Policies vary by state. Most states allow parking for 2-8 hours for safety rest purposes, but prohibit overnight camping. Some states like California and Florida restrict stays to 8 hours. Always check posted signs for specific time limits.",
  },
  {
    question: "Are highway rest areas safe?",
    answer: "State rest areas are generally safe, especially during daytime hours. Many have regular police patrols and security cameras. For added safety, park near other vehicles, lock your doors, and stay alert. Some states have emergency call boxes.",
  },
  {
    question: "Do rest areas have WiFi?",
    answer: "An increasing number of state rest areas offer free WiFi, particularly welcome centers and newer facilities. Coverage and speeds vary. Major truck stops nearby often have more reliable internet if you need strong connectivity.",
  },
  {
    question: "Why are some rest areas closed?",
    answer: "States may close rest areas due to budget constraints, construction, or seasonal conditions. Some states have permanently closed rest areas, directing travelers to nearby commercial facilities. Check state DOT websites for current closures.",
  },
  {
    question: "What amenities do highway rest areas typically offer?",
    answer: "Standard amenities include restrooms, parking, picnic areas, trash disposal, and often vending machines. Many have pet walking areas, tourist information, and maps. Welcome centers may have staffed information desks and WiFi.",
  },
]

export default function HighwayRestAreasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/best-highway-rest-areas" />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "Best Highway Rest Areas" }]} />
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
                State-Operated Facilities
              </p>
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Best Highway Rest Areas
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                Your guide to state-operated highway rest areas across America. Free facilities, 
                scenic stops, and welcome centers providing essential services for safe travels.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-background/70">
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  All 50 States
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Free Facilities
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Amenity Types */}
        <section className="py-12 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
              Standard Amenities at State Rest Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {amenityTypes.map((amenity) => (
                <div key={amenity.name} className="text-center p-4 bg-card rounded-lg border border-border">
                  <amenity.icon className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="mt-3 text-sm font-medium text-foreground">{amenity.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{amenity.available}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Rest Areas */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Top-Rated State Rest Areas
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topRestAreas.map((area) => (
                <Card key={area.name} className="bg-card border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-medium text-primary">{area.state}</span>
                      <div className="flex items-center gap-1 text-accent">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{area.rating}</span>
                      </div>
                    </div>
                    <h3 className="font-semibold text-foreground text-lg">{area.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{area.location}</p>
                    <p className="text-sm text-muted-foreground mt-3">{area.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {area.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-xs bg-muted px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* State Coverage */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Rest Area Coverage by State
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {stateHighlights.map((state) => (
                <div
                  key={state.state}
                  className="bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground text-lg">{state.state}</h3>
                    <span className="text-primary font-bold">{state.count}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{state.note}</p>
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
                Understanding Highway Rest Areas
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Highway rest areas serve a critical safety function, providing free facilities 
                where travelers can take breaks from driving. The Federal Highway Administration 
                recommends rest stops every 50-100 miles on interstate highways.
              </p>
              
              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Types of State Rest Facilities
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Welcome Centers:</strong> Located at state borders, these staffed facilities 
                offer tourism information, maps, and often sample local products. Many have WiFi 
                and extended hours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Safety Rest Areas:</strong> Basic facilities with restrooms, parking, and 
                picnic tables designed for driver rest breaks. Usually unstaffed but regularly 
                maintained.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Scenic Overlooks:</strong> Smaller pull-offs at scenic locations, typically 
                offering parking and viewpoints but limited facilities.
              </p>

              <h3 className="font-serif text-2xl font-bold text-foreground mt-8">
                Rest Area Safety Tips
              </h3>
              <ul className="text-muted-foreground space-y-2">
                <li>Park in well-lit areas near other vehicles</li>
                <li>Lock your vehicle and take valuables with you</li>
                <li>Be aware of your surroundings, especially at night</li>
                <li>Use the buddy system when traveling with others</li>
                <li>Report suspicious activity to state patrol</li>
                <li>Keep stops brief if you feel uncomfortable</li>
              </ul>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="bg-muted px-4 sm:px-6 lg:px-8">
          <FAQSection faqs={faqs} title="Highway Rest Area FAQs" />
        </div>

        {/* Related Routes */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
              Explore More Guides
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Best Travel Centers America", href: "/best-travel-centers-america", desc: "Full-service highway plazas" },
                { title: "Best Road Trip Stops USA", href: "/best-road-trip-stops-usa", desc: "Scenic attractions" },
                { title: "Best Rest Stops on I-95", href: "/best-rest-stops-i-95", desc: "East Coast corridor" },
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
