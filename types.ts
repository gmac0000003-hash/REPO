
export enum Category {
  Length = 'Length',
  Mass = 'Mass',
  Temperature = 'Temperature',
  Area = 'Area',
  Volume = 'Volume',
  Speed = 'Speed',
  Time = 'Time',
  Digital = 'Digital Storage'
}

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  factor: number; // Factor relative to a base unit (e.g., meter for length)
  offset?: number; // For non-linear conversions like Temperature
}

export interface CategoryData {
  category: Category;
  baseUnit: string;
  units: Unit[];
  icon: string;
}
