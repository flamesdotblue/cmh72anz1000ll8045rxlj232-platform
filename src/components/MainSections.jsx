import React from 'react';
import { Check, Leaf, Shield, Users, Cog, Sparkles, Factory, Building2, Paintbrush, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

function Section({ id, eyebrow, title, description, children }) {
  return (
    <section id={id} className="py-18 sm:py-24 border-t border-neutral-900/70 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && (
              <div className="text-xs uppercase tracking-wider text-emerald-400/90 mb-3">{eyebrow}</div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight">{title}</h2>
            )}
            {description && (
              <p className="mt-3 text-neutral-300 max-w-3xl">{description}</p>
            )}
          </motion.div>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function PlanCard({ badge, name, target, features, cta }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-6 sm:p-8 hover:border-neutral-700 transition group overflow-hidden"
    >
      <div className="absolute -inset-x-20 -top-32 h-40 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition" />
      {badge && (
        <div className="absolute -top-3 right-4 text-xs px-2 py-1 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium shadow-[0_8px_30px_-10px] shadow-emerald-400/40">{badge}</div>
      )}
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-sm text-neutral-400 mt-1">{target}</p>
      <ul className="mt-6 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-neutral-200">
            <Check size={18} className="mt-0.5 text-emerald-400 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#signup"
        className="mt-8 inline-flex items-center justify-center w-full rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-4 py-2.5 hover:opacity-90 transition shadow-[0_10px_40px_-10px] shadow-emerald-400/40"
      >
        {cta || 'Get Started'}
      </a>
    </motion.div>
  );
}

function FeatureItem({ title, description, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay }}
      className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition group"
    >
      <div className="h-10 w-10 rounded-lg bg-neutral-800/70 flex items-center justify-center mb-4 group-hover:scale-105 transition">
        <Icon size={18} className="text-emerald-400" />
      </div>
      <h4 className="text-lg font-semibold text-white">{title}</h4>
      <p className="text-neutral-300 mt-2 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function VendorCard({ icon: Icon, title, tag, commission, benefits, std }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900/60 to-neutral-900/20 p-6 flex flex-col hover:border-neutral-700 transition"
    >
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-lg bg-neutral-800/70 flex items-center justify-center">
          <Icon size={18} className="text-emerald-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-xs text-neutral-400">{tag}</p>
        </div>
      </div>
      <div className="mt-4 text-sm text-neutral-300">
        <div className="font-medium text-neutral-200">Commission</div>
        <div className="mt-1">{commission}</div>
      </div>
      <div className="mt-4">
        <div className="font-medium text-neutral-200">Benefits</div>
        <ul className="mt-2 space-y-2 text-sm text-neutral-300">
          {benefits.map((b, i) => (
            <li key={i} className="flex gap-2"><Check size={16} className="text-emerald-400" /> <span>{b}</span></li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <div className="font-medium text-neutral-200">Standard Benefits</div>
        <ul className="mt-2 space-y-2 text-sm text-neutral-300">
          {std.map((b, i) => (
            <li key={i} className="flex gap-2"><Check size={16} className="text-emerald-400" /> <span>{b}</span></li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <a href="#vendors" className="inline-flex items-center justify-center w-full rounded-md bg-neutral-100 text-neutral-900 font-medium px-4 py-2.5 hover:bg-white transition">Join Waitlist</a>
      </div>
    </motion.div>
  );
}

export default function MainSections() {
  return (
    <div>
      <Section
        id="about"
        eyebrow="About A2S – Aesthetics to Spaces"
        title="Because every space deserves to feel like home."
        description={
          "At A2S, we're more than just a prop-tech platform—we're dream enablers. We know that finding the right space, shaping it into something beautiful, and making it truly yours can be overwhelming. We set out to change that. With A2S, you can explore verified properties, design your rooms virtually, consult experts, and even manage your space with the latest technology—all in one place."
        }
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureItem
            icon={Shield}
            title="Our Mission"
            description="To blend technology with heart—so every step of discovering, designing, or managing a space feels inspiring, effortless, and trustworthy."
          />
          <FeatureItem
            icon={Leaf}
            title="Our Vision"
            description="A future where everyone creates spaces that reflect who they are—where beauty meets function and sustainability is second nature."
          />
          <FeatureItem
            icon={Users}
            title="All-in-one Platform"
            description="Explore properties, design virtually, consult experts, and manage spaces using AI, AR/VR, and IoT—seamlessly."
          />
        </div>
      </Section>

      <Section
        id="plans"
        eyebrow="Choose Your Perfect Plan"
        title="Tailored solutions for every need and budget"
      >
        <div className="grid lg:grid-cols-3 gap-6">
          <PlanCard
            name="Basic"
            target="Perfect for individual homeowners and renters"
            features={[
              'Verified Property Search (residential, commercial, land)',
              'Designer Room (2.5D) – upload rooms, visualize layouts',
              'AI Consultants (B2C) – property & vendor suggestions',
              'Auto-Generate Design Options – multiple arrangements',
              'Simple B2C Analytics – track preferences & bookings',
            ]}
          />
          <PlanCard
            badge="Most Popular"
            name="Premium"
            target="Advanced features for luxury living and professionals"
            features={[
              'Everything in Basic',
              'AR/VR Property Management – immersive walkthroughs',
              'Advanced Predictive Maintenance – AI + IoT predictions',
              'AI-powered Tenant Screening – comprehensive analysis',
              'Personalized Resident Experience – data-based recommendations',
              'Sustainability Features – smart meters, solar panels',
            ]}
          />
          <PlanCard
            name="Enterprise"
            target="Complete solution for property management businesses"
            features={[
              'Everything in Premium',
              'Blockchain Property Ownership Transfer',
              'Smart Contract Rent Payment System',
              'Virtual Property Management – multiple properties',
              'AI Property Valuation & Forecasting',
              'Dedicated Account Manager & Priority Support',
            ]}
          />
        </div>
      </Section>

      <Section
        id="features"
        eyebrow="Smart Features You'll Love"
        title="Discover what makes A2S the perfect choice for your needs"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureItem icon={Sparkles} title="Verified Property Listings" description="Trusted residential, commercial, and land listings with verified authenticity." />
          <FeatureItem icon={Cog} title="2.5D Room Designer" description="Upload rooms, visualize furniture & décor with AI-suggested arrangements." />
          <FeatureItem icon={Users} title="B2C AI Consultants" description="Personalized property & vendor recommendations based on your preferences." />
          <FeatureItem icon={Cog} title="Auto-Generate Design Options" description="AI suggests multiple furniture & layout arrangements for your space." />
          <FeatureItem icon={Shield} title="Simple B2C Analytics" description="Track preferences, saved properties, and bookings in one place." />

          <FeatureItem icon={Cog} title="Advanced Predictive Maintenance" description="AI + IoT predicts building issues before breakdown (plumbing, electricity, HVAC)." />
          <FeatureItem icon={Building2} title="Integrated AR/VR Management" description="See hidden infrastructure and experience immersive walkthroughs." />
          <FeatureItem icon={Shield} title="AI-powered Tenant Screening" description="Assess reliability with credit, rental history, job stability, and verification." />
          <FeatureItem icon={Users} title="Personalized Resident Experience" description="Data analytics improve resident services and community engagement." />
          <FeatureItem icon={Leaf} title="Sustainability-focused Features" description="Smart meters, solar panels, waste segregation, and community gardening." />

          <FeatureItem icon={Shield} title="Blockchain Property Transfer" description="Tamper-proof property records with transparent ownership transfer." />
          <FeatureItem icon={Building2} title="Virtual Property Management" description="Manage multiple properties remotely: tenants, payments, repairs, documentation." />
          <FeatureItem icon={Shield} title="Smart Contract Rent System" description="Automated and transparent rent, deposits, and penalty management." />
          <FeatureItem icon={Sparkles} title="AI Property Valuation & Forecasting" description="Predict prices with historical data, infrastructure changes, and demand trends." />
          <FeatureItem icon={Leaf} title="IoT Energy Management" description="Monitor and optimize energy usage across all properties with smart systems." />
        </div>
      </Section>

      <Section
        id="vendors"
        eyebrow="Vendor & Service Provider Opportunities"
        title="Join our growing network and grow your business"
      >
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <VendorCard
            icon={Paintbrush}
            title="Vastu Consultants"
            tag="Professionals only"
            commission="10–12% per transaction"
            benefits={[
              'High-value consultations with premium clients',
              'Flexible scheduling for site visits',
              'Commission-based earnings with bonuses',
              'Professional certification support',
              'Access to exclusive client referrals',
            ]}
            std={[ 'Standard monthly payment + bonus', 'Dashboard for management', 'Personal onboarding support' ]}
          />
          <VendorCard
            icon={Paintbrush}
            title="Interior Consultants"
            tag="Students/artists allowed"
            commission="8–12% per transaction"
            benefits={[
              'Portfolio building opportunities',
              'Access to design software and tools',
              'Mentorship from experienced designers',
              'Client management dashboard',
              'Flexible project timelines',
            ]}
            std={[ 'Standard monthly payment + bonus', 'Dashboard for management', 'Personal onboarding support', 'Non-paid experience allowed' ]}
          />
          <VendorCard
            icon={Briefcase}
            title="Business Consultants"
            tag="Students/artists allowed"
            commission="8–12% per transaction"
            benefits={[
              'Corporate client access',
              'Business development training',
              'Performance-based bonuses',
              'Professional networking opportunities',
              'Project management tools',
            ]}
            std={[ 'Standard monthly payment + bonus', 'Dashboard for management', 'Personal onboarding support', 'Non-paid experience allowed' ]}
          />
          <VendorCard
            icon={Factory}
            title="Factories / Carpenters / Furniture Makers"
            tag="Professionals only"
            commission="8–10% per transaction"
            benefits={[
              'Bulk order opportunities',
              'Regular project flow',
              'Material sourcing support',
              'Quality certification programs',
              'Direct client connections',
            ]}
            std={[ 'Standard monthly payment + bonus', 'Dashboard for management', 'Personal onboarding support' ]}
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#vendors" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-5 py-3 hover:opacity-90 transition">Join Waitlist</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-700/70 text-neutral-200 px-5 py-3 hover:border-neutral-500 hover:text-white transition">Learn More</a>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Let’s connect"
        description="Have questions or want a demo? We’d love to hear from you."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
          >
            <h4 className="text-lg font-semibold text-white">Contact Details</h4>
            <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
              <li>Email: <a href="mailto:ravsil.a2s.co@gmail.com" className="text-emerald-400 hover:underline">ravsil.a2s.co@gmail.com</a></li>
              <li>Phone: <a href="tel:+919703631298" className="text-emerald-400 hover:underline">9703631298</a></li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
          >
            <h4 className="text-lg font-semibold text-white">Encounters</h4>
            <ul className="mt-4 space-y-2 text-neutral-300 text-sm">
              <li>Meet us at events</li>
              <li>Schedule a call</li>
              <li>Request a demo</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6"
          >
            <h4 className="text-lg font-semibold text-white">Quick Actions</h4>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-4 py-2.5 hover:opacity-90 transition">Request a demo</a>
              <a href="#vendors" className="inline-flex items-center justify-center rounded-md border border-neutral-700/70 text-neutral-200 px-4 py-2.5 hover:border-neutral-500 hover:text-white transition">Join Vendor Waitlist</a>
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
