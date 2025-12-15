const FreelancersCompanies = () => {
  return (
    <div
      id="freelancers"
      className="container mx-auto scroll-mt-28 px-3 md:px-4"
    >
      <div className="flex items-center justify-start">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-4 mb-2">
          Freelancers &amp; Companies
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* For Freelancers Column */}
        <div>
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2">
            For Freelancers
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Access long-term projects that offer stability and serious
                collaboration
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Work with companies, influencers, and entrepreneurs who value
                commitment
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>Zero commission: keep 100% of your income</span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Build your professional brand and land multi-month remote
                contracts
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Ideal for experts seeking consistent work, not gig-based tasks
              </span>
            </li>
          </ul>
        </div>

        {/* For Companies & Employers Column */}
        <div>
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2">
            For Companies & Employers
          </h2>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Find verified, reliable freelancers for ongoing or long-duration
                missions
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Scale your workforce for weeks or months without traditional
                hiring costs
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Work directly, off-platform, with full freedom and flexibility
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Secure a long-term talent partnership with no middleman fees
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-xl leading-none">•</span>
              <span>
                Perfect for businesses needing continuity, quality, and
                responsibility
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreelancersCompanies;
