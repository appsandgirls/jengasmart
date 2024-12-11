import ProjectManagement from "../ProjectManagement/ProjectManagement"
import ChatBox from "../ChatBox/ChatBox"
import DocumentUploader from "../DocumentUploader/DocumentUploader"
import ContractorRating from "../ContractorRating/ContractorRating"
import ProgressDashboard from "../ProgressDashboard/ProgressDashboard"
import "./MainDashboard.css" // Importing the CSS file
import Navbar from "../Navbar/Navbar"

const MainDashboard = () => {
  return (
    <div className="dashboard-container">
     {/*  <h1 className="dashboard-title">Smart Jenga Project Dashboard</h1> */}
      <Navbar />
      {/* Project Management */}
      <div className="card project-management">
        <ProjectManagement />
      </div>
      <div className="grid-container">
        {/* Chat Box */}
        <div className="card chat-box">
          <ChatBox />
        </div>

        {/* Document Upload */}
        <div className="card document-uploader">
          <DocumentUploader />
        </div>

        {/* Contractor Rating */}
        <div className="card contractor-rating">
          <ContractorRating />
        </div>

        {/* Progress Dashboard */}
        <div className="card progress-dashboard">
          <ProgressDashboard />
        </div>
      </div>
    </div>
  )
}

export default MainDashboard
