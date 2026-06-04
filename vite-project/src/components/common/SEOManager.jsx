import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const baseDomain = 'https://edwinincorp.com';
const defaultTitle = 'Edwin Incorporation | Research Publication, Journal Indexing & Academic Support Services';
const defaultDesc = 'Edwin Incorporation provides research publication support, journal indexing assistance, conference management, editorial services, academic consulting, and institutional support worldwide.';
const defaultImage = `${baseDomain}/assets/hero1-DfHvc1W0.jpg`; // Fallback image from built assets or root

const seoConfig = {
  '/': {
    title: 'Edwin Incorporation | Research Publication, Journal Indexing & Academic Support Services',
    desc: 'Edwin Incorporation provides research publication support, journal indexing assistance, conference management, editorial services, academic consulting, and institutional support worldwide.',
    keywords: 'research publication, journal indexing, academic services, book publication, patent support, conference organization, UGC Care, Scopus, Crossref, DOI registration'
  },
  '/about-us': {
    title: 'About Us | Edwin Incorporation',
    desc: 'Learn more about Edwin Incorporation, our mission, vision, and our commitment to academic and research excellence globally.',
    keywords: 'about edwin incorporation, academic research team, publication support mission'
  },
  '/jobs': {
    title: 'Career Opportunities | Edwin Incorporation',
    desc: 'Explore career opportunities, data entry operator jobs, recruitment services, and academic job openings at Edwin Incorporation.',
    keywords: 'jobs, recruitment, careers, academic openings, data entry operator jobs'
  },
  '/apply-schedule-meeting': {
    title: 'Schedule a Meeting | Edwin Incorporation',
    desc: 'Schedule a meeting with our academic consultants to discuss your research, publication, or institutional needs.',
    keywords: 'schedule meeting, academic consulting, research help'
  },
  '/partnership-programme': {
    title: 'Partnership Programme | Edwin Incorporation',
    desc: 'Join the Edwin Incorporation Partnership Programme and collaborate with us to enhance academic research and support services.',
    keywords: 'academic partnership, research collaboration, institutional network'
  },
  '/awards': {
    title: 'Academic Awards & Recognition | Edwin Incorporation',
    desc: 'Apply for academic awards, professional recognition, certificates, and excellence awards in research and development.',
    keywords: 'academic awards, research awards, professional recognition'
  },
  '/Researchpaper': {
    title: 'Research Paper Publication Services | Edwin Incorporation',
    desc: 'Get research paper publication support, journal selection, manuscript formatting, and UGC Care / Scopus indexing assistance.',
    keywords: 'research paper publication, scopus index, ugc care, manuscript formatting, publication support'
  },
  '/researchpaper': {
    title: 'Research Paper Publication Services | Edwin Incorporation',
    desc: 'Get research paper publication support, journal selection, manuscript formatting, and UGC Care / Scopus indexing assistance.',
    keywords: 'research paper publication, scopus index, ugc care, manuscript formatting, publication support'
  },
  '/Onemember': {
    title: 'One Member Plan | Edwin Incorporation',
    desc: 'Explore our premium One Member academic plan offering exclusive publication, indexing, and research benefits.',
    keywords: 'one member plan, academic membership, research plan'
  },
  '/one-member': {
    title: 'One Member Plan | Edwin Incorporation',
    desc: 'Explore our premium One Member academic plan offering exclusive publication, indexing, and research benefits.',
    keywords: 'one member plan, academic membership, research plan'
  },
  '/Doimember': {
    title: 'DOI Membership Services | Edwin Incorporation',
    desc: 'Apply for DOI membership, Crossref DOI allotment, and digital object identification support for academic journals.',
    keywords: 'doi membership, crossref doi, journal indexing, doi portal'
  },
  '/doi-member': {
    title: 'DOI Membership Services | Edwin Incorporation',
    desc: 'Apply for DOI membership, Crossref DOI allotment, and digital object identification support for academic journals.',
    keywords: 'doi membership, crossref doi, journal indexing, doi portal'
  },
  '/Professionalmember': {
    title: 'Professional Membership | Edwin Incorporation',
    desc: 'Become a professional member of Edwin Incorporation to connect with a global network of researchers and academicians.',
    keywords: 'professional member, academic society, research network'
  },
  '/professional-member': {
    title: 'Professional Membership | Edwin Incorporation',
    desc: 'Become a professional member of Edwin Incorporation to connect with a global network of researchers and academicians.',
    keywords: 'professional member, academic society, research network'
  },
  '/editorial-board-membership': {
    title: 'Editorial Board Membership | Edwin Incorporation',
    desc: 'Apply for editorial board membership and reviewer positions in reputed international research journals.',
    keywords: 'editorial board, journal reviewer, academic editor'
  },
  '/membership-others': {
    title: 'Academic Memberships | Edwin Incorporation',
    desc: 'Explore various academic and institutional membership programs offered by Edwin Incorporation.',
    keywords: 'academic membership, research society, institutional support'
  },
  '/services-to-members': {
    title: 'Services to Members | Edwin Incorporation',
    desc: 'Access research resources, publication support, legal aid, and exclusive academic services for our registered members.',
    keywords: 'member services, academic help, research resources'
  },
  '/books-publication-services': {
    title: 'Book & ISBN Publication Services | Edwin Incorporation',
    desc: 'Publish your academic books, textbooks, and conference proceedings with ISBN registry and distribution support.',
    keywords: 'book publication, publish textbook, isbn registration, academic books'
  },
  '/apply-for-fellowship': {
    title: 'Apply for Academic Fellowship | Edwin Incorporation',
    desc: 'Apply for academic fellowships and research grants to support your scholarly pursuits and credentials.',
    keywords: 'academic fellowship, research grant, fellowship award'
  },
  '/apply-for-patent-registration': {
    title: 'Patent Registration Support | Edwin Incorporation',
    desc: 'Get expert assistance for patent filing, drafting, document preparation, and patent registration globally.',
    keywords: 'patent registration, patent filing, ipr support, patent drafting'
  },
  '/mooc-supports': {
    title: 'MOOC Development & Support | Edwin Incorporation',
    desc: 'Professional MOOC content development, platform integration, and e-learning support for universities.',
    keywords: 'mooc support, e-learning, course design, online learning platform'
  },
  '/ConferenceApplyNow': {
    title: 'Academic Conference Collaboration | Edwin Incorporation',
    desc: 'Apply for conference sponsorship, proceedings printing, resource persons, and academic event management support.',
    keywords: 'conference sponsorship, proceed printing, academic events, keynote speaker'
  },
  '/academic-institutional-partners': {
    title: 'Academic & Institutional Partners | Edwin Incorporation',
    desc: 'Collaborate with Edwin Incorporation as an academic or institutional partner to enhance research opportunities.',
    keywords: 'institutional partners, university collaboration, research mou'
  },
  '/rnd-ebi': {
    title: 'Research & Development Support | Edwin Incorporation',
    desc: 'Access R&D consultancy, writing assistance, citation growth, and project funding support for researchers.',
    keywords: 'rnd services, research consultancy, funding proposals, citation improvement'
  },
  '/edwin-academic-immigration-solutions': {
    title: 'Academic Immigration Solutions | Edwin Incorporation',
    desc: 'Get academic immigration guidance, credential evaluation, and visa support for international scholars.',
    keywords: 'academic immigration, evaluation credentials, global researchers'
  },
  '/online-membership-articles-accessing': {
    title: 'Online Articles & Journal Access | Edwin Incorporation',
    desc: 'Access online research articles, academic journals, e-shodha-patra, and member databases.',
    keywords: 'journal articles, database access, online journals'
  },
  '/apply-now-writing-assistance': {
    title: 'Writing Assistance Services | Edwin Incorporation',
    desc: 'Professional research writing assistance, PhD assistance, thesis drafting, proofreading, and formatting.',
    keywords: 'phd assistance, research writing, thesis proofreading, paper drafting'
  },
  '/faculty-co-guide-registration': {
    title: 'Faculty Co-Guide Registration | Edwin Incorporation',
    desc: 'Register as an academic co-guide or research supervisor to guide PhD and Master\'s scholars.',
    keywords: 'phd co-guide, research supervisor, academic guide'
  },
  '/ApplyForMajorMinorproject': {
    title: 'Major & Minor Project Assistance | Edwin Incorporation',
    desc: 'Apply for assistance with university major and minor research projects, proposal drafting, and reporting.',
    keywords: 'minor projects, research proposal, major project support'
  },
  '/increase-citation-doi': {
    title: 'Increase Citation & DOI Indexing | Edwin Incorporation',
    desc: 'Strategies to increase research paper citations, DOI integration, Google Scholar, and Scopus visibility.',
    keywords: 'increase citation, scopus citation, crossref index'
  },
  '/apply-for-patent-support': {
    title: 'Patent Drafting & Filing Support | Edwin Incorporation',
    desc: 'Drafting, filing, and processing support for intellectual property and patents.',
    keywords: 'patent search, patent filing help, patent drafting'
  },
  '/apply-for-grants': {
    title: 'Research Grants Application Support | Edwin Incorporation',
    desc: 'Guidance on applying for national and international research grants, project funding, and proposals.',
    keywords: 'research grants, project funding, proposal writing'
  },
  '/apply-for-plagiarism-detector': {
    title: 'Plagiarism Detection Services | Edwin Incorporation',
    desc: 'Check similarity index using Turnitin and advanced plagiarism detectors with detailed reports.',
    keywords: 'plagiarism check, similarity check, turnitin report'
  },
  '/apply-for-turnitin-support': {
    title: 'Turnitin Account & Support | Edwin Incorporation',
    desc: 'Get official Turnitin support, similarity checking, and draft improvement services.',
    keywords: 'turnitin support, anti-plagiarism check, edit paper'
  },
  '/apply-for-api-calculator': {
    title: 'Academic API Score Calculator | Edwin Incorporation',
    desc: 'Calculate your Academic Performance Indicator (API) score for UGC appointments and promotions.',
    keywords: 'api calculator, ugc api score, academic appraisal'
  },
  '/educational': {
    title: 'Educational Programs & Support | Edwin Incorporation',
    desc: 'Academic consulting, NGO support, news channels, educational tours, and degree support services.',
    keywords: 'educational services, academic tour, ngo help, school consultancy'
  },
  '/academic-news-channel': {
    title: 'Academic News Channel | Edwin Incorporation',
    desc: 'Get the latest news and updates from the global academic community, research announcements, and events.',
    keywords: 'academic news, university news, research updates'
  },
  '/apply-for-news': {
    title: 'Submit Academic News | Edwin Incorporation',
    desc: 'Submit your university event, conference press release, or academic news to our news channel.',
    keywords: 'publish news, academic press release, college event news'
  },
  '/ngo-support': {
    title: 'NGO Support & Consultancy | Edwin Incorporation',
    desc: 'Socio-educational NGO project funding, CSR grants, registration, and organizational support.',
    keywords: 'ngo support, csr grant funding, educational ngo registration'
  },
  '/international-educational-tours': {
    title: 'International Educational Tours | Edwin Incorporation',
    desc: 'Organize global academic tours, university visits, and student exchange trips with Edwin Travels.',
    keywords: 'educational tours, student tour, university visit global'
  },
  '/phd-programmes': {
    title: 'PhD Programmes Support | Edwin Incorporation',
    desc: 'PhD admission consulting, university selection, synopsis preparation, and course work guidance.',
    keywords: 'phd assistance, docotoral admission, thesis guide'
  },
  '/pg-programmes': {
    title: 'PG Programmes Guidance | Edwin Incorporation',
    desc: 'Admission guidance and project support for Postgraduate academic degrees.',
    keywords: 'postgraduate admission, pg programs, masters degree assistance'
  },
  '/ug-programmes': {
    title: 'UG Programmes Support | Edwin Incorporation',
    desc: 'Undergraduate course selection, university application support, and guidance.',
    keywords: 'undergraduate study, college admissions guide'
  },
  '/online-learning-mooc': {
    title: 'Online Learning & MOOC Courses | Edwin Incorporation',
    desc: 'Explore online courses, MOOC platforms, e-learning materials, and academic certifications.',
    keywords: 'online learning, mooc registration, study from home'
  },
  '/help-for-education': {
    title: 'Financial Help for Education | Edwin Incorporation',
    desc: 'Scholarships, financial aid, and educational sponsorship programs for deserving students.',
    keywords: 'education funding, student scholarship, academic financial aid'
  },
  '/university-college': {
    title: 'University & College Services | Edwin Incorporation',
    desc: 'Institutional services including NAAC, NBA preparation, conference organizing, and DELLNETT membership.',
    keywords: 'naac assistance, nba training, Proceed printing, college sponsorship'
  },
  '/institutionalMembership': {
    title: 'Institutional Membership | Edwin Incorporation',
    desc: 'Institutional memberships for colleges and universities to gain global collaboration benefits.',
    keywords: 'institutional membership, college collaboration'
  },
  '/apply-for-naac-support': {
    title: 'NAAC Accreditation Support | Edwin Incorporation',
    desc: 'Expert consultancy for NAAC grading preparation, SSR drafting, and college audits.',
    keywords: 'naac grade, ssr report prep, college naac audit'
  },
  '/apply-for-hr-support': {
    title: 'HR Support for Institutions | Edwin Incorporation',
    desc: 'Recruitment, faculty hiring, staff training, and HR management solutions for educational institutions.',
    keywords: 'faculty hiring, college hr support, teacher recruitment'
  },
  '/apply-for-nba-training-support': {
    title: 'NBA Training & Accreditation | Edwin Incorporation',
    desc: 'National Board of Accreditation training support, outcomes-based education consulting for colleges.',
    keywords: 'nba accreditation, outcomes based education, college training'
  },
  '/support-for-proceeding-printing': {
    title: 'Conference Proceeding Printing | Edwin Incorporation',
    desc: 'High-quality print and digital proceeding publication with ISBN and DOI indexing.',
    keywords: 'proceeding printing, conference proceedings, isbn proceeding'
  },
  '/paper-publication-support': {
    title: 'Paper Publication Support for Colleges | Edwin Incorporation',
    desc: 'Bulk paper publication support, conference paper indexing in Scopus and UGC Care journals.',
    keywords: 'bulk publication, scopus index support, conference papers'
  },
  '/sponsorship-for-organizing-conference': {
    title: 'Conference Sponsorship | Edwin Incorporation',
    desc: 'Get sponsorship, financial grants, and technical collaborations for academic conferences.',
    keywords: 'conference sponsorship, grant academic event'
  },
  '/need-resource-person': {
    title: 'Find Resource Persons & Keynotes | Edwin Incorporation',
    desc: 'Connect with eminent researchers, professors, and industry experts for keynote sessions.',
    keywords: 'resource person, keynote speaker, guest lecture college'
  },
  '/advertisement-support': {
    title: 'Academic Advertisement & Media | Edwin Incorporation',
    desc: 'Advertise your admissions, recruitments, and events in academic journals and portals.',
    keywords: 'college ads, admission advertisement, academic portals'
  },
  '/membership-dellnett': {
    title: 'DELLNETT Membership Support | Edwin Incorporation',
    desc: 'E-library access, institutional library networking, and DELLNETT database registration.',
    keywords: 'dellnett library, e-library network, journal access database'
  },
  '/naac-assistance': {
    title: 'NAAC Assistance Portal | Edwin Incorporation',
    desc: 'Accreditation consulting and preparation support for universities and colleges.',
    keywords: 'naac preparation, ssr consultation'
  },
  '/editors-ngo-business': {
    title: 'Journal Editors & Business Support | Edwin Incorporation',
    desc: 'Services for journal editors, business automation, digital marketing, and mobile app development.',
    keywords: 'journal editor services, business website, digital marketing'
  },
  '/journal-help-board': {
    title: 'Journal Help Board | Edwin Incorporation',
    desc: 'Support for research journal editors, publishing platforms, indexing, and peer review setups.',
    keywords: 'journal help, ojs configuration, scopus indexing help'
  },
  '/opening-journal-services': {
    title: 'Launch a New Research Journal | Edwin Incorporation',
    desc: 'Start your own academic journal with complete web setup, OJS hosting, and ISSN guidance.',
    keywords: 'start research journal, ojs hosting, setup journal website'
  },
  '/technical-support-for-indexing': {
    title: 'Journal Indexing Support | Edwin Incorporation',
    desc: 'Get your journal indexed in Scopus, Web of Science, DOAJ, and UGC Care list.',
    keywords: 'journal index help, scopus list inclusion, clarivate index'
  },
  '/print-eissn-allotment-support': {
    title: 'Print & E-ISSN Registration | Edwin Incorporation',
    desc: 'Documentation support for getting ISSN and E-ISSN for academic journals.',
    keywords: 'issn allotment, e-issn registration, journal serial number'
  },
  '/free-doi': {
    title: 'Free DOI Services | Edwin Incorporation',
    desc: 'Access free digital object identifiers for pilot publications and academic archives.',
    keywords: 'free doi, digital object identifier free'
  },
  '/paid-doi-crossref': {
    title: 'Paid Crossref DOI Allotment | Edwin Incorporation',
    desc: 'Register official Crossref DOIs for research articles, issues, and books.',
    keywords: 'crossref doi prefix, register doi, research paper doi'
  },
  '/doi-portal': {
    title: 'DOI Registration Portal | Edwin Incorporation',
    desc: 'Manage DOI prefixes, metadata submissions, and Crossref digital archiving.',
    keywords: 'doi portal, register metadata crossref'
  },
  '/membership-portal': {
    title: 'Member Portal | Edwin Incorporation',
    desc: 'Access the Edwin Incorporation member dashboard, account details, and services.',
    keywords: 'member login, edwin dashboard'
  },
  '/csr-funding-assistant': {
    title: 'CSR Funding & Grants Support | Edwin Incorporation',
    desc: 'Connect with corporate sponsors for CSR educational funding and research projects.',
    keywords: 'csr educational funding, corporate social responsibility grants'
  },
  '/services-for-business': {
    title: 'Business Services | Edwin Incorporation',
    desc: 'Professional automation, software development, web development, and digital marketing.',
    keywords: 'business website design, local marketing, custom software'
  },
  '/business-automation': {
    title: 'Business Automation & ERP | Edwin Incorporation',
    desc: 'Custom ERP solutions, database management, and automation tools for businesses.',
    keywords: 'business automation, erp software, custom database'
  },
  '/digital-marketing': {
    title: 'Digital Marketing & SEO Services | Edwin Incorporation',
    desc: 'SEO optimization, social media marketing, and online brand promotion for journals and businesses.',
    keywords: 'digital marketing, journal promotion, seo services'
  },
  '/apps-for-ios-and-android': {
    title: 'Mobile App Development | Edwin Incorporation',
    desc: 'Custom iOS and Android app development for journals, colleges, and enterprises.',
    keywords: 'mobile application, android app development, ios app'
  },
  '/whatsapp-services': {
    title: 'WhatsApp Business API Integration | Edwin Incorporation',
    desc: 'Automate communication with WhatsApp bots, notification updates, and academic support.',
    keywords: 'whatsapp api, academic bot, automate messages'
  },
  '/hr-support-for-business': {
    title: 'Business HR & Recruitment | Edwin Incorporation',
    desc: 'Corporate staffing, interview management, and professional HR solutions.',
    keywords: 'staffing services, recruitment agency, corporate training'
  },
  '/edwin-journal': {
    title: 'Edwin Journals Portal | Edwin Incorporation',
    desc: 'Explore peer-reviewed international academic journals published under Edwin Incorporation.',
    keywords: 'edwin journals, peer review journal list'
  },
  '/constructions': {
    title: 'Infrastructure & College Building | Edwin Incorporation',
    desc: 'Consulting and infrastructure design services for college and university campuses.',
    keywords: 'campus infrastructure design, university construction guide'
  },
  '/pay-now': {
    title: 'Pay Online | Edwin Incorporation',
    desc: 'Secure online payment portal for Edwin Incorporation publications, memberships, and services.',
    keywords: 'pay now edwin, online payment research'
  },
  '/paynow': {
    title: 'Pay Online | Edwin Incorporation',
    desc: 'Secure online payment portal for Edwin Incorporation publications, memberships, and services.',
    keywords: 'pay now edwin, online payment research'
  },
  '/faq': {
    title: 'Frequently Asked Questions | Edwin Incorporation',
    desc: 'Find answers about research publication, DOI indexing, patent registration, and academic support.',
    keywords: 'research faq, indexing help faq, publication questions'
  },
  '/feedback-complaint-box': {
    title: 'Feedback & Complaint Box | Edwin Incorporation',
    desc: 'Share your feedback or register complaints to help us improve our academic support services.',
    keywords: 'feedback, complaint box, support help desk'
  },
  '/gallery': {
    title: 'Event Gallery | Edwin Incorporation',
    desc: 'Photo gallery of national conferences, workshops, celebrations, and academic events.',
    keywords: 'photo gallery, conference pictures, academic event photos'
  },
  '/conferences': {
    title: 'Conference Gallery | Edwin Incorporation',
    desc: 'Photos and memories from national and international research conferences sponsored by Edwin.',
    keywords: 'conference images, barhi conference, chhindwara conference'
  },
  '/birthdays': {
    title: 'Birthdays & Office Celebrations | Edwin Incorporation',
    desc: 'Memories and photos from office birthday parties and internal celebrations.',
    keywords: 'birthday celebration photos'
  },
  '/national-celebrations': {
    title: 'National Celebrations Gallery | Edwin Incorporation',
    desc: 'Photos of Independence Day, Republic Day, and festival celebrations at Edwin Incorporation.',
    keywords: 'republic day photos, holi celebrations, independence day photos'
  },
  '/press': {
    title: 'Press & Media Coverage | Edwin Incorporation',
    desc: 'News clippings, press releases, and media coverage of our academic initiatives.',
    keywords: 'press clippings, news release, academic media coverage'
  },
  '/contact': {
    title: 'Contact Us | Edwin Incorporation',
    desc: 'Get in touch with Edwin Incorporation offices in Delhi and global support teams.',
    keywords: 'contact edwin, office phone number, support email'
  }
};

const setMetaTag = (name, property, content) => {
  let element;
  if (name) {
    element = document.querySelector(`meta[name="${name}"]`);
  } else if (property) {
    element = document.querySelector(`meta[property="${property}"]`);
  }

  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    if (name) element.setAttribute('name', name);
    if (property) element.setAttribute('property', property);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

const setCanonicalLink = (href) => {
  let element = document.querySelector('link[rel="canonical"]');
  if (element) {
    element.setAttribute('href', href);
  } else {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    element.setAttribute('href', href);
    document.head.appendChild(element);
  }
};

const setJsonLd = (schemas) => {
  document.querySelectorAll('script[type="application/ld+json"].seo-structured-data').forEach(el => el.remove());
  
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.className = 'seo-structured-data';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
};

export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const config = seoConfig[path] || {
      title: `Edwin Incorporation | Academic Services`,
      desc: defaultDesc,
      keywords: 'academic help, research assistance, journal support, edwin incorporation'
    };

    const pageTitle = config.title;
    const pageDesc = config.desc;
    const pageKeywords = config.keywords;
    const pageUrl = `${baseDomain}${path}`;

    // Title
    document.title = pageTitle;

    // Standard Meta Tags
    setMetaTag('description', null, pageDesc);
    setMetaTag('keywords', null, pageKeywords);
    setCanonicalLink(pageUrl);

    // Open Graph
    setMetaTag(null, 'og:title', pageTitle);
    setMetaTag(null, 'og:description', pageDesc);
    setMetaTag(null, 'og:url', pageUrl);
    setMetaTag(null, 'og:type', 'website');
    setMetaTag(null, 'og:image', defaultImage);

    // Twitter Card
    setMetaTag('twitter:card', null, 'summary_large_image');
    setMetaTag('twitter:title', null, pageTitle);
    setMetaTag('twitter:description', null, pageDesc);
    setMetaTag('twitter:image', null, defaultImage);

    // Breadcrumb list
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': baseDomain
        }
      ]
    };

    if (path !== '/') {
      const pageName = path.substring(1).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      breadcrumbList.itemListElement.push({
        '@type': 'ListItem',
        'position': 2,
        'name': pageName,
        'item': pageUrl
      });
    }

    // Organization Schema
    const orgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'Edwin Incorporation',
      'url': baseDomain + '/',
      'logo': `${baseDomain}/favicon.svg`,
      'contactPoint': {
        '@type': 'ContactPoint',
        'telephone': '+91-6262752167',
        'contactType': 'customer support',
        'email': 'care@edwinepc.com'
      },
      'sameAs': [
        'https://www.facebook.com/edwinincorp',
        'https://twitter.com/edwinincorp',
        'https://www.linkedin.com/company/edwinincorp'
      ]
    };

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': 'Edwin Incorporation',
      'url': baseDomain + '/'
    };

    // Local Business Schema
    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': 'Edwin Incorporation',
      'image': defaultImage,
      'telephone': '+91-6262752167',
      'email': 'care@edwinepc.com',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': '15th Floor, Eros Corporate Tower, Nehru Place',
        'addressLocality': 'New Delhi',
        'addressRegion': 'Delhi',
        'postalCode': '110019',
        'addressCountry': 'IN'
      },
      'url': pageUrl
    };

    setJsonLd([orgSchema, websiteSchema, breadcrumbList, localBusinessSchema]);

  }, [location]);

  return null;
}
