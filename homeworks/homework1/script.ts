type AnnounceDateType = {
  year: number;
  date: string;
};

type LaunchType = {
  announceDate: AnnounceDateType;
  status: string;
};

type BodyType = {
  weight: number;
  builds: string[];
  sims: string[];
};

type DisplayType = {
  types: string[];
  size: number;
  protection: string;
};

type PlatformType = {
  os: string;
  chipset: string;
  cpu: string;
  gpu: string;
};

type MemoryType = {
  hasCardSlot: boolean;
  internals: string[];
};

type FeaturesType = {
  launch: LaunchType;
  body: BodyType;
  display: DisplayType;
  platform: PlatformType;
  memory: MemoryType;
};

type PhoneType = {
  model: string;
  colors: string[];
  price: number;
  feautures: FeaturesType;
};

const iphone16Features: FeaturesType = {
  launch: {
    announceDate: {
      year: 2024,
      date: "September 9",
    },
    status: "Available",
  },
  body: {
    weight: 170,
    builds: ["Glass front", "glass back", "aluminum frame"],
    sims: [
      "Nano-SIM",
      "e-SIM",
      "IP68 dust tight and water resistant (immersible up to 6m for 30 min)",
      "Apple Pay (Visa, MasterCard, AMEX certified)",
    ],
  },
  display: {
    types: [
      "Super Retina XDR OLED, HDR10",
      "Dolby Vision, 1000 nits (typ)",
      "2000 nits (HBM)",
    ],
    size: 6.1,
    protection: "Ceramic Shield glass",
  },
  platform: {
    os: "IOS 18",
    chipset: "Apple A18 (3 nm)",
    cpu: "Hexa-core (2x4.04 GHz + 4x2.20 GHz)",
    gpu: "Apple GPU (5-core graphics)",
  },
  memory: {
    hasCardSlot: false,
    internals: ["128GB 8GB RAM", "256GB 8GB RAM", "512GB 8GB RAM"],
  },
};

const iphone16: PhoneType = {
  model: "Iphone 16",
  colors: ["Black", "White", "Pink", "Teal", "Ultramarine"],
  price: 569.81,
  feautures: iphone16Features,
};

console.log(iphone16Features);
console.log("----------------------------------------");
console.log(iphone16);
