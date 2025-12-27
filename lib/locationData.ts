// Location data structure: Country -> Cities -> Areas

export interface Area {
  id: string;
  name: string;
}

export interface City {
  id: string;
  name: string;
  areas: Area[];
}

export interface Country {
  id: string;
  name: string;
  cities: City[];
}

export const locationData: Country[] = [
  {
    id: 'pakistan',
    name: 'Pakistan',
    cities: [
      {
        id: 'karachi',
        name: 'Karachi',
        areas: [
          { id: 'shah-faisal-colony', name: 'Shah Faisal Colony' },
          { id: 'gulshan-e-iqbal', name: 'Gulshan-e-Iqbal' },
          { id: 'defence', name: 'Defence' },
          { id: 'clifton', name: 'Clifton' },
          { id: 'bahadurabad', name: 'Bahadurabad' },
          { id: 'p.e.c.h.s', name: 'P.E.C.H.S' },
          { id: 'gulistan-e-johar', name: 'Gulistan-e-Johar' },
          { id: 'north-nazimabad', name: 'North Nazimabad' },
          { id: 'liaquatabad', name: 'Liaquatabad' },
          { id: 'saddar', name: 'Saddar' },
          { id: 'kharadar', name: 'Kharadar' },
          { id: 'malir', name: 'Malir' },
          { id: 'korangi', name: 'Korangi' },
          { id: 'landhi', name: 'Landhi' },
          { id: 'scheme-33', name: 'Scheme 33' },
          { id: 'bin-qasim', name: 'Bin Qasim' },
          { id: 'sindh-industrial', name: 'Sindh Industrial' },
          { id: 'orangi-town', name: 'Orangi Town' },
          { id: 'surjani-town', name: 'Surjani Town' },
          { id: 'nazimabad', name: 'Nazimabad' },
          { id: 'f.b-area', name: 'F.B Area' },
          { id: 'gulshan', name: 'Gulshan' },
          { id: 'jamshed-town', name: 'Jamshed Town' },
          { id: 'airport-area', name: 'Airport Area' },
          { id: 'model-colony', name: 'Model Colony' },
          { id: 'dha-phase-1', name: 'DHA Phase 1' },
          { id: 'dha-phase-2', name: 'DHA Phase 2' },
          { id: 'dha-phase-3', name: 'DHA Phase 3' },
          { id: 'dha-phase-4', name: 'DHA Phase 4' },
          { id: 'dha-phase-5', name: 'DHA Phase 5' },
          { id: 'dha-phase-6', name: 'DHA Phase 6' },
          { id: 'dha-phase-7', name: 'DHA Phase 7' },
          { id: 'dha-phase-8', name: 'DHA Phase 8' },
          { id: 'dha-phase-9', name: 'DHA Phase 9' },
        ]
      },
      {
        id: 'hyderabad',
        name: 'Hyderabad',
        areas: [
          { id: 'latifabad', name: 'Latifabad' },
          { id: 'qasimabad', name: 'Qasimabad' },
          { id: 'hyderabad-city', name: 'Hyderabad City' },
        ]
      },
      {
        id: 'lahore',
        name: 'Lahore',
        areas: [
          { id: 'defence', name: 'Defence' },
          { id: 'gulberg', name: 'Gulberg' },
          { id: 'model-town', name: 'Model Town' },
          { id: 'johar-town', name: 'Johar Town' },
          { id: 'bahria-town', name: 'Bahria Town' },
        ]
      },
      {
        id: 'islamabad',
        name: 'Islamabad',
        areas: [
          { id: 'f-6', name: 'F-6' },
          { id: 'f-7', name: 'F-7' },
          { id: 'f-8', name: 'F-8' },
          { id: 'dha', name: 'DHA' },
          { id: 'bahria-town', name: 'Bahria Town' },
        ]
      },
      {
        id: 'rawalpindi',
        name: 'Rawalpindi',
        areas: []
      },
      {
        id: 'multan',
        name: 'Multan',
        areas: []
      },
      {
        id: 'peshawar',
        name: 'Peshawar',
        areas: []
      },
      {
        id: 'quetta',
        name: 'Quetta',
        areas: []
      },
      {
        id: 'faisalabad',
        name: 'Faisalabad',
        areas: []
      },
      {
        id: 'sialkot',
        name: 'Sialkot',
        areas: []
      },
      {
        id: 'gujranwala',
        name: 'Gujranwala',
        areas: []
      },
      {
        id: 'sargodha',
        name: 'Sargodha',
        areas: []
      },
      {
        id: 'bahawalpur',
        name: 'Bahawalpur',
        areas: []
      },
      {
        id: 'sukkur',
        name: 'Sukkur',
        areas: []
      },
      {
        id: 'larkana',
        name: 'Larkana',
        areas: []
      },
      {
        id: 'sheikhupura',
        name: 'Sheikhupura',
        areas: []
      },
      {
        id: 'rahimyarkhan',
        name: 'Rahim Yar Khan',
        areas: []
      },
      {
        id: 'jhang',
        name: 'Jhang',
        areas: []
      },
      {
        id: 'gujrat',
        name: 'Gujrat',
        areas: []
      },
      {
        id: 'kasur',
        name: 'Kasur',
        areas: []
      },
      {
        id: 'sahiwal',
        name: 'Sahiwal',
        areas: []
      },
      {
        id: 'okara',
        name: 'Okara',
        areas: []
      },
      {
        id: 'wah-cantonment',
        name: 'Wah Cantonment',
        areas: []
      },
      {
        id: 'mardan',
        name: 'Mardan',
        areas: []
      },
      {
        id: 'mirpur-khas',
        name: 'Mirpur Khas',
        areas: []
      },
      {
        id: 'chaman',
        name: 'Chaman',
        areas: []
      },
    ]
  }
];

// Helper function to get all cities from Pakistan
export const getPakistaniCities = (): City[] => {
  const pakistan = locationData.find(country => country.id === 'pakistan');
  return pakistan ? pakistan.cities : [];
};

// Helper function to get areas for a specific city
export const getCityAreas = (cityId: string): Area[] => {
  const pakistan = locationData.find(country => country.id === 'pakistan');
  if (!pakistan) return [];
  
  const city = pakistan.cities.find(c => c.id === cityId);
  return city ? city.areas : [];
};

// Helper function to get city by ID
export const getCityById = (cityId: string): City | undefined => {
  const pakistan = locationData.find(country => country.id === 'pakistan');
  if (!pakistan) return undefined;
  return pakistan.cities.find(c => c.id === cityId);
};

