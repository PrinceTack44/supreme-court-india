export const locales = ['en', 'hi'] as const;
export type Locale = (typeof locales)[number];
