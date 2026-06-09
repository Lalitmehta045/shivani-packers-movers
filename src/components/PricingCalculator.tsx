import React, { useState } from 'react';
import { Calculator, Zap, AlertCircle } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [distance, setDistance] = useState<string>('');
  const [size, setSize] = useState<string>('2bhk');
  const [estimate, setEstimate] = useState<{ min: number; max: number } | null>(null);

  const calculate = () => {
    const dist = parseFloat(distance);
    if (isNaN(dist)) return;

    let base = 5000;
    let perKm = 15;
    let multiplier = 1;

    if (size === '1bhk') multiplier = 1;
    if (size === '2bhk') multiplier = 1.5;
    if (size === '3bhk') multiplier = 2.2;
    if (size === 'office') multiplier = 3.5;

    const total = (base + dist * perKm) * multiplier;
    setEstimate({ min: Math.round(total * 0.9), max: Math.round(total * 1.1) });
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-primary rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-12 lg:p-20 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10">
          <Calculator className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 text-white" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 relative z-10 items-center">
          <div className="text-white space-y-6 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold backdrop-blur-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-secondary" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Plan Your Move with Confidence
            </h2>
            <p className="text-blue-100 text-base sm:text-lg opacity-80">
              No hidden costs, no surprises. Use our smart calculator to get an instant estimate for your relocation.
            </p>
            <div className="flex items-start space-x-3 sm:space-x-4 bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-secondary shrink-0" />
              <p className="text-xs sm:text-sm text-blue-50">
                Note: This is an estimated range. Final pricing depends on actual inventory and pre-move survey results.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-xl">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Approx Distance (KM)</label>
                <input 
                  type="number" 
                  value={distance}
                  onChange={(e) => setDistance(e.target.value)}
                  placeholder="e.g. 500" 
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all text-lg sm:text-xl font-bold" 
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Move Size</label>
                <select 
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gray-50 border-transparent focus:bg-white focus:ring-2 focus:ring-primary outline-none transition-all text-base sm:text-lg font-bold"
                >
                  <option value="1bhk">1 BHK / Studio</option>
                  <option value="2bhk">2 BHK Apartment</option>
                  <option value="3bhk">3 BHK / Independent House</option>
                  <option value="office">Office / Commercial</option>
                </select>
              </div>

              <button 
                onClick={calculate}
                className="w-full bg-secondary hover:bg-orange-600 text-white font-black py-3 sm:py-5 rounded-xl sm:rounded-2xl shadow-lg transition-all transform active:scale-95 text-base sm:text-xl uppercase tracking-widest"
              >
                Calculate Now
              </button>

              {estimate && (
                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-100 text-center animate-in fade-in zoom-in duration-300">
                  <p className="text-gray-500 font-bold mb-1 uppercase tracking-widest text-xs">Estimated Price Range</p>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary mb-3 sm:mb-4">
                    ₹{estimate.min.toLocaleString()} - ₹{estimate.max.toLocaleString()}
                  </div>
                  <button className="text-secondary font-bold hover:underline decoration-2 underline-offset-4 text-sm sm:text-base">
                    Get Precise Quote →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;
