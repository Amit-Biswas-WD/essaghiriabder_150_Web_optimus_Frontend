import { Check, Sparkles } from "lucide-react";

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
    <div
      id="plans"
      className="container mx-auto lg:my-20 md:my-14 my-12 scroll-mt-28 px-3 md:px-4"
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="md:text-5xl text-3xl font-bold text-gray-900 md:mb-4 mb-2 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
          Subscription Plans
        </h1>
        <p className="text-gray-600 text-lg">
          Choose the perfect plan for your needs
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group bg-white border rounded-2xl shadow-lg flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
              plan.highlighted
                ? "border-blue-400 ring-2 ring-blue-400 ring-offset-2"
                : "border-gray-200 hover:border-blue-300"
            }`}
          >
            {/* Most Popular Badge */}
            {plan.highlighted && (
              <div className="absolute top-0 left-0 right-0">
                <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white text-center py-2.5 text-sm font-bold tracking-wide flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  MOST POPULAR
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>
            )}

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
              <button
                className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 mt-auto shadow-md hover:shadow-xl transform hover:scale-105 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                    : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
                }`}
              >
                {plan.price === "$0" ? "Get Started Free" : "Choose Plan →"}
              </button>
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
