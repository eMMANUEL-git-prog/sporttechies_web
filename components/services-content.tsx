import {
  Brain,
  Utensils,
  Tent,
  ShoppingCart,
  Trophy,
  BarChart3,
  Globe,
  Smartphone,
  Code2,
  CreditCard,
  Cloud,
} from "lucide-react";

const sportsTechServices = [
  {
    icon: Brain,
    title: "AI Performance Systems",
    items: [
      "Injury Risk Prediction",
      "Load Monitoring",
      "AI Coaching Analytics",
      "Athlete Progress Tracking",
    ],
  },
  {
    icon: Utensils,
    title: "AI Nutrition Systems",
    items: [
      "Performance Meal Planning",
      "Hydration Monitoring",
      "Supplement Tracking",
      "Nutrition Dashboards",
    ],
  },
  {
    icon: Tent,
    title: "Sports Camps & Academy Systems",
    items: [
      "Camp Websites",
      "Online Bookings",
      "Athlete Registration",
      "Digital Performance Profiles",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Camp & Sports Store Systems",
    items: [
      "POS Systems",
      "Inventory Management",
      "Equipment Tracking",
      "Sales Analytics",
    ],
  },
  {
    icon: Trophy,
    title: "Event & Competition Platforms",
    items: [
      "Online Registration",
      "Payment Processing",
      "Live Results",
      "Leaderboards",
    ],
  },
  {
    icon: BarChart3,
    title: "Sports Data & Analytics",
    items: [
      "Talent Tracking Systems",
      "Performance Databases",
      "Ranking Platforms",
      "Custom Sports Dashboards",
    ],
  },
];

const softwareDevServices = [
  {
    icon: Globe,
    title: "Web Development",
    items: [
      "Corporate Websites",
      "E-Commerce Platforms",
      "NGO & Initiative Sites",
      //   "Church Websites",
      "School & Education Portals",
      "Healthcare & Clinical Websites",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    items: [
      "Android & iOS Apps",
      "Health & Fitness Apps",
      "Booking Systems",
      "FinTech Applications",
    ],
  },
  {
    icon: Code2,
    title: "Custom Software Systems",
    items: [
      "POS & Inventory Systems",
      "CRM & ERP Solutions",
      "HR & Payroll Systems",
      "Clinic Management Systems",
      "School Management Systems",
    ],
  },
  {
    icon: CreditCard,
    title: "Payments & Integrations",
    items: [
      "M-Pesa Integration",
      "Card Payment Systems",
      "Subscription Billing",
      "API Development",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Backend Infrastructure",
    items: [
      "Database Architecture",
      "Authentication Systems",
      "Hosting & DevOps",
      "System Maintenance & Support",
    ],
  },
];

function ServiceCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <div className="group rounded-xl border border-border/60 bg-card/50 p-6 transition-all hover:border-accent/40 hover:bg-card/80 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="size-5" />
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-accent/60" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesContent() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      {/* Page header */}
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From cutting-edge sports technology to enterprise software solutions,
          we build systems that perform.
        </p>
      </div>

      {/* Sports Technology Solutions */}
      <section className="mb-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="whitespace-nowrap font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Sports Technology Solutions
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sportsTechServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      {/* Software Development Services */}
      <section>
        <div className="mb-8 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="whitespace-nowrap font-serif text-xl font-semibold text-foreground sm:text-2xl">
            Software Development Services
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareDevServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    </div>
  );
}
