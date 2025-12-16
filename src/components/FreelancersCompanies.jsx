import { useTranslation } from "react-i18next";

const FreelancersCompanies = () => {
  const { t } = useTranslation();

  return (
    <div
      id="freelancers"
      className="container mx-auto scroll-mt-28 px-3 md:px-4"
    >
      <div className="flex items-center justify-start">
        <h2 className="md:text-4xl text-2xl font-bold text-gray-900 md:mb-4 mb-2">
          {t("freelancersAndCompanies.title")}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* For Freelancers Column */}
        <div>
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2">
            {t("freelancersAndCompanies.titleOne")}
          </h2>
          <ul className="space-y-3">
            {t("freelancersAndCompanies.descriptionOne", {
              returnObjects: true,
            }).map((des, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-xl leading-none">•</span>
                <span>{des}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* For Companies & Employers Column */}
        <div>
          <h2 className="md:text-2xl text-xl font-bold md:mb-4 mb-2">
            {t("freelancersAndCompanies.titleTwo")}
          </h2>
          <ul className="space-y-3">
            {t("freelancersAndCompanies.descriptionOne", {
              returnObjects: true,
            }).map((des, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-xl leading-none">•</span>
                <span>{des}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FreelancersCompanies;
