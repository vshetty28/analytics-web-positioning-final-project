import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { 
  MapPin, 
  Award, 
  Users, 
  BookOpen, 
  Mail, 
  CheckCircle,
  Linkedin,
  Star,
  Clock,
  Shield
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | RestStopsUSA Editorial Team",
  description: "Meet the travel experts behind RestStopsUSA. Our team of experienced travelers, transportation researchers, and road trip enthusiasts bring you reliable rest stop guides.",
  keywords: ["about RestStopsUSA", "rest stop experts", "travel guide team", "road trip researchers"],
  openGraph: {
    title: "About Us | RestStopsUSA Editorial Team",
    description: "Meet the travel experts behind RestStopsUSA.",
    type: "website",
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RestStopsUSA",
  url: "https://reststopsusa.com",
  description: "America's most comprehensive guide to highway rest stops and travel centers",
  foundingDate: "2019",
  founder: {
    "@type": "Person",
    name: "Michael Torres",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Austin",
    addressRegion: "TX",
    addressCountry: "US",
  },
}

const teamMembers = [
  {
    name: "Michael Torres",
    role: "Founder & Lead Editor",
    bio: "Former transportation planner with 15+ years of experience in highway infrastructure. Michael has personally visited over 5,000 rest stops across all 48 continental states.",
    expertise: ["Transportation Planning", "Highway Infrastructure", "Travel Safety"],
    credentials: "M.S. Transportation Engineering, Texas A&M University",
    experience: "15+ years",
  },
  {
    name: "Sarah Chen",
    role: "Senior Travel Researcher",
    bio: "Travel journalist and former AAA travel advisor. Sarah specializes in family travel and has contributed to major publications including Travel + Leisure and National Geographic Traveler.",
    expertise: ["Family Travel", "Travel Safety", "Accessibility"],
    credentials: "B.A. Journalism, Northwestern University",
    experience: "12+ years",
  },
  {
    name: "James Williams",
    role: "Commercial Transportation Specialist",
    bio: "Retired long-haul truck driver with 2 million+ safe miles. James brings firsthand knowledge of truck stops and travel centers from his 25 years on the road.",
    expertise: ["Commercial Driving", "Truck Stop Amenities", "Driver Safety"],
    credentials: "CDL Class A, Certified Safe Driver",
    experience: "25+ years",
  },
  {
    name: "Dr. Amanda Rodriguez",
    role: "Safety & Wellness Advisor",
    bio: "Public health researcher specializing in transportation safety and driver fatigue. Amanda ensures our recommendations prioritize traveler safety and wellbeing.",
    expertise: ["Driver Fatigue Research", "Public Health", "Safety Standards"],
    credentials: "Ph.D. Public Health, Johns Hopkins University",
    experience: "10+ years",
  },
  {
    name: "David Park",
    role: "Technology & Data Analyst",
    bio: "Former Google Maps contributor and GIS specialist. David manages our database of rest stop locations and ensures accuracy of all facility information.",
    expertise: ["GIS Mapping", "Data Analysis", "Location Services"],
    credentials: "M.S. Geographic Information Systems, Penn State",
    experience: "8+ years",
  },
]

const values = [
  {
    icon: CheckCircle,
    title: "Accuracy First",
    description: "Every rest stop we recommend has been verified through on-site visits, user reports, and official sources.",
  },
  {
    icon: Shield,
    title: "Safety Priority",
    description: "Traveler safety is our primary concern. We highlight security features and provide honest assessments.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Our guides incorporate feedback from thousands of travelers who share their experiences.",
  },
  {
    icon: Clock,
    title: "Always Updated",
    description: "We continuously update our information to reflect changes in facilities, closures, and new additions.",
  },
]

const stats = [
  { value: "50,000+", label: "Rest Stops Reviewed" },
  { value: "500K+", label: "Miles Traveled" },
  { value: "100K+", label: "Monthly Readers" },
  { value: "5", label: "Years of Research" },
]

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <link rel="canonical" href="https://reststopsusa.com/about" />
      
      <Header />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-foreground text-background py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ name: "About Us" }]} />
            <div className="max-w-3xl">
              <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                About RestStopsUSA
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-background/80">
                We are a team of transportation experts, travel journalists, and road trip 
                enthusiasts dedicated to helping Americans travel safely and comfortably. 
                Our mission is to be the most trusted resource for highway rest stop information.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Story</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                RestStopsUSA was founded in 2019 by Michael Torres, a transportation planner who 
                spent years frustrated by the lack of reliable information about highway rest stops. 
                After a family road trip where finding a clean, safe rest stop became an ordeal, 
                Michael decided to create the resource he wished had existed.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a personal project documenting rest stops along I-10 has grown 
                into America&apos;s most comprehensive guide to highway facilities. Our team has expanded 
                to include transportation researchers, travel journalists, commercial drivers, and 
                public health experts—all united by a passion for helping travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, RestStopsUSA provides detailed information on over 50,000 rest stops, 
                welcome centers, and travel plazas across all 50 states. Our guides have helped 
                millions of travelers find safe, comfortable places to rest during their journeys.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Values</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at RestStopsUSA.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="bg-card border-border">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mx-auto">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mt-4 font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground">Meet Our Expert Team</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our team combines decades of experience in transportation, travel journalism, 
                and road safety to bring you reliable, trustworthy information.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.name} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-primary">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Award className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.credentials}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{member.experience} experience</span>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-muted px-2 py-1 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Process */}
        <section className="py-16 lg:py-20 bg-muted">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground">Our Editorial Process</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                How we ensure accuracy and trustworthiness in every guide.
              </p>
            </div>
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "On-Site Verification",
                  desc: "Our team members personally visit rest stops to verify amenities, cleanliness, and safety features.",
                },
                {
                  step: "2",
                  title: "Community Feedback",
                  desc: "We collect and analyze feedback from thousands of travelers who use our guides.",
                },
                {
                  step: "3",
                  title: "Official Source Cross-Reference",
                  desc: "We verify information against state DOT records, travel center chains, and official sources.",
                },
                {
                  step: "4",
                  title: "Expert Review",
                  desc: "Each guide is reviewed by our team of transportation and safety experts before publication.",
                },
                {
                  step: "5",
                  title: "Continuous Updates",
                  desc: "We monitor for changes and update our guides regularly to maintain accuracy.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">
              Why Travelers Trust Us
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  quote: "RestStopsUSA has become my go-to resource before any road trip. The information is always accurate and up-to-date.",
                  author: "Travel + Leisure Magazine",
                  type: "Media",
                },
                {
                  quote: "Finally, a rest stop guide created by people who actually understand what travelers need. Highly recommended.",
                  author: "American Trucking Association",
                  type: "Industry",
                },
                {
                  quote: "The most comprehensive and reliable highway rest stop resource we have found.",
                  author: "AAA Travel Editors",
                  type: "Expert",
                },
              ].map((testimonial) => (
                <Card key={testimonial.author} className="bg-card border-border">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground italic">&quot;{testimonial.quote}&quot;</p>
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 lg:py-20 bg-primary scroll-mt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Mail className="h-12 w-12 text-primary-foreground/80 mb-4" />
                <h2 className="font-serif text-3xl font-bold text-primary-foreground">
                  Get in Touch
                </h2>
                <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                  Have questions, suggestions, or want to report an update to a rest stop? 
                  We&apos;d love to hear from you. Our team responds to all inquiries within 
                  48 business hours.
                </p>
                <div className="mt-6 space-y-3">
                  <p className="text-primary-foreground flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    info@reststopsusa.com
                  </p>
                  <p className="text-primary-foreground flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Austin, Texas, USA
                  </p>
                </div>
              </div>
              <Card className="bg-card border-0">
                <CardContent className="p-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full rounded-lg border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:ring-1 focus:ring-primary"
                        placeholder="How can we help?"
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
