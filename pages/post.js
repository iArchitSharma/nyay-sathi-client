import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";

const post = () => {
  const legalServices = {
    "Civil Law Services": [
      "Contract Disputes",
      "Property and Real Estate Matters",
      "Tort Claims",
      "Personal Injury Cases",
      "Consumer Disputes",
      "Landlord-Tenant Disputes",
    ],
    "Criminal Law Services": [
      "Criminal Defense",
      "Bail and Bond Matters",
      "Legal Representation in Criminal Cases",
      "Expungement and Pardon Petitions",
      "Criminal Appeals",
    ],
    "Family Law Services": [
      "Divorce and Separation",
      "Child Custody and Visitation",
      "Adoption and Guardianship",
      "Alimony and Spousal Support",
      "Marriage Registration",
      "Domestic Violence Cases",
    ],
    "Corporate and Business Law Services": [
      "Business Formation (LLP, Pvt. Ltd., etc.)",
      "Contract Drafting and Review",
      "Mergers and Acquisitions",
      "Intellectual Property Protection",
      "Corporate Compliance",
      "Shareholder Disputes",
    ],
    "Employment and Labor Law Services": [
      "Employment Contracts",
      "Wrongful Termination Claims",
      "Discrimination and Harassment Cases",
      "Wage and Hour Disputes",
      "Employee Benefits and Compensation",
    ],
    "Taxation and Finance Law Services": [
      "Tax Planning and Compliance",
      "Tax Litigation and Disputes",
      "Investment and Financing Advice",
      "Banking and Finance Transactions",
      "Tax Audits and Appeals",
    ],
    "Intellectual Property (IP) Services": [
      "Trademark Registration",
      "Copyright Protection",
      "Patent Application and Prosecution",
      "IP Licensing and Contracts",
      "IP Enforcement and Litigation",
    ],
    "Environmental and Regulatory Law Services": [
      "Environmental Compliance",
      "Regulatory Compliance",
      "Permitting and Licensing",
      "Environmental Litigation",
      "Health and Safety Compliance",
    ],
    "Immigration Law Services": [
      "Visa Applications and Extensions",
      "Work Permits",
      "Permanent Residency and Citizenship",
      "Deportation Defense",
      "Asylum and Refugee Claims",
    ],
    "Estate Planning and Probate Services": [
      "Will Drafting",
      "Estate Administration",
      "Trusts and Estates",
      "Probate Proceedings",
      "Estate Tax Planning",
    ],
    "Bankruptcy and Insolvency Services": [
      "Chapter 7 Bankruptcy",
      "Chapter 11 Bankruptcy",
      "Debt Restructuring",
      "Creditors' Rights",
      "Bankruptcy Litigation",
    ],
    "ADR (Alternative Dispute Resolution)": [
      "Mediation",
      "Arbitration",
      "Negotiation",
      "Dispute Resolution Services",
    ],
    "Cybersecurity and Data Protection Services": [
      "Data Privacy Compliance",
      "Cybersecurity Risk Assessment",
      "Data Breach Response",
      "Privacy Policies and GDPR Compliance",
    ],
    "Insurance Law Services": [
      "Insurance Claims",
      "Insurance Policy Review",
      "Coverage Disputes",
      "Subrogation Claims",
      "Insurance Litigation",
    ],
    "International and Cross-Border Legal Services": [
      "International Business Transactions",
      "International Arbitration",
      "Cross-Border Dispute Resolution",
      "Foreign Investment and Trade Law",
    ],
    "Other Legal Services": [
      "Immigration and Nationality Law",
      "Entertainment and Media Law",
      "Sports Law",
      "Education Law",
      "Health Law",
      "Public Interest and Civil Rights Law",
    ],
  };

  const { isLoggedIn, setIsLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <p>Error</p>;
  }

  const [step, setStep] = useState(1);
  const [selectedLegalService, setSelectedLegalService] = useState("");
  const [selectedSubService, setSelectedSubService] = useState("");

  const handleNextClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">
        {step === 1 ? "What Legal Service you need" : "Give Description"}
      </h1>

      {step === 1 && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Legal Service
            </label>
            <select
              value={selectedLegalService}
              onChange={(e) => setSelectedLegalService(e.target.value)}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
            >
              <option value="">Select Legal Service</option>
              {Object.keys(legalServices).map((serviceCategory) => (
                <option key={serviceCategory} value={serviceCategory}>
                  {serviceCategory}
                </option>
              ))}
            </select>
          </div>

          {selectedLegalService && (
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">
                Select Sub-Service
              </label>
              <select
                value={selectedSubService}
                onChange={(e) => setSelectedSubService(e.target.value)}
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              >
                <option value="">Select Sub-Service</option>
                {legalServices[selectedLegalService].map((subService) => (
                  <option key={subService} value={subService}>
                    {subService}
                  </option>
                ))}
              </select>
            </div>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              placeholder="Enter title"
            />
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none h-32 resize-none"
              placeholder="Describe your legal needs..."
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700">
              Attach a file
            </label>
            <div className="mt-1 flex items-center">
              <input
                type="file"
                className="hidden"
                // Handle file attachment logic here
              />
              <label
                className="flex items-center px-4 py-2 border border-gray-300 bg-white rounded-md cursor-pointer hover:bg-indigo-500 hover:text-white hover:border-indigo-500"
                htmlFor="file-upload"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 6.293a1 1 0 011.414 0L10 10.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Upload File
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Drag & drop any images or documents that might be helpful in
              explaining your brief here (Max file size: 25 MB).
            </p>
          </div>
        </>
      )}

      {step === 3 && (
        <div className="mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Post
          </button>
        </div>
      )}

      <button
        onClick={handleNextClick}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {step === 1 ? "Next" : "Post"}
      </button>
    </div>
  );
};

export default post;
