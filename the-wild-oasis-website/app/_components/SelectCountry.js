import { getCountries } from "@/app/_lib/data-service";

async function SelectCountry({ defaultCountry, name, id, className }) {
  let countries = [];
  let flag = "";

  try {
    countries = await getCountries();
    flag = countries.find((country) => country.name === defaultCountry)?.flag ?? "";
  } catch (error) {
    console.error("Error fetching countries:", error);
  }

  return (
    <select
      name={name}
      id={id}
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.map((c) => (
        <option key={c.name} value={`${c.name}%${c.flag}`}>
          {c.name}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;