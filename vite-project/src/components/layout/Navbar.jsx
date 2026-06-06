import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Search,
  ChevronDown,
  ChevronRight,
  Home as HomeIcon,
  Users,
  Briefcase,
  CalendarDays,
  Handshake,
  FileText,
  BookOpen,
  Award,
  GraduationCap,
  Building2,
  CreditCard,
  Image as ImageIcon,
  Newspaper,
  Contact as ContactIcon,
  PenTool,
  ShieldCheck,
  Globe2,
  Sparkles,
  Library,
  Landmark,
  Megaphone,
  HelpCircle,
  Send,
  Layers,
  User,
  Monitor,
  Trophy,
  Calculator,
  Menu,
  X,
} from 'lucide-react';
import { 
  FaFacebookF,
  FaXTwitter,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const COLORS = {
  primaryBlue: '#083E78',
  deepBlue: '#062A53',
  navy: '#05264A',
  accentGold: '#D6A735',
  accentGoldDark: '#B88417',
  white: '#FFFFFF',
  darkText: '#111827',
  lightText: '#64748B',
  lightGray: '#F8FAFC',
  softBlue: '#EAF3FF',
  borderGray: '#E2E8F0',
  shadow: 'rgba(15, 23, 42, 0.18)'
};

const MENU_STRUCTURE = [
  {
    label: 'Home',
    path: '/',
    submenu: [
      { label: 'About us', path: '/about-us' },
      { label: 'Apply for Jobs', path: '/jobs' },
      { label: 'Apply For Schedule Meeting', path: '/apply-schedule-meeting' },
      { label: 'Partnership Programme', path: '/partnership-programme' },
       { label: 'DEO', path: '/deo' },
    ]
  },
  {
    label: 'Academicians',
    path: '',
    submenu: [
      {
        label: 'Research Paper Publication - Services',
        path: '/Researchpaper',
        submenu: [
          { label: 'Submit Paper Online', path: '/Researchpaper#registration-form' },
          { label: 'Bulk Paper Submission', path: '/Researchpaper#registration-form' },
        ]
      },
      {
        label: 'Editorial Board Membership',
        path: '/editorial-board-membership',
        submenu: [
          { label: 'Apply Now - Editorial Board Membership', path: '/editorial-board-membership#editorial-board-form' }
        ]
      },
      {
        label: 'Membership Others',
        path: '/membership-others',
        submenu: [
          { label: 'Apply for Professional Membership', path: '/professional-member' },
          { label: 'Apply For DOI Membership', path: '/doi-member' },
          { label: 'Apply for One Membership - Edwin INC', path: '/one-member' },
          { label: 'JMA (Jabalpur Management Association)', path: 'https://www.jmajabalpur.org/' },
        ]
      },
      {
        label: 'Books Publication Services',
        path: '/books-publication-services',
        submenu: [
          { label: 'Apply Now - Book Publication', path: '/books-publication-services#book-publication-form' },
          { label: 'Submit Chapter for Edited Book', path: '/books-publication-services#chapter-form' },
          { label: 'Become Editor of Book', path: '/books-publication-services#book-editor-form' },
        ]
      },
      { label: 'Apply for Fellowship', path: '/apply-for-fellowship' },
      {
        label: 'MOOC Supports',
        path: '/mooc-supports',
        submenu: [
          { label: 'Register as Course Creator', path: '/mooc-supports' },
          { label: 'Register as Student', path: '/mooc-supports' },
        ]
      },
      {
        label: 'Conference - Apply Now',
        path: '/ConferenceApplyNow',
        submenu: [
          { label: 'Register Now For Upcoming Conference', path: '/ConferenceApplyNow#conference-form' },
          { label: 'Previous Conference', path: '/ConferenceApplyNow#conference-table' },
          { label: 'Register as a Resourse Person', path: '/ConferenceApplyNow#application-form' },
          { label: 'Apply For Travel Grant', path: '/ConferenceApplyNow#travel-grant-form' },
        ]
      },
      {
        label: 'Awards',
        path: '/awards',
        submenu: [
          { label: 'Upcoming Awards Ceremony', path: '/awards#conference-table' },
          { label: 'Apply online for Award', path: '/awards#award-form' },
        ]
      }
    ]
  },
  {
    label: 'R&D/EBI',
    path: '',
    submenu: [
      { label: 'Edwin Academic & Immigration Solutions', path: '/edwin-academic-immigration-solutions' },
      {
        label: 'Writing Assistance',
        path: '/apply-now-writing-assistance',
        submenu: [
          { label: 'Apply Now - Writing Assistance', path: '/apply-now-writing-assistance#writing-assistance-form' }
        ]
      },
      { label: 'Faculty & Co-Guide Registration', path: '/faculty-co-guide-registration' },
      {
        label: 'Apply For Major/Minor project',
        path: '/ApplyForMajorMinorproject',
        submenu: [
          { label: 'Apply Online For Support', path: '/ApplyForMajorMinorproject#major-minor-form' }
        ]
      },
      { label: 'Increase Citation & DOI', path: '/increase-citation-doi' },
      { label: 'Apply for Patent Support', path: '/apply-for-patent-support' },
      { label: 'Apply For Grants', path: '/apply-for-grants' },
      {
        label: 'Plagiarism Detector',
        path: '/apply-for-plagiarism-detector',
        submenu: [
          { label: 'Apply For Plagiarism Detector', path: '/apply-for-plagiarism-detector#plagiarism-form' },
          { label: 'Apply For Turnitin Support', path: '/apply-for-turnitin-support#plagiarism-form' },
        ]
      },
      {
        label: 'API Calculator',
        path: '/apply-for-api-calculator',
        submenu: [
          { label: 'Apply For API Calculator', path: '/apply-for-api-calculator#api-form' },
        ]
      }
    ]
  },
  {
    label: 'Educational',
    path: '',
    submenu: [
      {
        label: 'Academic News Channel',
        path: '/academic-news-channel',
        submenu: [
          { label: 'Apply For News', path: '/academic-news-channel#apply' }
        ]
      },
      {
        label: 'Education Tours',
        path: '/international-educational-tours',
        submenu: [
          { label: 'Apply for International Educational Tours', path: '/international-educational-tours#apply' }
        ]
      },
      {
        label: 'Admission Services',
        path: '/phd-programmes',
        submenu: [
          { label: 'Apply for PhD Programmes', path: '/phd-programmes#apply' },
          { label: 'Apply for PG Programmes', path: '/pg-programmes#apply' },
          { label: 'Apply for UG Programmes', path: '/ug-programmes#apply' },
        ]
      },
      { label: 'Help for Education', path: '/help-for-education' },
    ]
  },
  {
    label: 'University/College',
    path: '',
    submenu: [
      {
        label: 'University/College Services',
        path: '/university-college',
        submenu: [
          { label: 'Institutional Membership/Sign MOU', path: '/institutionalMembership#apply' },
          { label: 'NAAC Assistance', path: '/naac-assistance' },
          { label: 'Apply For NAAC Support', path: '/naac-assistance#apply' },
          { label: 'Apply For HR Support', path: '/naac-assistance#apply' },
          { label: 'Apply For NBA and Training Support', path: '/apply-for-nba-training-support#apply' },
        ]
      },
      {
        label: 'Conference Management Board',
        path: '/support-for-proceeding-printing',
        submenu: [
          { label: 'Support For Proceeding Printing', path: '/support-for-proceeding-printing#apply' },
          { label: 'Sponsorship for Organizing Conference', path: '/sponsorship-for-organizing-conference#apply' },
          { label: 'Need Resource person', path: '/need-resource-person#apply' },
          { label: 'Get Advertisement Support', path: '/advertisement-support#apply' },
        ]
      },
      {
        label: 'Digital Library',
        path: '/membership-dellnett',
        submenu: [
          { label: 'Apply For Membership DELLNETT', path: '/membership-dellnett#apply' }
        ]
      },

    ]
  },
  {
    label: 'Editors || NGO || Business',
    path: '/',
    submenu: [
      { label: 'Edwin Journal', path: '/edwin-journal' },
      {
        label: 'Journals Help Board',
        path: '/journal-help-board',
        submenu: [
          { label: 'Apply For Opening Journal Services', path: '/journal-help-board#opening-journal-services' },
          { label: 'Technical Support For Indexing', path: '/journal-help-board#opening-journal-services' },
          { label: 'Apply for Print and E ISSN Allotment Support', path: '/journal-help-board#opening-journal-services' },
          { label: 'Free DOI', path: '/journal-help-board#opening-journal-services' },
          { label: 'Paid DOI - Crossref', path: '/journal-help-board#opening-journal-services' },
        ]
      },
      {
        label: 'DOI Portal',
        path: '/doi-portal',
        submenu: [
          { label: 'Apply Now - DOI Portal', path: '/doi-portal#submit-doi' }
        ]
      },
      {
        label: 'Services for NGO',
        path: '/ngo-support',
        submenu: [
          { label: 'Membership portal', path: '/ngo-support#ngo-support-form' },
          { label: 'CSR Funding Assistant', path: '/ngo-support#ngo-support-form' },
        ]
      },
      {
        label: 'Services for Business',
        path: '/services-for-business',
        submenu: [
          { label: 'Services For Business Automation', path: '/services-for-business#website-application-form' },
          { label: 'Digital Marketing', path: '/services-for-business#website-application-form' },
          { label: 'Apps for IOS and Android', path: '/services-for-business#website-application-form' },
          { label: 'Whatsapp Services', path: '/services-for-business#website-application-form' },
          { label: 'HR Support for Business', path: '/hr-support-for-business#form' },
          { label: "Edwin's Constructions", path: '/constructions' },
        ]
      }
    ]
  },
  {
    label: 'Pay Now',
    path: '/pay-now',
    submenu: [
      { label: 'Paynow', path: '/paynow' },
      { label: 'FAQ', path: 'https://edwinincorp.zohodesk.in/portal/en/home' },
      { label: 'Feedback/Complaint Box', path: '/feedback-complaint-box' },
    ]
  },
  {
    label: 'Photo Gallery',
    path: '/',
    submenu: [
      { label: 'Conferences', path: '/conferences' },
      { label: 'Birthdays', path: '/birthdays' },
      { label: 'National celebrations', path: '/national-celebrations' },
    ]
  },
  { label: 'Press', path: '/press' },
  { label: 'Contact', path: '/contact' },
];


const getMenuIcon = (label = '') => {
  const text = label.toLowerCase();

  if (text.includes('home')) return HomeIcon;
  if (text.includes('about')) return Users;
  if (text.includes('job')) return Briefcase;
  if (text.includes('schedule') || text.includes('meeting')) return CalendarDays;
  if (text.includes('partnership')) return Handshake;

  if (text.includes('immigration')) return Globe2;
  if (text.includes('writing')) return PenTool;
  if (text.includes('faculty') || text.includes('co-guide')) return Users;
  if (text.includes('major') || text.includes('minor') || text.includes('project')) return FileText;
  if (text.includes('citation') || text.includes('doi')) return Library;
  if (text.includes('patent')) return ShieldCheck;
  if (text.includes('grant') || text.includes('fund')) return Landmark;
  if (text.includes('plagiarism') || text.includes('turnitin')) return ShieldCheck;
  if (text.includes('api') || text.includes('calculator')) return Calculator;

  if (text.includes('academic news')) return Newspaper;
  if (text.includes('education tours') || text.includes('educational tours')) return Globe2;
  if (text.includes('admission services')) return Building2;
  if (text.includes('phd')) return GraduationCap;
  if (text.includes('pg')) return BookOpen;
  if (text.includes('ug')) return Users;
  if (text.includes('online learning')) return Monitor;
  if (text.includes('help for education')) return HelpCircle;

  if (text.includes('edwin journal')) return BookOpen;
  if (text.includes('journals help board')) return HelpCircle;
  if (text.includes('opening journal')) return BookOpen;
  if (text.includes('technical support')) return ShieldCheck;
  if (text.includes('print') || text.includes('issn')) return Newspaper;
  if (text.includes('free doi')) return Award;
  if (text.includes('paid doi') || text.includes('crossref')) return CreditCard;
  if (text.includes('doi portal')) return Library;
  if (text.includes('ngo')) return Handshake;
  if (text.includes('business automation')) return Calculator;
  if (text.includes('digital marketing')) return Megaphone;
  if (text.includes('apps')) return Monitor;
  if (text.includes('whatsapp')) return Phone;
  if (text.includes('hr support')) return Users;

  if (text.includes('conference')) return CalendarDays;
  if (text.includes('birthday')) return Award;
  if (text.includes('national')) return Globe2;

  if (text.includes('submit')) return Send;
  if (text.includes('bulk')) return Layers;
  if (text.includes('research') || text.includes('paper') || text.includes('publication')) return FileText;
  if (text.includes('editorial')) return User;
  if (text.includes('membership')) return ShieldCheck;
  if (text.includes('book')) return BookOpen;
  if (text.includes('fellowship')) return Award;
  if (text.includes('online')) return Monitor;
  if (text.includes('mooc') || text.includes('student') || text.includes('course')) return GraduationCap;
  if (text.includes('award')) return Trophy;
  if (text.includes('university') || text.includes('college') || text.includes('institutional')) return Building2;
  if (text.includes('library')) return Library;
  if (text.includes('pay')) return CreditCard;
  if (text.includes('gallery') || text.includes('photo')) return ImageIcon;
  if (text.includes('press') || text.includes('news')) return Newspaper;
  if (text.includes('contact')) return ContactIcon;
  if (text.includes('advertisement')) return Megaphone;
  if (text.includes('faq') || text.includes('help')) return HelpCircle;

  return Sparkles;
};

const NavItem = ({ item, depth = 0, onNavigate, flyoutDirection = 'right' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;
  const Icon = getMenuIcon(item.label);
  const isExternal = item.path?.startsWith('http');
  const childFlyoutDirection = depth === 0 ? item.flyoutDirection || 'right' : flyoutDirection;
  const dropdownClasses = [
    'dropdown-menu',
    depth === 0 ? 'top-dropdown' : 'side-dropdown',
    depth === 0 && item.alignDropdown === 'right' ? 'top-dropdown-right' : '',
    depth > 0 && flyoutDirection === 'left' ? 'side-dropdown-left' : '',
  ].filter(Boolean).join(' ');

  const handleClick = (event) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 992;
    const targetHash = item.path?.includes('#') ? item.path.split('#')[1] : '';

    if (hasSubmenu && isMobile) {
      event.preventDefault();
      setIsOpen((current) => !current);
      return;
    }

    if (onNavigate) onNavigate();

    if (targetHash) {
      window.setTimeout(() => {
        document.getElementById(targetHash)?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 120);
    }
  };

  return (
    <div
      className={`nav-item-wrap ${isOpen ? 'is-open' : ''}`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {isExternal ? (
        <a
          href={item.path}
          className={depth === 0 ? 'nav-link-top' : 'nav-link-sub'}
          onClick={handleClick}
          target="_blank"
          rel="noreferrer"
        >
          <span className="nav-link-content">
            {depth === 0 && item.label === 'Home' && <Icon size={18} strokeWidth={2.5} />}
            {depth > 0 && <Icon className="submenu-icon" size={18} strokeWidth={2.3} />}
            <span>{item.label}</span>
          </span>
          {hasSubmenu && (
            depth === 0
              ? <ChevronDown className="chevron" size={16} strokeWidth={2.5} />
              : <ChevronRight className="chevron-right" size={16} strokeWidth={2.5} />
          )}
        </a>
      ) : (
        <Link
          to={item.path}
          className={depth === 0 ? 'nav-link-top' : 'nav-link-sub'}
          onClick={handleClick}
        >
        <span className="nav-link-content">
          {depth === 0 && item.label === 'Home' && <Icon size={18} strokeWidth={2.5} />}
          {depth > 0 && <Icon className="submenu-icon" size={18} strokeWidth={2.3} />}
          <span>{item.label}</span>
        </span>
        {hasSubmenu && (
          depth === 0
            ? <ChevronDown className="chevron" size={16} strokeWidth={2.5} />
            : <ChevronRight className="chevron-right" size={16} strokeWidth={2.5} />
        )}
        </Link>
      )}

      {hasSubmenu && isOpen && (
        <div className={dropdownClasses}>
          {item.submenu.map((subItem, index) => (
            <NavItem
              key={index}
              item={subItem}
              depth={depth + 1}
              onNavigate={onNavigate}
              flyoutDirection={childFlyoutDirection}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="main-navbar">
        <div className="top-bar">
          <div className="top-left">
            <span><Mail size={16} /> care@edwinepc.com</span>
            <span className="top-divider">|</span>
            <span><Phone size={16} /> +91 6262752167</span>
          </div>
         <div className="top-social">
    
    <div className="top-social">
    <a href="https://www.facebook.com/edwinincorporation" target="_blank" rel="noreferrer"><FaFacebookF size={15} /></a>
    <a href="https://x.com/inc_edwin43485https://x.com/" target="_blank" rel="noreferrer"><FaXTwitter size={15} /></a>
    <a href="https://www.linkedin.com/company/edwin-inc/?viewAsMember=true" target="_blank" rel="noreferrer"><FaLinkedinIn size={15} /></a>
    <a href="https://www.instagram.com/edwin__incorp/" target="_blank" rel="noreferrer"><FaInstagram size={15} /></a>
    <a href="https://www.youtube.com/edwinincorp" target="_blank" rel="noreferrer"><FaYoutube size={16} /></a>
    <a href="mailto:care@edwinepc.com"><FaEnvelope size={15} /></a>
    <a href="https://wa.me/916262752167" target="_blank" rel="noreferrer"><FaWhatsapp size={16} /></a>
  </div>
  </div>
        </div>

        <div className="logo-section">
          <div className="brand-box">
            <img
              src="https://www.academichelpstore.com/logo.jpeg"
              alt="Logo"
              className="brand-logo"
            />
            <div>
              <div className="brand-title">Edwin_Incorporation</div>
              <div className="brand-subtitle">
                Services for Academicians || Universities || Colleges || Journals Editors || Admission Services
              </div>
            </div>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search services..." />
            <button type="button" aria-label="Search"><Search size={20} /></button>
          </div>
        </div>

        <button
          type="button"
          className="mobile-nav-toggle"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((current) => !current)}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2.6} /> : <Menu size={24} strokeWidth={2.6} />}
        </button>
      </header>

      <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        {MENU_STRUCTURE.map((item, index) => (
          <NavItem key={index} item={item} onNavigate={() => setIsMobileMenuOpen(false)} />
        ))}
      </nav>

      <style>{`
        .main-navbar {
         position: relative;
          z-index: 1000;
          background: ${COLORS.white};
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.12);
          font-family: inherit;
        }

        .top-bar {
  position: relative;
  background: #B88417;
  color: ${COLORS.white};
  padding: 6px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  overflow: hidden;
}

        .top-bar::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 360px;
          height: 3px;
          background: linear-gradient(90deg, ${COLORS.accentGold}, ${COLORS.accentGoldDark});
          clip-path: polygon(0 0, 100% 0, 96% 100%, 0 100%);
        }

        .top-left { display: flex; align-items: center; gap: 10px; }
        .top-left span { display: flex; align-items: center; gap: 5px; }
        .top-divider { opacity: 0.55; }

        .top-social { display: flex; gap: 10px; font-weight: 800; }
        .top-social a {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.12);
          font-size: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .top-social a:hover { background: ${COLORS.accentGold}; color: ${COLORS.deepBlue}; }

        .logo-section {
          background: ${COLORS.white};
          padding: 14px 52px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-box { display: flex; align-items: center; gap: 22px; }
        .brand-logo { height: 62px; width: 62px; object-fit: contain; }
        .brand-title {
          font-size: 26px;
          line-height: 1.0;
          font-weight: 900;
          color: ${COLORS.deepBlue};
          letter-spacing: -0.7px;
        }
        .brand-subtitle {
          margin-top: 4px;
          color: ${COLORS.lightText};
          font-size: 14px;
          line-height: 1.6;
        }

        .search-box {
  position: relative;
  width: 260px;
}

.search-box input {
  width: 100%;
  height: 36px;
  padding: 0 40px 0 15px;
  line-height: 36px;
  border-radius: 12px;
  border: 1px solid ${COLORS.borderGray};
  background: ${COLORS.lightGray};
  color: ${COLORS.darkText};
  font-size: 13px;
  outline: none;
  transition: all 0.25s ease;
}
        .search-box input:focus {
          border-color: ${COLORS.accentGold};
          box-shadow: 0 0 0 4px rgba(214, 167, 53, 0.18);
          background: ${COLORS.white};
        }
        .search-box button {
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${COLORS.deepBlue};
          color: ${COLORS.white};
          cursor: pointer;
          box-shadow: 0 6px 16px rgba(6, 42, 83, 0.25);
        }

        .mobile-nav-toggle {
          display: none;
          width: 100%;
          min-height: 52px;
          border: 0;
          background: linear-gradient(90deg, ${COLORS.primaryBlue}, ${COLORS.deepBlue});
          color: ${COLORS.white};
          align-items: center;
          justify-content: flex-end;
          padding: 0 20px;
          cursor: pointer;
        }

       .nav-menu {
  background: linear-gradient(90deg, ${COLORS.primaryBlue}, ${COLORS.deepBlue});
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  overflow: visible;
  gap: 4px;
  position: sticky;
  top: 0;
  z-index: 999;
}

        .nav-item-wrap { position: relative; }
        .nav-link-content { display: flex; align-items: center; gap: 9px; }

        .nav-link-top {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 0 13px;
  text-decoration: none;
  color: ${COLORS.white};
  font-size: 14px;
  font-weight: 700;
  white-space: nowrap;
  border-bottom: 4px solid transparent;
  transition: all 0.25s ease;
}
        .nav-link-top:hover {
          background: linear-gradient(180deg, #E7B743, ${COLORS.accentGold});
          color: ${COLORS.white};
          border-bottom-color: ${COLORS.accentGoldDark};
        }

        .dropdown-menu {
          position: absolute;
          background: ${COLORS.white};
          min-width: 340px;
          padding: 12px;
          border-top: 5px solid ${COLORS.accentGold};
          border-radius: 0 0 14px 14px;
          box-shadow: 0 24px 55px ${COLORS.shadow};
          z-index: 9999;
          animation: dropdownFade 0.18s ease;
        }
        .top-dropdown { top: 100%; left: 0; }
        .top-dropdown-right { left: auto; right: 0; }
        .side-dropdown { top: -12px; left: 100%; border-radius: 14px; }
        .side-dropdown-left { left: auto; right: 100%; }

        .nav-link-sub {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 18px;
          border-radius: 9px;
          color: ${COLORS.darkText};
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
          white-space: nowrap;
          transition: all 0.22s ease;
        }
        .submenu-icon { color: ${COLORS.deepBlue}; flex: 0 0 auto; }
        .chevron-right { color: ${COLORS.deepBlue}; }
        .nav-link-sub:hover {
  background: #D8E8FA !important;
  color: #04172c !important;
  padding-left: 24px !important;
  box-shadow: inset 4px 0 0 #C89B3C !important;
}
        .nav-link-sub:hover .submenu-icon { color: ${COLORS.accentGoldDark}; }

        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 992px) {
          .top-bar, .logo-section { padding-left: 20px; padding-right: 20px; }
          .logo-section { flex-direction: column; align-items: flex-start; gap: 18px; }
          .search-box { width: 100%; }
          .mobile-nav-toggle { display: flex; }
          .nav-menu {
            display: none;
            position: static;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow: visible;
            padding: 8px 12px 14px;
            gap: 0;
          }
          .nav-menu.mobile-open { display: flex; }
          .nav-item-wrap { width: 100%; }
          .nav-link-top {
            min-height: 48px;
            width: 100%;
            justify-content: space-between;
            padding: 0 12px;
            border-bottom: 1px solid rgba(255,255,255,0.12);
            border-radius: 8px;
            white-space: normal;
          }
          .dropdown-menu {
            position: static;
            min-width: 0;
            width: 100%;
            margin: 4px 0 8px;
            padding: 8px;
            border-top: 0;
            border-left: 3px solid ${COLORS.accentGold};
            border-radius: 8px;
            box-shadow: none;
            animation: none;
          }
          .side-dropdown {
            border-radius: 8px;
            margin-left: 10px;
            width: calc(100% - 10px);
          }
          .top-dropdown-right,
          .side-dropdown-left {
            left: auto;
            right: auto;
          }
          .nav-link-sub {
            min-height: 44px;
            padding: 11px 12px;
            gap: 10px;
            white-space: normal;
            font-size: 14px;
          }
          .chevron,
          .chevron-right {
            flex: 0 0 auto;
            transition: transform 0.2s ease;
          }
          .nav-item-wrap.is-open > a .chevron,
          .nav-item-wrap.is-open > a .chevron-right {
            transform: rotate(180deg);
          }
        }
     
        
      `}
      </style>
    </>
  );
};

export default Navbar;
