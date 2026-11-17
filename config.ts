// Auto-generated configuration for BLS Spain Morocco AutoBot

export const config = {
  botName: "BLS Spain Morocco",
  country: "Morocco",
  provider: "BLS International",
  destination: "Spain",
  loginUrl: "https://www.blsspainmorocco.net/MAR/account/login",
  centers: [
  "Casablanca",
  "Rabat",
  "Tangier",
  "Tetouan",
  "Nador",
  "Agadir"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Family Visit",
  "Student",
  "Medical",
  "Work",
  "Transit",
  "National Visa",
  "Cultural/Sports"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
