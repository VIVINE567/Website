import ContactBannerSection from '../components/sections/contact/ContactBannerSection';
import ContactInfoPanel from '../components/sections/contact/ContactInfoPanel';
import ContactFormPanel from '../components/sections/contact/ContactFormPanel';
import ContactSupportBanner from '../components/sections/contact/ContactSupportBanner';
import ContactWhyStrip from '../components/sections/contact/ContactWhyStrip';

const Contact = () => (
  <>
    <ContactBannerSection />

    <section className="py-12 md:py-16" style={{ background: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-8 text-xs"
          style={{ color: 'var(--brown-warm)', fontFamily: "'Open Sans', sans-serif" }}
        >
          <a href="/" className="hover:text-[var(--gold-dark)] transition-colors">
            Home
          </a>
          <span style={{ color: 'rgba(201,168,76,0.5)' }}>›</span>
          <span style={{ color: 'var(--forest)' }}>Contact Us</span>
        </nav>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
          <ContactInfoPanel />
          <ContactFormPanel />
        </div>

        <ContactSupportBanner />
        <ContactWhyStrip />
      </div>
    </section>
  </>
);

export default Contact;
