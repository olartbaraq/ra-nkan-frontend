declare module "react-country-state-city" {
  export function CountrySelect(props: CountrySelectProps): JSX.Element;
  export function StateSelect(props: StateSelectProps): JSX.Element;
  export function CitySelect(props: CitySelectProps): JSX.Element;
  export function LanguageSelect(props: LanguageSelectProps): JSX.Element;
  export function GetCountries(): Promise<Country[]>;
  export function GetState(countryId: string): Promise<State[]>;
  export function GetCity(countryId: string, stateId: string): Promise<City[]>;
  export function GetLanguages(): Promise<Language[]>;

  interface CountrySelectProps {
    containerClassName?: string;
    inputClassName?: string;
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: Country;
    onChange?: (country: Country) => void;
    placeHolder?: string;
    showFlag?: boolean;
  }

  interface StateSelectProps {
    containerClassName?: string;
    inputClassName?: string;
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: State;
    onChange?: (state: State) => void;
    countryid: string | number;
    placeHolder?: string;
  }

  interface CitySelectProps {
    containerClassName?: string;
    inputClassName?: string;
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: City;
    onChange?: (city: City) => void;
    countryid: string | number;
    stateid: string | number;
    placeHolder?: string;
  }

  interface LanguageSelectProps {
    containerClassName?: string;
    inputClassName?: string;
    onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: Language;
    onChange?: (language: Language) => void;
    placeHolder?: string;
    displayNative?: boolean;
  }

  interface Country {
    id: string;
    name: string;
    emoji?: string;
  }

  interface State {
    id: string;
    name: string;
    countryId: string | number;
  }

  interface City {
    id: string;
    name: string;
    stateId: string | number;
  }

  interface Language {
    code: string;
    name: string;
    native?: string;
  }
}
