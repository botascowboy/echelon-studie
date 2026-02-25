/**
 * Platform Configuration
 * Limited to 5 target cities for MVP
 */

export const TARGET_CITIES = [
  {
    id: 'nyc',
    name: 'New York City',
    state: 'NY',
    stateName: 'New York',
    displayName: 'NYC',
    lat: 40.7128,
    lng: -74.0060,
    timezone: 'America/New_York'
  },
  {
    id: 'miami',
    name: 'Miami',
    state: 'FL',
    stateName: 'Florida',
    displayName: 'Miami',
    lat: 25.7617,
    lng: -80.1918,
    timezone: 'America/New_York'
  },
  {
    id: 'houston',
    name: 'Houston',
    state: 'TX',
    stateName: 'Texas',
    displayName: 'Houston',
    lat: 29.7604,
    lng: -95.3698,
    timezone: 'America/Chicago'
  },
  {
    id: 'losangeles',
    name: 'Los Angeles',
    state: 'CA',
    stateName: 'California',
    displayName: 'Los Angeles',
    lat: 34.0522,
    lng: -118.2437,
    timezone: 'America/Los_Angeles'
  },
  {
    id: 'sanfrancisco',
    name: 'San Francisco',
    state: 'CA',
    stateName: 'California',
    displayName: 'San Francisco',
    lat: 37.7749,
    lng: -122.4194,
    timezone: 'America/Los_Angeles'
  }
] as const;

export type TargetCity = typeof TARGET_CITIES[number]['id'];

// Map city names to API search terms
export const CITY_SEARCH_TERMS: Record<string, string> = {
  'nyc': 'New York',
  'miami': 'Miami',
  'houston': 'Houston',
  'losangeles': 'Los Angeles',
  'sanfrancisco': 'San Francisco'
};

// Check if a location matches one of our target cities
export function isTargetCity(location: string): boolean {
  const normalized = location.toLowerCase().replace(/[^a-z]/g, '');
  return TARGET_CITIES.some(city =>
    normalized.includes(city.id) ||
    normalized.includes(city.name.toLowerCase().replace(/[^a-z]/g, '')) ||
    normalized.includes(city.state.toLowerCase())
  );
}

// Get city config by ID or name
export function getCityConfig(identifier: string) {
  const normalized = identifier.toLowerCase().replace(/[^a-z]/g, '');
  return TARGET_CITIES.find(city =>
    city.id === normalized ||
    city.name.toLowerCase().replace(/[^a-z]/g, '') === normalized ||
    city.state.toLowerCase() === normalized
  );
}

// Platform settings
export const PLATFORM_CONFIG = {
  name: 'Echelon Clinical Studies',
  tagline: 'Elite Clinical Trial Recruitment',
  defaultCity: 'nyc',
  maxTrialsPerPage: 9,
  enableRealApi: true, // Always use real API
  fallbackToMock: false, // Disable mock data fallbacks
  cities: TARGET_CITIES
} as const;
