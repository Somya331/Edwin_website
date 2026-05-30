import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';

// Home
import Home from './pages/Home/Home';
import AboutUs from './pages/Home/AboutUs';
import Jobs from './pages/Home/Jobs';
import ApplyForScheduleMeeting from './pages/Home/ApplyForScheduleMeeting';
import PartnershipProgramme from './pages/Home/PartnershipProgramme';
import Awards from './pages/Home/Awards';

// Academicians
import Academicians from './pages/Academicians/Academicians';
import ResearchPaper from './pages/Academicians/Researchpaper';
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'jobs', element: <Jobs /> },
      { path: 'apply-schedule-meeting', element: <ApplyForScheduleMeeting /> },
      { path: 'partnership-programme', element: <PartnershipProgramme /> },
      { path: 'awards', element: <Awards /> },

      { path: 'academicians', element: <Academicians /> },
      { path: 'Researchpaper', element: <ResearchPaper /> },
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
