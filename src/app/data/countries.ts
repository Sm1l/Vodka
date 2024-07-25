export type TCountriesValues = "russia" | "belarus" | "ukraine" | "finland" | "armenia" | "other";
export type TCountriesNames = "Россия" | "Беларусь" | "Украина" | "Финляндия" | "Армения" | "Другая";
export type TCountriesPairs = { value: TCountriesValues; name: TCountriesNames };

export const countries: TCountriesPairs[] = [
  {
    value: "russia",
    name: "Россия",
  },
  { value: "belarus", name: "Беларусь" },
  { value: "ukraine", name: "Украина" },
  { value: "finland", name: "Финляндия" },
  { value: "armenia", name: "Армения" },
  { value: "other", name: "Другая" },
];
