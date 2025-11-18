import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const features = [
    'Access to exclusive dining experiences',
    'Priority reservations for special events',
    'Monthly chef-curated menu updates',
    'Complimentary wine pairing suggestions',
    'Special member-only tastings',
    '10% discount on private events',
    'Early access to new menu items',
    'Personalized dining recommendations',
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Membership Program
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive community and elevate your dining experience with premium benefits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-12">
              <div className="text-center mb-8">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                  <p className="text-white font-semibold flex items-center gap-2">
                    <Star className="fill-white" size={20} />
                    Premium Membership
                  </p>
                </div>
                <div className="mb-6">
                  <span className="text-7xl font-bold text-white">$29</span>
                  <span className="text-2xl text-white/80">/month</span>
                </div>
                <p className="text-xl text-white/90">
                  Unlock exclusive benefits and elevate every dining experience
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What's Included:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-amber-100 rounded-full p-1 mt-1">
                        <Check className="text-amber-600" size={16} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-amber-600 px-12 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Join Now
                </a>
                <p className="text-white/80 mt-6 text-sm">
                  Cancel anytime • Secure payment via Stripe • No hidden fees
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <p className="text-gray-600">Active Members</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Member Satisfaction</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <p className="text-gray-600">Money-Back Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}