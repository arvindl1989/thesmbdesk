/**
 * Analytics and search-verification configuration.
 *
 * Each value can be supplied two ways:
 *   1. Paste it into the fallback constant below, commit, push.
 *   2. Set the matching repository variable (Settings -> Secrets and
 *      variables -> Actions -> Variables); the workflow passes it in.
 *
 * An empty value disables that feature entirely, so the site stays
 * zero-JavaScript until a real GA4 ID is supplied.
 *
 * Neither value is a secret. Both are publicly visible in the served
 * HTML by design, so committing them is fine.
 */

/** GA4 measurement ID, e.g. 'G-ABC1234XYZ'. */
const GA_FALLBACK = '';

/** Search Console meta-tag token: the content="..." value only. */
const GSC_FALLBACK = '';

export const GA_MEASUREMENT_ID = import.meta.env.PUBLIC_GA_ID || GA_FALLBACK;
export const GOOGLE_SITE_VERIFICATION = import.meta.env.PUBLIC_GSC_TOKEN || GSC_FALLBACK;
