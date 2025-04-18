type PhoneColor = "black"| "white" | "grey" | "gold" | "silver" | "green" | "blue"| "red";

type PhoneStatus = "Available" | "Discontinued";

type FeatureType = "launch" | "body" | "display" | "platform" | "memory";

interface IAnnounceDate<S extends string, N extends number> {
  year: N;
  date: S;
}

interface IStatus<T extends PhoneStatus, S extends string> {
  type: T;
  release: S;
}

interface ILaunch<S extends string, N extends number, T extends PhoneStatus> {
  announceDate: IAnnounceDate<S, N>;
  status: IStatus<T, S>;
}

interface IBody<N extends number, S extends Array<string>> {
  weight: N;
  builds: S;
}

interface IDisplay<A extends Array<string>, N extends number, S extends string> {
  types: A;
  size: N;
  protection: S;
}

interface IPlatform<S extends string> {
  os: S;
  chipset: S;
  cpu: S;
  gpu: S;
}

interface IMemory<A extends Array<string>, B extends boolean> {
  hasCardSlot: B;
  internals: A;
}

interface IFeature {
  launch: ILaunch<string, number, PhoneStatus>;
  body: IBody<number, string[]>;
  display: IDisplay<string[], number, string>;
  platform: IPlatform<string>;
  memory: IMemory<string[], boolean>;
}

// Key will be the FeatureType union values, values will be the value Types from IFeature
type FeatureRecord = Record<FeatureType, IFeature[FeatureType]>;

interface IPhone<S extends string, T1, N extends number, T2> {
  model: S;
  color: T1;
  price: N;
  feature: T2;
}

class Phone implements IPhone<string, PhoneColor, number, FeatureRecord> {
  model: string;
  color: PhoneColor;
  price: number;
  // launch: ILaunch<string, number, PhoneStatus>;
  // body: IBody<number, string[]>;
  // display: IDisplay<string[], number, string>;
  // platform: IPlatform<string>;
  // memory: IMemory<string[], boolean>;
  feature: FeatureRecord;

  constructor(
    model: string,
    color: PhoneColor,
    price: number,
    // launch: ILaunch<string, number, PhoneStatus>,
    // body: IBody<number, string[]>,
    // display: IDisplay<string[], number, string>,
    // platform: IPlatform<string>,
    // memory: IMemory<string[], boolean>
    feature: FeatureRecord
  ) {
    this.model = model;
    this.color = color;
    this.price = price;
    // this.launch = launch;
    // this.body = body;
    // this.display = display;
    // this.platform = platform;
    // this.memory = memory;
    this.feature = feature;
  }
}

// const _iphone16 = new Phone(
//   "iphone 16",
//   "black",
//   234,
//   {
//     announceDate: {
//       year: 2024,
//       date: "September 19"
//     },
//     status: {
//       type: "Available",
//       release: "September 20"
//     },
//   },
//   { weight: 170,
//     builds: ["Glass front", "glass back", "aluminum frame"]
//   },
//   {
//     types: [
//       "Super Retina XDR OLED",
//       "HDR10, Dolby Vision",
//       "1000 nits (typ)",
//       "2000 nits (HBM)",
//     ],
//     size: 6.1,
//     protection: "Ceramic Shield glass (2024 gen)"
//   },
//   {
//     os: "iOS 18",
//     chipset: "Apple A18 (3 nm)",
//     cpu: "Hexa-core",
//     gpu: "Apple GPU",
//   },
//   {
//     hasCardSlot: false,
//     internals: ["128GB 8GB RAM", "256GB 8GB RAM", "512GB 8GB RAM"],
//   }
// );

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
