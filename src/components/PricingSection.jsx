import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import ButtonTwo from "./ui/ButtonTwo";

const PricingSection = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t("subscriptionPlans.Free Plan.name") || "Free Plan",
      price: t("subscriptionPlans.Free Plan.price"),
      period: t("subscriptionPlans.Free Plan.period"),
      description: t("subscriptionPlans.Free Plan.description"),
      features: t("subscriptionPlans.Free Plan.features", {
        returnObjects: true,
      }),
      connects: null,
      highlighted: false,
    },
    {
      name: t("subscriptionPlans.Annual Plan.name") || "Annual Plan",
      price: t("subscriptionPlans.Annual Plan.price"),
      period: t("subscriptionPlans.Annual Plan.period"),
      originalPrice: t("subscriptionPlans.Annual Plan.originalPrice"),
      description: t("subscriptionPlans.Annual Plan.description"),
      features: t("subscriptionPlans.Annual Plan.features", {
        returnObjects: true,
      }),
      connects: t("subscriptionPlans.Annual Plan.connects"),
      highlighted: true,
    },
    {
      name: t("subscriptionPlans.Lifetime Plan.name") || "Lifetime Plan",
      price: t("subscriptionPlans.Lifetime Plan.price"),
      period: t("subscriptionPlans.Lifetime Plan.period"),
      originalPrice: t("subscriptionPlans.Lifetime Plan.originalPrice"),
      description: t("subscriptionPlans.Lifetime Plan.description"),
      features: t("subscriptionPlans.Lifetime Plan.features", {
        returnObjects: true,
      }),
      connects: t("subscriptionPlans.Lifetime Plan.connects"),
      highlighted: false,
    },
  ];

  return (
    <div
      id="plans"
      className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
    >
      {/* Header */}
      <div className="text-start md:mb-6 mb-4">
        <h1 className="md:text-4xl text-2xl font-bold text-gray-900 mb-1">
          {t("subscriptionPlans.title")}
        </h1>
        <p className="text-gray-600 text-base">
          {t("subscriptionPlans.subTitle")}
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white border rounded-2xl shadow-lg flex flex-col relative overflow-hidden ${
              plan.highlighted ? "border-4 border-blue-400" : "border-gray-200"
            }`}
          >
            <div
              className={`p-8 flex flex-col flex-grow ${
                plan.highlighted ? "pt-16" : ""
              }`}
            >
              {/* Plan Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h2>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 font-medium">
                    {plan.period}
                  </span>
                </div>
                {plan.originalPrice && (
                  <div className="mt-2 inline-block">
                    <p className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      <span className="line-through">{plan.originalPrice}</span>
                      <span className="text-green-600 font-semibold ml-2">
                        Save{" "}
                        {Math.round(
                          (1 -
                            parseInt(plan.price.slice(1)) /
                              parseInt(plan.originalPrice.slice(1))) *
                            100
                        )}
                        %
                      </span>
                    </p>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 min-h-[60px] leading-relaxed">
                {plan.description}
              </p>

              {/* Connects */}
              {plan.connects && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6 border border-blue-100">
                  <p className="text-blue-700 font-bold text-center text-lg">
                    ⚡ {plan.connects}
                  </p>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="">
                <ButtonTwo
                  className={`rounded-lg text-lg !w-full py-4 ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                      : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
                  }`}
                >
                  {plan.price === "$0" ? "Get Started Free" : "Choose Plan"}
                </ButtonTwo>
              </div>
            </div>

            {/* Decorative gradient overlay on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none ${
                plan.highlighted
                  ? "from-blue-400 to-indigo-400"
                  : "from-gray-400 to-gray-600"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
