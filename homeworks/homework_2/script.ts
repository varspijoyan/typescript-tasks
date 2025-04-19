type PhoneColor = "black"| "white" | "grey" | "gold" | "silver" | "green" | "blue"| "red";

type PhoneStatus = "Available" | "Discontinued";

type FeatureType = "launch" | "body" | "display" | "platform" | "memory";

interface IAnnounceDate {
  year: number;
  date: string;
}

interface IStatus<T> {
  type: T;
  release: string;
}

interface ILaunch<T> {
  announceDate: IAnnounceDate;
  status: IStatus<T>;
}

interface IBody {
  weight: number;
  builds: Array<string>;
}

interface IDisplay {
  types: Array<string>;
  size: number;
  protection: string;
}

interface IPlatform {
  os: string;
  chipset: string;
  cpu: string;
  gpu: string;
}

interface IMemory{
  hasCardSlot: boolean;
  internals: Array<string>;
}

interface IFeature {
  launch: ILaunch<PhoneStatus>;
  body: IBody;
  display: IDisplay;
  platform: IPlatform;
  memory: IMemory;
}

// Key will be the FeatureType union values, values will be the value Types from IFeature
type FeatureRecord = Record<FeatureType, IFeature[FeatureType]>;

interface IPhone<T1, T2> {
  model: string;
  color: T1;
  price: number;
  feature: T2;
}

class Phone implements IPhone<PhoneColor, FeatureRecord> {
  model: string;
  color: PhoneColor;
  price: number;
  feature: FeatureRecord;

  constructor(
    model: string,
    color: PhoneColor,
    price: number,
    feature: FeatureRecord
  ) {
    this.model = model;
    this.color = color;
    this.price = price;
    this.feature = feature;
  }
}

const _iphone16 = new Phone("iPhone 16", "grey", 234, {
  launch: {
    announceDate: {
      year: 2024,
      date: "September 9",
    },
    status: {
      type: "Available",
      release: "September 20",
    },
  },
  body: {
    weight: 170,
    builds: ["Glass front", "glass back", "aluminum frame"],
  },
  display: {
    types: [
      "Super Retina XDR OLED",
      "HDR10, Dolby Vision",
      "1000 nits (typ)",
      "2000 nits (HBM)",
    ],
    size: 6.1,
    protection: "Ceramic Shield glass (2024 gen)",
  },
  platform: {
    os: "iOS 18",
    chipset: "Apple A18 (3 nm)",
    cpu: "Hexa-core",
    gpu: "Apple GPU",
  },
  memory: {
    hasCardSlot: false,
    internals: ["128GB 8GB RAM", "256GB 8GB RAM", "512GB 8GB RAM"],
  },
});

console.log(JSON.stringify(_iphone16, null, 2));
