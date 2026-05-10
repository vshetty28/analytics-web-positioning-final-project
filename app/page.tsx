import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { MapPin, Coffee, Fuel, Wifi, ShowerHead, UtensilsCrossed, Car, Users, Truck, Star, ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const organizationSchema = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "RestStopsUSA",
	url: "https://reststopsusa.com",
	logo: "https://reststopsusa.com/logo.png",
	description: "Your comprehensive guide to the best rest stops across America",
	sameAs: [],
};

const articleSchema = {
	"@context": "https://schema.org",
	"@type": "Article",
	headline: "Best Rest Stops America - Your Complete Guide to Highway Rest Areas",
	description: "Discover the best rest stops across America. Comprehensive guides to highway rest areas, travel centers, and road trip stops.",
	author: {
		"@type": "Organization",
		name: "RestStopsUSA Editorial Team",
	},
	publisher: {
		"@type": "Organization",
		name: "RestStopsUSA",
	},
	datePublished: "2024-01-15",
	dateModified: "2024-12-01",
};

const features = [
	{
		icon: Coffee,
		title: "Clean Facilities",
		description: "Find rest stops with well-maintained restrooms and facilities",
	},
	{
		icon: Fuel,
		title: "Fuel Stations",
		description: "Locate gas stations with competitive prices along your route",
	},
	{
		icon: Wifi,
		title: "Free WiFi",
		description: "Stay connected with rest stops offering complimentary internet",
	},
	{
		icon: ShowerHead,
		title: "Shower Facilities",
		description: "Perfect for long-haul drivers needing to freshen up",
	},
	{
		icon: UtensilsCrossed,
		title: "Food Options",
		description: "From fast food to sit-down restaurants at travel plazas",
	},
	{
		icon: Shield,
		title: "Safe Parking",
		description: "Well-lit, secure parking areas for overnight stops",
	},
];

const routes = [
	{
		title: "Best Rest Stops on I-95",
		href: "/best-rest-stops-i-95",
		description: "From Maine to Florida, discover the top rest areas on the East Coast corridor.",
		states: "ME, NH, MA, RI, CT, NY, NJ, PA, DE, MD, VA, NC, SC, GA, FL",
	},
	{
		title: "Best Rest Stops on I-10",
		href: "/best-rest-stops-i-10",
		description: "Coast-to-coast coverage from California to Florida along America's southern route.",
		states: "CA, AZ, NM, TX, LA, MS, AL, FL",
	},
	{
		title: "Best Road Trip Stops USA",
		href: "/best-road-trip-stops-usa",
		description: "Scenic overlooks, unique attractions, and must-see stops for road trip enthusiasts.",
		states: "Nationwide Coverage",
	},
	{
		title: "Best Travel Centers America",
		href: "/best-travel-centers-america",
		description: "Full-service travel plazas with fuel, food, and amenities for all travelers.",
		states: "Major Interstate Hubs",
	},
	{
		title: "Best Highway Rest Areas",
		href: "/best-highway-rest-areas",
		description: "State-operated rest areas with free parking, restrooms, and picnic facilities.",
		states: "All 50 States",
	},
];

const stats = [
	{ value: "50,000+", label: "Rest Stops Reviewed" },
	{ value: "48", label: "States Covered" },
	{ value: "100K+", label: "Monthly Visitors" },
	{ value: "4.9/5", label: "User Rating" },
];

const faqs = [
	{
		question: "What are the best rest stops in America?",
		answer: "The best rest stops in America include state-operated welcome centers, major travel plaza chains like Buc-ee's, Love's, and Pilot Flying J, and scenic overlooks along interstate highways. Our guides rank rest stops based on cleanliness, amenities, safety, food options, and overall traveler experience.",
	},
	{
		question: "How often should you stop on a road trip?",
		answer: "Safety experts recommend stopping every 2 hours or 100 miles on a road trip. This helps prevent driver fatigue and allows passengers to stretch, use restrooms, and stay hydrated. Our rest stop guides help you plan optimal stopping points along your route.",
	},
	{
		question: "Are rest stops safe to sleep at?",
		answer: "Many rest stops allow overnight parking, though policies vary by state. State-operated rest areas typically permit stays of 2-8 hours. For extended stays, truck stops and travel centers often have designated overnight parking areas with better lighting and security.",
	},
	{
		question: "What amenities do travel centers offer?",
		answer: "Modern travel centers offer far more than fuel and restrooms. Amenities often include restaurants, convenience stores, showers, laundry facilities, WiFi, ATMs, pet areas, and sometimes even gaming lounges, movie theaters, and fitness centers.",
	},
	{
		question: "How do I find rest stops along my route?",
		answer: "Our comprehensive guides cover major interstate corridors including I-95, I-10, I-75, I-40, and more. You can browse by route, state, or amenity type to find the perfect rest stops for your journey. We also provide mile marker locations and detailed amenity lists.",
	},
	{
		question: "What makes Buc-ee's different from other rest stops?",
		answer: "Buc-ee's travel centers are known for their massive size, exceptionally clean restrooms, unique food offerings like brisket and fudge, extensive merchandise, and fuel prices. They're destination stops rather than quick pit stops, with some locations exceeding 50,000 square feet.",
	},
];

export default function HomePage() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
			<link rel="canonical" href="https://reststopsusa.com/" />

			<Header />

			<main>
				{/* Hero Section */}
				<section className="relative overflow-hidden bg-foreground text-background">
					<div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5 pointer-events-none" />
					<div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
						<div className="mx-auto max-w-3xl text-center">
							<p className="text-sm font-medium uppercase tracking-wider text-accent mb-4">Your Complete Road Trip Companion</p>
							<h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">Best Rest Stops America</h1>
							<p className="mt-6 text-lg leading-relaxed text-background/80 text-pretty">Discover the ultimate guide to highway rest areas, travel centers, and road trip stops across the United States. Plan your perfect journey with detailed reviews, amenity information, and insider tips from experienced travelers.</p>
							<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
								<Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
									<Link href="/best-road-trip-stops-usa" className="flex items-center justify-center">
										Explore Routes
										<ArrowRight className="ml-2 h-4 w-4" />
									</Link>
								</Button>
								<Button size="lg" variant="outline" className="border-background/30 text-primary" asChild>
									<Link href="/about">Learn About Us</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Stats Bar */}
					<div className="border-t border-background/10">
						<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
							<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
								{stats.map((stat) => (
									<div key={stat.label} className="text-center">
										<div className="text-3xl font-bold text-accent">{stat.value}</div>
										<div className="mt-1 text-sm text-background/60">{stat.label}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-16 lg:py-24 bg-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Find the Perfect Rest Stop</h2>
							<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Whether you need a quick bathroom break or a full meal with showers, we help you find rest stops that match your needs.</p>
						</div>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{features.map((feature) => (
								<Card key={feature.title} className="bg-card border-border hover:shadow-lg transition-shadow">
									<CardContent className="p-6">
										<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
											<feature.icon className="h-6 w-6 text-primary" />
										</div>
										<h3 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h3>
										<p className="mt-2 text-muted-foreground">{feature.description}</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Who We Help Section */}
				<section className="py-16 lg:py-24 bg-muted">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="grid lg:grid-cols-2 gap-12 items-center">
							<div>
								<h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Built for Every Traveler</h2>
								<p className="mt-4 text-lg text-muted-foreground leading-relaxed">From families on summer vacations to long-haul truckers crossing the country, our comprehensive rest stop guides serve every type of road traveler. We understand that different travelers have different needs.</p>
								<div className="mt-8 space-y-4">
									{[
										{ icon: Users, text: "Families with children needing playgrounds and family restrooms" },
										{ icon: Truck, text: "Commercial drivers requiring truck parking and showers" },
										{ icon: Car, text: "Road trip enthusiasts seeking unique attractions" },
										{ icon: Clock, text: "Commuters needing quick, clean facilities" },
									].map((item) => (
										<div key={item.text} className="flex items-start gap-3">
											<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
												<item.icon className="h-4 w-4 text-primary" />
											</div>
											<p className="text-foreground">{item.text}</p>
										</div>
									))}
								</div>
							</div>
							<div className="relative">
								<div className="aspect-[4/3] rounded-2xl bg-secondary overflow-hidden">
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="text-center p-8">
											<MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
											<p className="text-lg font-medium text-foreground">Interactive Map Coming Soon</p>
											<p className="text-sm text-muted-foreground mt-2">Explore rest stops visually</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Routes Section */}
				<section id="routes" className="py-16 lg:py-24 bg-background scroll-mt-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-12">
							<h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">Explore by Route</h2>
							<p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Browse our comprehensive guides organized by major interstate corridors and travel categories.</p>
						</div>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{routes.map((route) => (
								<Link key={route.href} href={route.href} className="group">
									<Card className="h-full bg-card border-border hover:border-primary/50 hover:shadow-lg transition-all">
										<CardContent className="p-6">
											<h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{route.title}</h3>
											<p className="mt-2 text-muted-foreground text-sm">{route.description}</p>
											<div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
												<MapPin className="h-3 w-3" />
												<span>{route.states}</span>
											</div>
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

				{/* Content Section */}
				<section className="py-16 lg:py-24 bg-muted">
					<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
						<article className="prose prose-lg max-w-none">
							<h2 className="font-serif text-3xl font-bold text-foreground">Your Ultimate Guide to Rest Stops Across America</h2>

							<p className="text-muted-foreground leading-relaxed">Planning a road trip across the United States requires more than just mapping your route. Knowing where to stop, rest, and refuel can make the difference between an enjoyable journey and an exhausting ordeal. Our comprehensive guides to the best rest stops in America help you plan every aspect of your highway travel.</p>

							<h3 className="font-serif text-2xl font-bold text-foreground mt-8">Understanding Different Types of Rest Stops</h3>

							<p className="text-muted-foreground leading-relaxed">Not all rest stops are created equal. Understanding the differences helps you choose the right stopping point for your needs:</p>

							<div className="grid gap-4 my-6">
								{[
									{
										title: "State Rest Areas",
										desc: "Free facilities operated by state DOTs with restrooms, picnic areas, and vending machines. Usually allow 2-8 hour parking.",
									},
									{
										title: "Welcome Centers",
										desc: "Enhanced rest areas at state borders with tourism information, maps, and often extended amenities.",
									},
									{
										title: "Travel Plazas",
										desc: "Commercial facilities like service plazas on toll roads with restaurants, fuel, and retail shops.",
									},
									{
										title: "Truck Stops",
										desc: "Full-service facilities catering to commercial drivers with showers, laundry, and overnight parking.",
									},
								].map((item) => (
									<div key={item.title} className="flex items-start gap-3 p-4 bg-card rounded-lg border border-border">
										<CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<div>
											<h4 className="font-semibold text-foreground">{item.title}</h4>
											<p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
										</div>
									</div>
								))}
							</div>

							<h3 className="font-serif text-2xl font-bold text-foreground mt-8">Why Rest Stops Matter for Safe Travel</h3>

							<p className="text-muted-foreground leading-relaxed">The National Highway Traffic Safety Administration estimates that drowsy driving causes over 100,000 crashes annually. Taking regular breaks at quality rest stops is essential for safe travel. Our guides help you identify rest stops with the amenities you need to stay alert and refreshed throughout your journey.</p>

							<h3 className="font-serif text-2xl font-bold text-foreground mt-8">Planning Your Rest Stops</h3>

							<p className="text-muted-foreground leading-relaxed">We recommend planning rest stops every 100-150 miles or every 2 hours of driving. Use our route guides to identify rest stops along your path, noting which ones offer the specific amenities you need. For longer trips, identify potential overnight stops that allow extended parking.</p>
						</article>
					</div>
				</section>

				{/* FAQ Section */}
				<div className="bg-background px-4 sm:px-6 lg:px-8">
					<FAQSection faqs={faqs} />
				</div>

				{/* CTA Section */}
				<section id="guide" className="py-16 lg:py-24 bg-primary scroll-mt-20">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl">Get Our Free Road Trip Planning Guide</h2>
							<p className="mt-4 text-lg text-primary-foreground/80">Download our comprehensive PDF guide with checklists, tips, and insider information for planning the perfect road trip.</p>
							<form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
								<label htmlFor="email" className="sr-only">
									Email address
								</label>
								<input type="email" id="email" name="email" placeholder="Enter your email" className="flex-1 rounded-lg border-0 px-4 py-3 text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-accent" />
								<Button type="submit" className="bg-accent text-accent-foreground hover:bg-accent/90">
									Get Free Guide
								</Button>
							</form>
							<p className="mt-4 text-sm text-primary-foreground/60">No spam, ever. Unsubscribe anytime.</p>
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-16 lg:py-24 bg-background">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<h2 className="font-serif text-3xl font-bold text-foreground text-center mb-12">What Travelers Say</h2>
						<div className="grid gap-8 md:grid-cols-3">
							{[
								{
									quote: "This site saved our family road trip! We found amazing rest stops with playgrounds that kept the kids happy.",
									author: "Sarah M.",
									role: "Family Traveler",
								},
								{
									quote: "As a long-haul trucker, knowing which stops have good showers and parking is invaluable. Great resource!",
									author: "Mike T.",
									role: "Commercial Driver",
								},
								{
									quote: "The I-95 guide helped us discover scenic overlooks we would have completely missed otherwise.",
									author: "Jennifer K.",
									role: "Road Trip Enthusiast",
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
											<p className="text-sm text-muted-foreground">{testimonial.role}</p>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
