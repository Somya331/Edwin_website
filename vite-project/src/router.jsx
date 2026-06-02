import React from 'react';
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';

// Home
import Home from './pages/Home/Home';
import AboutUs from './pages/Home/AboutUs';
import Jobs from './pages/Home/Jobs';
import ApplyForScheduleMeeting from './pages/Home/ApplyForScheduleMeeting';
import PartnershipProgramme from './pages/Home/PartnershipProgramme';


// Academicians

import Awards from './pages/Academicians/Awards';
import ResearchPaper from './pages/Academicians/ResearchPaperPublicationServices';

import EditorialBoardMembership from './pages/Academicians/EditorialBoardMembership';
import MembershipOthers from './pages/Academicians/MembershipOthers';
import ServicesToMembers from './pages/Academicians/ServicesToMembers';
import BooksPublicationServices from './pages/Academicians/BooksPublicationServices';
import ApplyForFellowship from './pages/Academicians/ApplyForFellowship';
import ApplyForPatentRegistration from './pages/Academicians/ApplyForPatentRegistration';
import MOOCSupports from './pages/Academicians/MOOCSupports';
import ConferenceApplyNow from './pages/Academicians/ConferenceApplyNow';
import Doimember from './pages/Academicians/Doimember';
import Professionalmember from './pages/Academicians/Professionalmember';
import Onemember from './pages/Academicians/Onemember';
import AcademicInstitutionalPartners from './pages/Academicians/AcademicInstitutionalPartners';

// RnD_EBI
import RnD_EBI from './pages/RnD_EBI/RnD_EBI';
import EdwinAcademicImmigrationSolutions from './pages/RnD_EBI/EdwinAcademicImmigrationSolutions';
import OnlineMembershipArticlesAccessing from './pages/RnD_EBI/OnlineMembershipArticlesAccessing';
import ApplyNowWritingAssistance from './pages/RnD_EBI/ApplyNowWritingAssistance';
import FacultyCoGuideRegistration from './pages/RnD_EBI/FacultyCoGuideRegistration';
import ApplyForMajorMinorproject from './pages/RnD_EBI/ApplyForMajorMinorproject';
import IncreaseCitationDOI from './pages/RnD_EBI/IncreaseCitationDOI';
import ApplyForPatentSupport from './pages/RnD_EBI/ApplyForPatentSupport';
import ApplyForGrants from './pages/RnD_EBI/ApplyForGrants';
import ApplyForPlagiarismDetector from './pages/RnD_EBI/ApplyForPlagiarismDetector';
import ApplyForTurnitinSupport from './pages/RnD_EBI/ApplyForTurnitinSupport';
import ApplyForAPICalculator from './pages/RnD_EBI/ApplyForAPICalculator';

// Educational
import Educational from './pages/Educational/Educational';
import AcademicNewsChannel from './pages/Educational/AcademicNewsChannel';
import ApplyForNews from './pages/Educational/ApplyForNews';
import NGOSupport from './pages/Educational/NGOSupport';
import InternationalEducationalTours from './pages/Educational/InternationalEducationalTours';
import PhDProgrammes from './pages/Educational/PhDProgrammes';
import PGProgrammes from './pages/Educational/PGProgrammes';
import UGProgrammes from './pages/Educational/UGProgrammes';
import OnlineLearningMooc from './pages/Educational/OnlineLearningMooc';
import HelpForEducation from './pages/Educational/HelpForEducation';

// University_College
import University_College from './pages/University_College/University_College';
import InstitutionalMembership from './pages/University_College/institutionalMembership';
import ApplyForNAACSupport from './pages/University_College/ApplyForNAACSupport';
import ApplyForHRSupport from './pages/University_College/ApplyForHRSupport';
import ApplyForNBATrainingSupport from './pages/University_College/ApplyForNBATrainingSupport';
import SupportForProceedingPrinting from './pages/University_College/SupportForProceedingPrinting';
import PaperPublicationSupport from './pages/University_College/PaperPublicationSupport';
import SponsorshipForOrganizingConference from './pages/University_College/SponsorshipForOrganizingConference';
import NeedResourcePerson from './pages/University_College/NeedResourcePerson';
import AdvertisementSupport from './pages/University_College/AdvertisementSupport';
import MembershipDELLNETT from './pages/University_College/MembershipDELLNETT';
import NAACAssistance from './pages/University_College/NAACAssistance';

// Editors_NGO_Business
import Editors_NGO_Business from './pages/Editors_NGO_Business/Editors_NGO_Business';
import JournalHelpBoard from './pages/Editors_NGO_Business/JournalHelpBoard';
import OpeningJournalServices from './pages/Editors_NGO_Business/OpeningJournalServices';
import TechnicalSupportForIndexing from './pages/Editors_NGO_Business/TechnicalSupportForIndexing';
import PrintEISSNAllotmentSupport from './pages/Editors_NGO_Business/PrintEISSNAllotmentSupport';
import FreeDOI from './pages/Editors_NGO_Business/FreeDOI';
import PaidDOICrossref from './pages/Editors_NGO_Business/PaidDOICrossref';
import DOIPortal from './pages/Editors_NGO_Business/DOIPortal';
import MembershipPortal from './pages/Editors_NGO_Business/MembershipPortal';
import CSRFundingAssistant from './pages/Editors_NGO_Business/CSRFundingAssistant';
import ServiceForBusiness from './pages/Editors_NGO_Business/ServiceForBusiness';
import BusinessAutomation from './pages/Editors_NGO_Business/BusinessAutomation';
import DigitalMarketing from './pages/Editors_NGO_Business/DigitalMarketing';
import AppsForIOSAndAndroid from './pages/Editors_NGO_Business/AppsForIOSAndAndroid';
import WhatsappServices from './pages/Editors_NGO_Business/WhatsappServices';
import HRSupportForBusiness from './pages/Editors_NGO_Business/HRSupportForBusiness';
import EdwinJournal from './pages/Editors_NGO_Business/EdwinJournal';
import Constructions from './pages/Editors_NGO_Business/Constructions';

// Pay_Now
import Paynow from './pages/Pay_Now/Paynow';
import FAQ from './pages/Pay_Now/FAQ';
import FeedbackComplaintBox from './pages/Pay_Now/FeedbackComplaintBox';

// Gallery
import Gallery from './pages/Gallery/Gallery';
import Conferences from './pages/Gallery/Conferences';
import Birthdays from './pages/Gallery/Birthdays';
import NationalCelebrations from './pages/Gallery/NationalCelebrations';

// Press
import Press from './pages/Press/Press';

// Contact
import Contact from './pages/Contact/Contact';

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
  ['DEO', '/jobs', true],
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
