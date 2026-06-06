import React from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import App from './App';
const NotFound = React.lazy(() => import('./pages/NotFound'));

// Home
const Home = React.lazy(() => import('./pages/Home/Home'));
const AboutUs = React.lazy(() => import('./pages/Home/AboutUs'));
const Jobs = React.lazy(() => import('./pages/Home/Jobs'));
const ApplyForScheduleMeeting = React.lazy(() => import('./pages/Home/ApplyForScheduleMeeting'));
const PartnershipProgramme = React.lazy(() => import('./pages/Home/PartnershipProgramme'));
const DEO = React.lazy(() => import('./pages/Home/DEO'));


// Academicians

const Awards = React.lazy(() => import('./pages/Academicians/Awards'));
const ResearchPaper = React.lazy(() => import('./pages/Academicians/ResearchPaperPublicationServices'));


const EditorialBoardMembership = React.lazy(() => import('./pages/Academicians/EditorialBoardMembership'));
const MembershipOthers = React.lazy(() => import('./pages/Academicians/MembershipOthers'));
const ServicesToMembers = React.lazy(() => import('./pages/Academicians/ServicesToMembers'));
const BooksPublicationServices = React.lazy(() => import('./pages/Academicians/BooksPublicationServices'));
const ApplyForFellowship = React.lazy(() => import('./pages/Academicians/ApplyForFellowship'));
const ApplyForPatentRegistration = React.lazy(() => import('./pages/Academicians/ApplyForPatentRegistration'));
const MOOCSupports = React.lazy(() => import('./pages/Academicians/MOOCSupports'));
const ConferenceApplyNow = React.lazy(() => import('./pages/Academicians/ConferenceApplyNow'));
const Doimember = React.lazy(() => import('./pages/Academicians/Doimember'));
const Professionalmember = React.lazy(() => import('./pages/Academicians/Professionalmember'));
const Onemember = React.lazy(() => import('./pages/Academicians/Onemember'));
const AcademicInstitutionalPartners = React.lazy(() => import('./pages/Academicians/AcademicInstitutionalPartners'));

// RnD_EBI
const RnD_EBI = React.lazy(() => import('./pages/RnD_EBI/RnD_EBI'));
const EdwinAcademicImmigrationSolutions = React.lazy(() => import('./pages/RnD_EBI/EdwinAcademicImmigrationSolutions'));
const OnlineMembershipArticlesAccessing = React.lazy(() => import('./pages/RnD_EBI/OnlineMembershipArticlesAccessing'));
const ApplyNowWritingAssistance = React.lazy(() => import('./pages/RnD_EBI/ApplyNowWritingAssistance'));
const FacultyCoGuideRegistration = React.lazy(() => import('./pages/RnD_EBI/FacultyCoGuideRegistration'));
const ApplyForMajorMinorproject = React.lazy(() => import('./pages/RnD_EBI/ApplyForMajorMinorproject'));
const IncreaseCitationDOI = React.lazy(() => import('./pages/RnD_EBI/IncreaseCitationDOI'));
const ApplyForPatentSupport = React.lazy(() => import('./pages/RnD_EBI/ApplyForPatentSupport'));
const ApplyForGrants = React.lazy(() => import('./pages/RnD_EBI/ApplyForGrants'));
const ApplyForPlagiarismDetector = React.lazy(() => import('./pages/RnD_EBI/ApplyForPlagiarismDetector'));
const ApplyForTurnitinSupport = React.lazy(() => import('./pages/RnD_EBI/ApplyForTurnitinSupport'));
const ApplyForAPICalculator = React.lazy(() => import('./pages/RnD_EBI/ApplyForAPICalculator'));

// Educational
const Educational = React.lazy(() => import('./pages/Educational/Educational'));
const AcademicNewsChannel = React.lazy(() => import('./pages/Educational/AcademicNewsChannel'));
const ApplyForNews = React.lazy(() => import('./pages/Educational/ApplyForNews'));
const NGOSupport = React.lazy(() => import('./pages/Educational/NGOSupport'));
const InternationalEducationalTours = React.lazy(() => import('./pages/Educational/InternationalEducationalTours'));
const PhDProgrammes = React.lazy(() => import('./pages/Educational/PhDProgrammes'));
const PGProgrammes = React.lazy(() => import('./pages/Educational/PGProgrammes'));
const UGProgrammes = React.lazy(() => import('./pages/Educational/UGProgrammes'));
const OnlineLearningMooc = React.lazy(() => import('./pages/Educational/OnlineLearningMooc'));
const HelpForEducation = React.lazy(() => import('./pages/Educational/HelpForEducation'));

// University_College
const University_College = React.lazy(() => import('./pages/University_College/University_College'));
const InstitutionalMembership = React.lazy(() => import('./pages/University_College/institutionalMembership'));
const ApplyForNAACSupport = React.lazy(() => import('./pages/University_College/ApplyForNAACSupport'));
const ApplyForHRSupport = React.lazy(() => import('./pages/University_College/ApplyForHRSupport'));
const ApplyForNBATrainingSupport = React.lazy(() => import('./pages/University_College/ApplyForNBATrainingSupport'));
const SupportForProceedingPrinting = React.lazy(() => import('./pages/University_College/SupportForProceedingPrinting'));
const PaperPublicationSupport = React.lazy(() => import('./pages/University_College/PaperPublicationSupport'));
const SponsorshipForOrganizingConference = React.lazy(() => import('./pages/University_College/SponsorshipForOrganizingConference'));
const NeedResourcePerson = React.lazy(() => import('./pages/University_College/NeedResourcePerson'));
const AdvertisementSupport = React.lazy(() => import('./pages/University_College/AdvertisementSupport'));
const MembershipDELLNETT = React.lazy(() => import('./pages/University_College/MembershipDELLNETT'));
const NAACAssistance = React.lazy(() => import('./pages/University_College/NAACAssistance'));

// Editors_NGO_Business
const Editors_NGO_Business = React.lazy(() => import('./pages/Editors_NGO_Business/Editors_NGO_Business'));
const JournalHelpBoard = React.lazy(() => import('./pages/Editors_NGO_Business/JournalHelpBoard'));
const OpeningJournalServices = React.lazy(() => import('./pages/Editors_NGO_Business/OpeningJournalServices'));
const TechnicalSupportForIndexing = React.lazy(() => import('./pages/Editors_NGO_Business/TechnicalSupportForIndexing'));
const PrintEISSNAllotmentSupport = React.lazy(() => import('./pages/Editors_NGO_Business/PrintEISSNAllotmentSupport'));
const FreeDOI = React.lazy(() => import('./pages/Editors_NGO_Business/FreeDOI'));
const PaidDOICrossref = React.lazy(() => import('./pages/Editors_NGO_Business/PaidDOICrossref'));
const DOIPortal = React.lazy(() => import('./pages/Editors_NGO_Business/DOIPortal'));
const MembershipPortal = React.lazy(() => import('./pages/Editors_NGO_Business/MembershipPortal'));
const CSRFundingAssistant = React.lazy(() => import('./pages/Editors_NGO_Business/CSRFundingAssistant'));
const ServiceForBusiness = React.lazy(() => import('./pages/Editors_NGO_Business/ServiceForBusiness'));
const BusinessAutomation = React.lazy(() => import('./pages/Editors_NGO_Business/BusinessAutomation'));
const DigitalMarketing = React.lazy(() => import('./pages/Editors_NGO_Business/DigitalMarketing'));
const AppsForIOSAndAndroid = React.lazy(() => import('./pages/Editors_NGO_Business/AppsForIOSAndAndroid'));
const WhatsappServices = React.lazy(() => import('./pages/Editors_NGO_Business/WhatsappServices'));
const HRSupportForBusiness = React.lazy(() => import('./pages/Editors_NGO_Business/HRSupportForBusiness'));
const EdwinJournal = React.lazy(() => import('./pages/Editors_NGO_Business/EdwinJournal'));
const Constructions = React.lazy(() => import('./pages/Editors_NGO_Business/Constructions'));

// Pay_Now
const Paynow = React.lazy(() => import('./pages/Pay_Now/Paynow'));
const FAQ = React.lazy(() => import('./pages/Pay_Now/FAQ'));
const FeedbackComplaintBox = React.lazy(() => import('./pages/Pay_Now/FeedbackComplaintBox'));

// Gallery
const Gallery = React.lazy(() => import('./pages/Gallery/Gallery'));
const Conferences = React.lazy(() => import('./pages/Gallery/Conferences'));
const Birthdays = React.lazy(() => import('./pages/Gallery/Birthdays'));
const NationalCelebrations = React.lazy(() => import('./pages/Gallery/NationalCelebrations'));

// Press
const Press = React.lazy(() => import('./pages/Press/Press'));

// Contact
const Contact = React.lazy(() => import('./pages/Contact/Contact'));

function HashRedirect({ hashMap, defaultTo }) {
  const location = useLocation();
  const redirectTo = hashMap[location.hash] || defaultTo;
  return <Navigate to={redirectTo} replace />;
}

const simpleRedirects = [
  ['404', '/'],
  ['Apply-For-Grants', '/apply-for-grants', true],
  ['BPO-Services', '/university-college', true],
  ['bulk', '/Researchpaper'],
  ['doi-membership', '/doi-member'],
  ['Editorial-Board', '/editorial-board-membership', true],
  ['Edwin-journals', '/edwin-journal', true],
  ['edwin-journals', '/edwin-journal'],
  ['e-shodha-patra', '/online-membership-articles-accessing'],
  ['FAQ', '/faq', true],
  ['faq-for-bot', '/faq'],
  ['Forms/Awards', '/awards', true],
  ['Forms/education-services', '/educational', true],
  ['Forms/research-and-development-services', '/rnd-ebi', true],
  ['Forms/services-for-academicians', '/academicians', true],
  ['Forms/services-for-business-supports', '/services-for-business', true],
  ['Forms/Services-for-University-and-Colleges', '/university-college', true],
  ['France', '/ConferenceApplyNow', true],
  ['FS', '/apply-for-fellowship', true],
  ['one', '/one-member'],
  ['PAY2EDWIN', '/paynow', true],
  ['ph-d-assistance', '/apply-now-writing-assistance'],
  ['photo-gallery', '/gallery'],
  ['press-media', '/press'],
  ['public-image', '/gallery'],
  ['Recruitment', '/jobs', true],
  ['Services', '/', true],
].map(([path, to, caseSensitive]) => ({
  path,
  ...(caseSensitive ? { caseSensitive: true } : {}),
  element: <Navigate to={to} replace />,
}));

const hashRedirects = [
  {
    path: 'acadnews',
    defaultTo: '/academic-news-channel',
    hashMap: { '#news': '/apply-for-news' },
  },
  {
    path: 'apply-for-award',
    defaultTo: '/awards',
    hashMap: { '#apply': '/awards', '#upcoming': '/awards' },
  },
  {
    path: 'apply-for-conferences',
    defaultTo: '/ConferenceApplyNow',
    hashMap: {
      '#conf': '/ConferenceApplyNow',
      '#previous': '/conferences',
      '#resourceperson': '/ConferenceApplyNow',
      '#travelgrant': '/ConferenceApplyNow',
    },
  },
  {
    path: 'Apply-for-Edwin-Tour-s-N-Travel-s',
    caseSensitive: true,
    defaultTo: '/international-educational-tours',
    hashMap: { '#International-Education-Tours': '/international-educational-tours' },
  },
  {
    path: 'apply-for-free-degree-programe',
    defaultTo: '/phd-programmes',
    hashMap: { '#apply-now': '/phd-programmes', '#phd': '/phd-programmes' },
  },
  {
    path: 'apply-for-minor-project',
    defaultTo: '/ApplyForMajorMinorproject',
    hashMap: { '#projects': '/ApplyForMajorMinorproject' },
  },
  {
    path: 'apply-for-phd-assistancce',
    defaultTo: '/apply-now-writing-assistance',
    hashMap: { '#phd': '/apply-now-writing-assistance' },
  },
  {
    path: 'apply-for-website',
    defaultTo: '/services-for-business',
    hashMap: { '#auto': '/business-automation', '#whatsapp': '/whatsapp-services' },
  },
  {
    path: 'calculator',
    defaultTo: '/apply-for-api-calculator',
    hashMap: {
      '#api': '/apply-for-api-calculator',
      '#ugc': '/apply-for-api-calculator',
    },
  },
  {
    path: 'chhindwada_Conference',
    defaultTo: '/ConferenceApplyNow',
    hashMap: {
      '#about': '/ConferenceApplyNow',
      '#academicpartner': '/academic-institutional-partners',
      '#themes': '/ConferenceApplyNow',
    },
  },
  {
    path: 'conference-management-board',
    defaultTo: '/university-college',
    hashMap: { '#cmb': '/university-college' },
  },
  {
    path: 'doi',
    defaultTo: '/doi-portal',
    hashMap: { '#apply': '/doi-portal' },
  },
  {
    path: 'edwin-book-distributors',
    defaultTo: '/books-publication-services',
    hashMap: {
      '#article': '/online-membership-articles-accessing',
      '#book': '/books-publication-services',
      '#service': '/books-publication-services',
    },
  },
  {
    path: 'edwin-group-of-journal',
    defaultTo: '/edwin-journal',
    hashMap: { '#paper': '/Researchpaper' },
  },
  {
    path: 'edwin-group-of-publications',
    defaultTo: '/books-publication-services',
    hashMap: {
      '#become_editor': '/books-publication-services',
      '#book': '/books-publication-services',
    },
  },
  {
    path: 'edwin-incorporation-corporate-training-0594pri',
    defaultTo: '/ngo-support',
    hashMap: { '#ngo': '/ngo-support' },
  },
  {
    path: 'edwin-legal-services-for-education',
    defaultTo: '/services-to-members',
    hashMap: {
      '#hr': '/apply-for-hr-support',
      '#legal_app': '/services-to-members',
      '#naac': '/naac-assistance',
    },
  },
  {
    path: 'hr',
    defaultTo: '/jobs',
    hashMap: { '#Apply_Now': '/jobs' },
  },
  {
    path: 'jhb',
    defaultTo: '/journal-help-board',
    hashMap: { '#Help': '/journal-help-board' },
  },
  {
    path: 'moo-c',
    defaultTo: '/mooc-supports',
    hashMap: { '#mooc': '/online-learning-mooc' },
  },
  {
    path: 'plagiarism-detector',
    defaultTo: '/apply-for-plagiarism-detector',
    hashMap: {
      '#apply-now': '/apply-for-plagiarism-detector',
      '#plagiarism': '/apply-for-plagiarism-detector',
    },
  },
  {
    path: 'PM',
    caseSensitive: true,
    defaultTo: '/professional-member',
    hashMap: { '#member': '/professional-member' },
  },
  {
    path: 'PR',
    caseSensitive: true,
    defaultTo: '/apply-for-patent-registration',
    hashMap: {
      '#legal': '/services-to-members',
      '#patent': '/apply-for-patent-registration',
    },
  },
].map(({ path, hashMap, defaultTo, caseSensitive }) => ({
  path,
  ...(caseSensitive ? { caseSensitive: true } : {}),
  element: <HashRedirect hashMap={hashMap} defaultTo={defaultTo} />,
}));

const redirectRoutes = [...hashRedirects, ...simpleRedirects];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      ...redirectRoutes,
      { path: 'about-us', element: <AboutUs /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'apply-schedule-meeting', element: <ApplyForScheduleMeeting /> },
      { path: 'partnership-programme', element: <PartnershipProgramme /> },
      { path: 'awards', element: <Awards /> },
      { path: 'deo', element: <DEO /> },

      
      { path: 'Researchpaper', element: <ResearchPaper /> },
      { path: 'researchpaper', element: <ResearchPaper /> },
      { path: 'Onemember', element: <Onemember /> },
      { path: 'one-member', element: <Onemember /> },
      { path: 'Doimember', element: <Doimember /> },
      { path: 'doi-member', element: <Doimember /> },
      { path: 'Professionalmember', element: <Professionalmember /> },
      { path: 'professional-member', element: <Professionalmember /> },
      { path: 'editorial-board-membership', element: <EditorialBoardMembership /> },
      { path: 'membership-others', element: <MembershipOthers /> },
      { path: 'services-to-members', element: <ServicesToMembers /> },
      { path: 'books-publication-services', element: <BooksPublicationServices /> },
      { path: 'apply-for-fellowship', element: <ApplyForFellowship /> },
      { path: 'apply-for-patent-registration', element: <ApplyForPatentRegistration /> },
      { path: 'mooc-supports', element: <MOOCSupports /> },
      { path: 'ConferenceApplyNow', element: <ConferenceApplyNow /> },
      { path: 'academic-institutional-partners', element: <AcademicInstitutionalPartners /> },

      { path: 'rnd-ebi', element: <RnD_EBI /> },
      { path: 'edwin-academic-immigration-solutions', element: <EdwinAcademicImmigrationSolutions /> },
      { path: 'online-membership-articles-accessing', element: <OnlineMembershipArticlesAccessing /> },
      { path: 'apply-now-writing-assistance', element: <ApplyNowWritingAssistance /> },
      { path: 'faculty-co-guide-registration', element: <FacultyCoGuideRegistration /> },
      { path: 'ApplyForMajorMinorproject', element: <ApplyForMajorMinorproject /> },
      { path: 'increase-citation-doi', element: <IncreaseCitationDOI /> },
      { path: 'apply-for-patent-support', element: <ApplyForPatentSupport /> },
      { path: 'apply-for-grants', element: <ApplyForGrants /> },
      { path: 'apply-for-plagiarism-detector', element: <ApplyForPlagiarismDetector /> },
      { path: 'apply-for-turnitin-support', element: <ApplyForTurnitinSupport /> },
      { path: 'apply-for-api-calculator', element: <ApplyForAPICalculator /> },

      { path: 'educational', element: <Educational /> },
      { path: 'academic-news-channel', element: <AcademicNewsChannel /> },
      { path: 'apply-for-news', element: <ApplyForNews /> },
      { path: 'ngo-support', element: <NGOSupport /> },
      { path: 'international-educational-tours', element: <InternationalEducationalTours /> },
      { path: 'phd-programmes', element: <PhDProgrammes /> },
      { path: 'pg-programmes', element: <PGProgrammes /> },
      { path: 'ug-programmes', element: <UGProgrammes /> },
      { path: 'online-learning-mooc', element: <OnlineLearningMooc /> },
      { path: 'help-for-education', element: <HelpForEducation /> },

      { path: 'university-college', element: <University_College /> },
      { path: 'institutionalMembership', element: <InstitutionalMembership /> },
      { path: 'apply-for-naac-support', element: <ApplyForNAACSupport /> },
      { path: 'apply-for-hr-support', element: <ApplyForHRSupport /> },
      { path: 'apply-for-nba-training-support', element: <ApplyForNBATrainingSupport /> },
      { path: 'support-for-proceeding-printing', element: <SupportForProceedingPrinting /> },
      { path: 'paper-publication-support', element: <PaperPublicationSupport /> },
      { path: 'sponsorship-for-organizing-conference', element: <SponsorshipForOrganizingConference /> },
      { path: 'need-resource-person', element: <NeedResourcePerson /> },
      { path: 'advertisement-support', element: <AdvertisementSupport /> },
      { path: 'membership-dellnett', element: <MembershipDELLNETT /> },
      { path: 'naac-assistance', element: <NAACAssistance /> },

      { path: 'editors-ngo-business', element: <Editors_NGO_Business /> },
      { path: 'journal-help-board', element: <JournalHelpBoard /> },
      { path: 'opening-journal-services', element: <OpeningJournalServices /> },
      { path: 'technical-support-for-indexing', element: <TechnicalSupportForIndexing /> },
      { path: 'print-eissn-allotment-support', element: <PrintEISSNAllotmentSupport /> },
      { path: 'free-doi', element: <FreeDOI /> },
      { path: 'paid-doi-crossref', element: <PaidDOICrossref /> },
      { path: 'doi-portal', element: <DOIPortal /> },
      { path: 'membership-portal', element: <MembershipPortal /> },
      { path: 'csr-funding-assistant', element: <CSRFundingAssistant /> },
      { path: 'services-for-business', element: <ServiceForBusiness /> },
      { path: 'business-automation', element: <BusinessAutomation /> },
      { path: 'digital-marketing', element: <DigitalMarketing /> },
      { path: 'apps-for-ios-and-android', element: <AppsForIOSAndAndroid /> },
      { path: 'whatsapp-services', element: <WhatsappServices /> },
      { path: 'hr-support-for-business', element: <HRSupportForBusiness /> },
      { path: 'edwin-journal', element: <EdwinJournal /> },
      { path: 'constructions', element: <Constructions /> },

      { path: 'pay-now', element: <Paynow /> },
      { path: 'paynow', element: <Paynow /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'feedback-complaint-box', element: <FeedbackComplaintBox /> },

      { path: 'gallery', element: <Gallery /> },
      { path: 'conferences', element: <Conferences /> },
      { path: 'birthdays', element: <Birthdays /> },
      { path: 'national-celebrations', element: <NationalCelebrations /> },

      { path: 'press', element: <Press /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
