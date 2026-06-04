const fs = require('fs');
const path = require('path');

const baseDomain = 'https://edwinincorp.com';
const lastmod = new Date().toISOString().split('T')[0];

const canonicalRoutes = [
  '/',
  '/about-us',
  '/jobs',
  '/apply-schedule-meeting',
  '/partnership-programme',
  '/awards',
  '/researchpaper',
  '/one-member',
  '/doi-member',
  '/professional-member',
  '/editorial-board-membership',
  '/membership-others',
  '/services-to-members',
  '/books-publication-services',
  '/apply-for-fellowship',
  '/apply-for-patent-registration',
  '/mooc-supports',
  '/ConferenceApplyNow',
  '/academic-institutional-partners',
  '/rnd-ebi',
  '/edwin-academic-immigration-solutions',
  '/online-membership-articles-accessing',
  '/apply-now-writing-assistance',
  '/faculty-co-guide-registration',
  '/ApplyForMajorMinorproject',
  '/increase-citation-doi',
  '/apply-for-patent-support',
  '/apply-for-grants',
  '/apply-for-plagiarism-detector',
  '/apply-for-turnitin-support',
  '/apply-for-api-calculator',
  '/educational',
  '/academic-news-channel',
  '/apply-for-news',
  '/ngo-support',
  '/international-educational-tours',
  '/phd-programmes',
  '/pg-programmes',
  '/ug-programmes',
  '/online-learning-mooc',
  '/help-for-education',
  '/university-college',
  '/institutionalMembership',
  '/apply-for-naac-support',
  '/apply-for-hr-support',
  '/apply-for-nba-training-support',
  '/support-for-proceeding-printing',
  '/paper-publication-support',
  '/sponsorship-for-organizing-conference',
  '/need-resource-person',
  '/advertisement-support',
  '/membership-dellnett',
  '/naac-assistance',
  '/editors-ngo-business',
  '/journal-help-board',
  '/opening-journal-services',
  '/technical-support-for-indexing',
  '/print-eissn-allotment-support',
  '/free-doi',
  '/paid-doi-crossref',
  '/doi-portal',
  '/membership-portal',
  '/csr-funding-assistant',
  '/services-for-business',
  '/business-automation',
  '/digital-marketing',
  '/apps-for-ios-and-android',
  '/whatsapp-services',
  '/hr-support-for-business',
  '/edwin-journal',
  '/constructions',
  '/pay-now',
  '/faq',
  '/feedback-complaint-box',
  '/gallery',
  '/conferences',
  '/birthdays',
  '/national-celebrations',
  '/press',
  '/contact'
];

function generateSitemap() {
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  canonicalRoutes.forEach(route => {
    const loc = route === '/' ? `${baseDomain}/` : `${baseDomain}${route}`;
    const priority = route === '/' ? '1.0' : route.split('/').length > 2 ? '0.6' : '0.8';
    const changefreq = route === '/' ? 'daily' : 'weekly';
    
    xml += '  <url>\n';
    xml += `    <loc>${loc}</loc>\n`;
    xml += `    <lastmod>${lastmod}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  const sitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`Sitemap generated successfully at ${sitemapPath}`);
}

function generateRobots() {
  const publicDir = path.join(__dirname, 'public');
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseDomain}/sitemap.xml
`;

  const robotsPath = path.join(publicDir, 'robots.txt');
  fs.writeFileSync(robotsPath, robotsTxt, 'utf8');
  console.log(`robots.txt generated successfully at ${robotsPath}`);
}

generateSitemap();
generateRobots();
