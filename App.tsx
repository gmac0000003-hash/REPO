
import React, { useState, useMemo, useEffect } from 'react';
import { UNITS_DATA } from './constants';
import { Category, CategoryData, Unit } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryData>(UNITS_DATA[0]);
  const [inputValue, setInputValue] = useState<string>('1');
  const [fromUnit, setFromUnit] = useState<Unit>(UNITS_DATA[0].units[0]);
  const [toUnit, setToUnit] = useState<Unit>(UNITS_DATA[0].units[1]);

  // Handle category changes
  const handleCategoryChange = (catData: CategoryData) => {
    setActiveCategory(catData);
    setFromUnit(catData.units[0]);
    setToUnit(catData.units[1] || catData.units[0]);
  };

  // Unit Conversion Logic
  const result = useMemo(() => {
    const val = parseFloat(inputValue);
    if (isNaN(val)) return '0';

    if (activeCategory.category === Category.Temperature) {
      // Temperature uses (val - offset) * factor
      // Convert to Base (Celsius)
      const baseValue = (val - (fromUnit.offset || 0)) * (fromUnit.id === 'f' ? 5/9 : 1);
      
      // Convert from Base to Target
      if (toUnit.id === 'c') return baseValue.toFixed(4);
      if (toUnit.id === 'f') return (baseValue * 9/5 + 32).toFixed(4);
      if (toUnit.id === 'k') return (baseValue + 273.15).toFixed(4);
      return baseValue.toFixed(4);
    } else {
      // Linear conversion: (val * fromFactor) / toFactor
      const baseValue = val * fromUnit.factor;
      const targetValue = baseValue / toUnit.factor;
      
      // Format nicely
      if (targetValue === 0) return '0';
      if (Math.abs(targetValue) < 0.0001) return targetValue.toExponential(4);
      return parseFloat(targetValue.toFixed(6)).toString();
    }
  }, [inputValue, fromUnit, toUnit, activeCategory]);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12 transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-200">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            OmniConvert
          </h1>
        </div>
        <div className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
          v1.0.0 • Offline
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 mt-8">
        {/* Category Scrollable List */}
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 mb-8">
          {UNITS_DATA.map((cat) => (
            <button
              key={cat.category}
              onClick={() => handleCategoryChange(cat)}
              className={`flex-shrink-0 px-5 py-3 rounded-2xl flex items-center gap-2 transition-all duration-200 ${
                activeCategory.category === cat.category
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100 scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
              }`}
            >
              <span className="text-lg">{cat.icon}</span>
              <span className="font-medium whitespace-nowrap">{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Conversion Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/50 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] items-center gap-6">
            
            {/* From Input */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">From</label>
              <div className="relative group">
                <input
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full text-3xl font-bold bg-slate-50 border-2 border-slate-100 rounded-2xl p-4 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-500 outline-none transition-all placeholder-slate-300"
                  placeholder="0.00"
                />
              </div>
              <select
                value={fromUnit.id}
                onChange={(e) => setFromUnit(activeCategory.units.find(u => u.id === e.target.value)!)}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 appearance-none transition-all cursor-pointer"
              >
                {activeCategory.units.map(u => (
                  <option key={u.id} value={u.id}>{u.name} ({u.symbol})</option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="flex justify-center md:pt-10">
              <button 
                onClick={swapUnits}
                className="bg-indigo-50 text-indigo-600 p-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all transform active:scale-90 shadow-sm"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </button>
            </div>

            {/* To Output */}
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">To</label>
              <div className="w-full text-3xl font-bold bg-indigo-50/50 border-2 border-indigo-100/50 text-indigo-700 rounded-2xl p-4 overflow-x-auto whitespace-nowrap min-h-[84px] flex items-center no-scrollbar">
                {result}
              </div>
              <select
                value={toUnit.id}
                onChange={(e) => setToUnit(activeCategory.units.find(u => u.id === e.target.value)!)}
                className="w-full p-4 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-100 appearance-none transition-all cursor-pointer"
              >
                {activeCategory.units.map(u => (
                  <option key={u.id} value={u.id}>{u.name} ({u.symbol})</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
            Common Conversions for {activeCategory.category}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 5, 10, 50, 100].map(base => {
              const baseValue = base * fromUnit.factor;
              const converted = baseValue / toUnit.factor;
              const displayVal = activeCategory.category === Category.Temperature 
                ? result // Temperature logic is non-linear so we skip the simple multiplier here for brevity or handle it
                : parseFloat(converted.toFixed(4));

              return (
                <div key={base} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-slate-400 text-xs font-bold uppercase mb-2">{base} {fromUnit.symbol} equals</div>
                  <div className="text-xl font-bold text-slate-800">
                    {activeCategory.category === Category.Temperature ? '---' : displayVal} <span className="text-indigo-500 text-sm">{toUnit.symbol}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </main>

      {/* Footer / CTA for Install */}
      <footer className="mt-12 text-center px-4">
        <p className="text-slate-400 text-sm mb-4">
          OmniConvert is 100% private. All conversions happen on your device.
        </p>
      </footer>
    </div>
  );
};

export default App;
