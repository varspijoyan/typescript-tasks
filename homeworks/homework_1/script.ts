type AnnounceDateType = {
  year: number;
  date: string;
};

type StatusType = {
  type: string;
  release: string;
};

type LaunchType = {
  announceDate: AnnounceDateType;
  status: StatusType;
};

type BodyType = {
  weight: number;
  builds: string[];
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
type PhoneFeaturesType = {
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
  features: PhoneFeaturesType;
};

const iphone16Features:PhoneFeaturesType = {
    launch: {
        announceDate: {
            year: 2024,
            date: 'September 9'
        },
        status: {
            type: 'Available',
            release: 'September 20'
        }
    },
    body: {
        weight: 170,
        builds: ['Glass front', 'glass back', 'aluminum frame']
    },
    display: {
        types: ['Super Retina XDR OLED', 'HDR10, Dolby Vision', '1000 nits (typ)', '2000 nits (HBM)'],
        size: 6.1,
        protection: 'Ceramic Shield glass (2024 gen)'
    },
    platform: {
        os: 'iOS 18',
        chipset: 'Apple A18 (3 nm)',
        cpu: 'Hexa-core',
        gpu: 'Apple GPU'
    },
    memory: {
        hasCardSlot: false,
        internals: ['128GB 8GB RAM', '256GB 8GB RAM', '512GB 8GB RAM']
    }
};

const iphone16: PhoneType = {
    model: 'iPhone 16',
    colors: ['Black', 'White', 'Pink', 'Teal', 'Ultramarine'],
    price: 569.81,
    features: iphone16Features
};

console.log(iphone16Features);
console.log('-----------------------------------------------');
console.log(iphone16);


