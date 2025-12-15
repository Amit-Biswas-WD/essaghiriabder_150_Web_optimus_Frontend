import { Check } from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "forever",
      description:
        "Explore the platform, browse freelancers, and test all essential features.",
      features: [
        "Browse freelancers",
        "Test essential features",
        "Platform exploration",
        "Basic access",
      ],
      connects: null,
      highlighted: false,
    },
    {
      name: "Annual Plan",
      price: "$119",
      period: "per year",
      originalPrice: "$250",
      description:
        "Best for professionals and businesses seeking continuous access to long-term opportunities.",
      features: [
        "All Free Plan features",
        "Long-term opportunities",
        "Professional access",
        "Priority support",
      ],
      connects: "500 connects",
      highlighted: true,
    },
    {
      name: "Lifetime Plan",
      price: "$299",
      period: "one-time",
      originalPrice: "$500",
      description:
        "Unlimited, permanent access—ideal for agencies, teams, and serious freelancers.",
      features: [
        "Unlimited access",
        "Permanent membership",
        "Perfect for agencies",
        "Team collaboration",
      ],
      connects: "1000 connects",
      highlighted: false,
    },
  ];

  return (
    <div id="plans" className="max-w-7xl mx-auto my-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Subscription Plans
        </h1>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105 flex flex-col ${
              plan.highlighted ? "ring-4 ring-blue-500 relative" : ""
            }`}
          >
            {plan.highlighted && (
              <div className="bg-blue-500 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
            )}

            <div className="p-8 flex flex-col flex-grow">
              {/* Plan Name */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {plan.name}
              </h2>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-gray-500 mt-1">
                    <span className="italic">
                      Instead of {plan.originalPrice}
                    </span>
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 min-h-[60px]">
                {plan.description}
              </p>

              {/* Connects */}
              {plan.connects && (
                <div className="bg-blue-50 rounded-lg p-3 mb-6">
                  <p className="text-blue-700 font-semibold text-center">
                    {plan.connects}
                  </p>
                </div>
              )}

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors mt-auto ${
                  plan.highlighted
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.price === "$0" ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
