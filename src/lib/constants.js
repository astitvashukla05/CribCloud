import {
  Wifi,
  Waves,
  Dumbbell,
  Car,
  PawPrint,
  Tv,
  Thermometer,
  Cigarette,
  Cable,
  Maximize,
  Bath,
  Phone,
  Sprout,
  Hammer,
  Bus,
  Mountain,
  VolumeX,
  Home,
  Warehouse,
  Building,
  Castle,
  Trees,
} from "lucide-react";

// Enum replacements with plain objects
export const AmenityEnum = {
  WasherDryer: "WasherDryer",
  AirConditioning: "AirConditioning",
  Dishwasher: "Dishwasher",
  HighSpeedInternet: "HighSpeedInternet",
  HardwoodFloors: "HardwoodFloors",
  WalkInClosets: "WalkInClosets",
  Microwave: "Microwave",
  Refrigerator: "Refrigerator",
  Pool: "Pool",
  Gym: "Gym",
  Parking: "Parking",
  PetsAllowed: "PetsAllowed",
  WiFi: "WiFi",
};

export const AmenityIcons = {
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Dishwasher: Waves,
  HighSpeedInternet: Wifi,
  HardwoodFloors: Home,
  WalkInClosets: Maximize,
  Microwave: Tv,
  Refrigerator: Thermometer,
  Pool: Waves,
  Gym: Dumbbell,
  Parking: Car,
  PetsAllowed: PawPrint,
  WiFi: Wifi,
};

export const HighlightEnum = {
  HighSpeedInternetAccess: "HighSpeedInternetAccess",
  WasherDryer: "WasherDryer",
  AirConditioning: "AirConditioning",
  Heating: "Heating",
  SmokeFree: "SmokeFree",
  CableReady: "CableReady",
  SatelliteTV: "SatelliteTV",
  DoubleVanities: "DoubleVanities",
  TubShower: "TubShower",
  Intercom: "Intercom",
  SprinklerSystem: "SprinklerSystem",
  RecentlyRenovated: "RecentlyRenovated",
  CloseToTransit: "CloseToTransit",
  GreatView: "GreatView",
  QuietNeighborhood: "QuietNeighborhood",
};

export const HighlightIcons = {
  HighSpeedInternetAccess: Wifi,
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Heating: Thermometer,
  SmokeFree: Cigarette,
  CableReady: Cable,
  SatelliteTV: Tv,
  DoubleVanities: Maximize,
  TubShower: Bath,
  Intercom: Phone,
  SprinklerSystem: Sprout,
  RecentlyRenovated: Hammer,
  CloseToTransit: Bus,
  GreatView: Mountain,
  QuietNeighborhood: VolumeX,
};

export const PropertyTypeEnum = {
  Rooms: "Rooms",
  Tinyhouse: "Tinyhouse",
  Apartment: "Apartment",
  Villa: "Villa",
  Townhouse: "Townhouse",
  Cottage: "Cottage",
};

export const PropertyTypeIcons = {
  Rooms: Home,
  Tinyhouse: Warehouse,
  Apartment: Building,
  Villa: Castle,
  Townhouse: Home,
  Cottage: Trees,
};

export const NAVBAR_HEIGHT = 52; // in pixels

// Test users for development
export const testUsers = {
  tenant: {
    username: "Carol White",
    userId: "us-east-2:76543210-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "carol.white@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  tenantRole: "tenant",
  manager: {
    username: "John Smith",
    userId: "us-east-2:12345678-90ab-cdef-1234-567890abcdef",
    signInDetails: {
      loginId: "john.smith@example.com",
      authFlowType: "USER_SRP_AUTH",
    },
  },
  managerRole: "manager",
};
