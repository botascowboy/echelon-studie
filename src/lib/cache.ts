/**
 * In-memory server-side cache
 * Stores trial data so the ClinicalTrials.gov API is only called once
 * per TTL window instead of on every page load.
 */

const TTL_MS = 10 * 60 * 1000; // 10 minutes

interface CacheEntry {
  data: any[];
  fetchedAt: number;
}

// Module-level map — survives across requests in the same worker instance
const store = new Map<string, CacheEntry>();

export function cacheGet(key: string): any[] | null {
  const entry = store.get(key);
  if (!entry) return null;
  if (Date.now() - entry.fetchedAt > TTL_MS) {
    store.delete(key);
    return null;
  }
  return entry.data;
}

export function cacheSet(key: string, data: any[]): void {
  store.set(key, { data, fetchedAt: Date.now() });
}

export function cacheAge(key: string): number | null {
  const entry = store.get(key);
  if (!entry) return null;
  return Math.floor((Date.now() - entry.fetchedAt) / 1000); // seconds
}

export function cacheClear(key?: string): void {
  if (key) {
    store.delete(key);
  } else {
    store.clear();
  }
}
