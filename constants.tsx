
import { Category, CategoryData } from './types';

export const UNITS_DATA: CategoryData[] = [
  {
    category: Category.Length,
    baseUnit: 'meter',
    icon: '📏',
    units: [
      { id: 'm', name: 'Meter', symbol: 'm', factor: 1 },
      { id: 'km', name: 'Kilometer', symbol: 'km', factor: 1000 },
      { id: 'cm', name: 'Centimeter', symbol: 'cm', factor: 0.01 },
      { id: 'mm', name: 'Millimeter', symbol: 'mm', factor: 0.001 },
      { id: 'mi', name: 'Mile', symbol: 'mi', factor: 1609.34 },
      { id: 'yd', name: 'Yard', symbol: 'yd', factor: 0.9144 },
      { id: 'ft', name: 'Foot', symbol: 'ft', factor: 0.3048 },
      { id: 'in', name: 'Inch', symbol: 'in', factor: 0.0254 },
      { id: 'nm', name: 'Nautical Mile', symbol: 'nmi', factor: 1852 }
    ]
  },
  {
    category: Category.Mass,
    baseUnit: 'kilogram',
    icon: '⚖️',
    units: [
      { id: 'kg', name: 'Kilogram', symbol: 'kg', factor: 1 },
      { id: 'g', name: 'Gram', symbol: 'g', factor: 0.001 },
      { id: 'mg', name: 'Milligram', symbol: 'mg', factor: 0.000001 },
      { id: 'lb', name: 'Pound', symbol: 'lb', factor: 0.453592 },
      { id: 'oz', name: 'Ounce', symbol: 'oz', factor: 0.0283495 },
      { id: 'st', name: 'Stone', symbol: 'st', factor: 6.35029 },
      { id: 't', name: 'Metric Ton', symbol: 't', factor: 1000 }
    ]
  },
  {
    category: Category.Temperature,
    baseUnit: 'celsius',
    icon: '🌡️',
    units: [
      { id: 'c', name: 'Celsius', symbol: '°C', factor: 1, offset: 0 },
      { id: 'f', name: 'Fahrenheit', symbol: '°F', factor: 5 / 9, offset: 32 },
      { id: 'k', name: 'Kelvin', symbol: 'K', factor: 1, offset: 273.15 }
    ]
  },
  {
    category: Category.Area,
    baseUnit: 'square meter',
    icon: '🗺️',
    units: [
      { id: 'sqm', name: 'Square Meter', symbol: 'm²', factor: 1 },
      { id: 'sqkm', name: 'Square Kilometer', symbol: 'km²', factor: 1000000 },
      { id: 'sqmi', name: 'Square Mile', symbol: 'mi²', factor: 2589988.11 },
      { id: 'sqyd', name: 'Square Yard', symbol: 'yd²', factor: 0.836127 },
      { id: 'sqft', name: 'Square Foot', symbol: 'ft²', factor: 0.092903 },
      { id: 'ac', name: 'Acre', symbol: 'ac', factor: 4046.86 },
      { id: 'ha', name: 'Hectare', symbol: 'ha', factor: 10000 }
    ]
  },
  {
    category: Category.Volume,
    baseUnit: 'liter',
    icon: '🧪',
    units: [
      { id: 'l', name: 'Liter', symbol: 'L', factor: 1 },
      { id: 'ml', name: 'Milliliter', symbol: 'ml', factor: 0.001 },
      { id: 'm3', name: 'Cubic Meter', symbol: 'm³', factor: 1000 },
      { id: 'gal', name: 'US Gallon', symbol: 'gal', factor: 3.78541 },
      { id: 'qt', name: 'US Quart', symbol: 'qt', factor: 0.946353 },
      { id: 'pt', name: 'US Pint', symbol: 'pt', factor: 0.473176 },
      { id: 'cup', name: 'US Cup', symbol: 'cup', factor: 0.236588 },
      { id: 'floz', name: 'US Fluid Ounce', symbol: 'fl oz', factor: 0.0295735 }
    ]
  },
  {
    category: Category.Speed,
    baseUnit: 'meters per second',
    icon: '🏎️',
    units: [
      { id: 'mps', name: 'Meters/Sec', symbol: 'm/s', factor: 1 },
      { id: 'kph', name: 'Kilometers/Hour', symbol: 'km/h', factor: 1 / 3.6 },
      { id: 'mph', name: 'Miles/Hour', symbol: 'mph', factor: 0.44704 },
      { id: 'kn', name: 'Knot', symbol: 'kn', factor: 0.514444 }
    ]
  },
  {
    category: Category.Time,
    baseUnit: 'second',
    icon: '⏱️',
    units: [
      { id: 's', name: 'Second', symbol: 's', factor: 1 },
      { id: 'ms', name: 'Millisecond', symbol: 'ms', factor: 0.001 },
      { id: 'm', name: 'Minute', symbol: 'min', factor: 60 },
      { id: 'h', name: 'Hour', symbol: 'h', factor: 3600 },
      { id: 'd', name: 'Day', symbol: 'd', factor: 86400 },
      { id: 'w', name: 'Week', symbol: 'w', factor: 604800 },
      { id: 'mo', name: 'Month (Avg)', symbol: 'mo', factor: 2629746 },
      { id: 'y', name: 'Year (Avg)', symbol: 'y', factor: 31556952 }
    ]
  },
  {
    category: Category.Digital,
    baseUnit: 'byte',
    icon: '💾',
    units: [
      { id: 'b', name: 'Byte', symbol: 'B', factor: 1 },
      { id: 'bit', name: 'Bit', symbol: 'bit', factor: 0.125 },
      { id: 'kb', name: 'Kilobyte', symbol: 'KB', factor: 1024 },
      { id: 'mb', name: 'Megabyte', symbol: 'MB', factor: 1024 * 1024 },
      { id: 'gb', name: 'Gigabyte', symbol: 'GB', factor: 1024 * 1024 * 1024 },
      { id: 'tb', name: 'Terabyte', symbol: 'TB', factor: 1024 * 1024 * 1024 * 1024 }
    ]
  }
];
