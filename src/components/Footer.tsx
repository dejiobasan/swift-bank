export default function Footer() {
  return (
    <div className="flex flex-col bg-custombg">
      <div className="flex flex-col items-center justify-center bg-custombg mb-12">
        <div className="grid grid-cols-4 gap-12 mx-auto max-w-6xl">
            <div className="flex flex-col items-start justify-items-start space-y-2">
                <h2 className="text-xl font-bold mb-2 text-custom">Personal</h2>
                <p className="text-custom font-light text-sm">Savings Accounts</p>
                <p className="text-custom font-light text-sm">Current Accounts</p>
                <p className="text-custom font-light text-sm">Compare Accounts</p>
                <p className="text-custom font-light text-sm">Cards</p>
                <p className="text-custom font-light text-sm">Non Resident Nigeria (NRN) Service</p>
                <p className="text-custom font-light text-sm">Loans</p>
                <p className="text-custom font-light text-sm">Ways to Bank</p>
                <p className="text-custom font-light text-sm">Private Banking</p>
            </div>
            <div className="flex flex-col items-start justify-items-start space-y-2">
                <h2 className="text-xl font-bold mb-2 text-custom">Business</h2>
                <p className="text-custom font-light text-sm">Business Banking</p>
                <p className="text-custom font-light text-sm">Commercial Banking</p>
                <p className="text-custom font-light text-sm">Corporate Banking</p>
                <p className="text-custom font-light text-sm">Loans & Advances</p>
                <p className="text-custom font-light text-sm">SME Banking</p>
                <p className="text-custom font-light text-sm">Cards</p>
            </div>
            <div className="flex flex-col items-start justify-items-start space-y-2">
                <h2 className="text-xl font-bold mb-2 text-custom">About Us</h2>
                <p className="text-custom font-light text-sm">Our Company</p>
                <p className="text-custom font-light text-sm">Careers</p>
                <p className="text-custom font-light text-sm">Investor Relations</p>
                <p className="text-custom font-light text-sm">Contact Us</p>
                <p className="text-custom font-light text-sm">Swift Trust Fund Managers</p>
            </div>
            <div className="flex flex-col items-start justify-items-start space-y-2">
                <h2 className="text-xl font-bold mb-2 text-custom">Help and Security</h2>
                <p className="text-custom font-light text-sm">Account Reactivation</p>
                <p className="text-custom font-light text-sm">Complaints & Enquiries</p>
                <p className="text-custom font-light text-sm">Customer Feedback & Survey</p>
                <p className="text-custom font-light text-sm">Dsipense Error</p>
                <p className="text-custom font-light text-sm">Help Videos</p>
                <p className="text-custom font-light text-sm">Security Centre</p>
                <p className="text-custom font-light text-sm">Whistle Blower</p>
                <p className="text-custom font-light text-sm">Self Service</p>
            </div>
        </div>
      </div>
      <div className="flex flex-col items-start bg-custom p-6">
        <p className="text-white ml-10 mt-4 mb-4 text-sm font-light">
          © 2025 Swift Bank. BC 617815 (Licensed by Central Bank of Nigeria). All rights reserved. 
        </p>
      </div>
    </div>
  );
}
