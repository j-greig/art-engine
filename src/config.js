"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "An army of uniqe robots, StrongBots are also your lottery ticket to winning Strong node and tokens.";
const baseUri = "ipfs://NewUriToReplace";

const outputJPEG = false; // if false, the generator outputs png's
/**
 * Set your tokenID index start number.
 * ⚠️ Be sure it matches your smart contract!
 */
const startIndex = 0;

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    // TINNIES
    growEditionSizeTo: 500, //1000
    namePrefix: "StrongBot",
    layersOrder: [
      { name: "Background" },
      { name: "Type" },
    ],
  },
  // {
  //   // JARHEADS // 2100
  //   growEditionSizeTo: 99, //2100
  //   namePrefix: "StrongBot",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Body Jarhead", trait: "Body"  },
  //     { name: "Arms Jarhead", trait: "Arms" },
  //     { name: "Control Panel Jarhead", trait: "Control Panel" },
  //     { name: "Inside Jarhead", trait: "Face" },
  //     { name: "Head Jarhead", trade: "Head" },
  //     { name: "Drones Flatscreen", trait: "Companion" }
  //   ],
  // },
  // {
  //   // JARHEAD WITH EYEBALL + HANDLE [RARE] // 2200
  //   growEditionSizeTo: 102,
  //   namePrefix: "StrongBot",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Body Jarhead", trait: "Body"  },
  //     { name: "Arms Jarhead", trait: "Arms" },
  //     { name: "Control Panel Jarhead", trait: "Control Panel" },
  //     { name: "Inside Jarhead Eyeball", trait: "Face" },
  //     { name: "Head Jarhead Handle", trait: "Head" },
  //     { name: "Drones Flatscreen", trait: "Companion" }
  //   ],
  // },
  // {
  //   // JARHEAD WITH VR HEADSET [RARE] // ????
  //   growEditionSizeTo: 140,
  //   namePrefix: "StrongBot",
  //   layersOrder: [
  //     { name: "Background" },
  //     { name: "Body Jarhead", trait: "Body"  },
  //     { name: "Arms Jarhead", trait: "Arms" },
  //     { name: "Control Panel Jarhead", trait: "Control Panel" },
  //     { name: "Inside Jarhead VR Set", trait: "Face" },
  //     { name: "Head Jarhead VR Set", trait: "Head" },
  //     { name: "Drones Flatscreen", trait: "Companion" }
  //   ],
  // },
  // {
  //   // FLATSCREEN
  //   growEditionSizeTo: 60,
  //   namePrefix: "StrongBot Flatscreen",
  //   layersOrder: [
  //     { name: "Background Forced" },
  //     { name: "Body Flatscreen", trait: "Body"  },
  //     { name: "Arms Flatscreen", trait: "Arms" },
  //     { name: "Control Panel Flatscreen", trait: "Control Panel" },
  //     { name: "Head Flatscreen", trait: "Head" },
  //     { name: "Face Flatscreen", trait: "Face" },
  //     { name: "Drones Flatscreen", trait: "Companion" }
  //   ],
  // },
  // {
  //   // OPEN FLATSCREEN [RARE]
  //   growEditionSizeTo: 70,
  //   namePrefix: "StrongBot Flatscreen Open",
  //   // resetNameIndex: true, // this will start this species count at #1 instead of the current total + 1
  //   layersOrder: [
  //     { name: "Background Forced" },
  //     { name: "Body Flatscreen", trait: "Body"  },
  //     { name: "Arms Flatscreen", trait: "Arms" },
  //     { name: "Control Panel Flatscreen", trait: "Control Panel" },
  //     { name: "Head Flatscreen Open", trait: "Head" },
  //     { name: "Face Flatscreen Open", trait: "Face" },
  //     { name: "Drones Flatscreen", trait: "Companion" }
  //   ],
  // },
];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const stickieOuties = ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Flaming skull"]
const pixelFaces = ["Pixel cry", "Pixel excitement", "Pixel grimace", "Pixel happy", "Pixel tongue"]
const stickieOutiesAndPixelFaces = stickieOuties.concat(pixelFaces)

const incompatible = {

  // TINNIES
  Stoner: ["Apollo","Node", "Headphones"],

  "Floating green": ["Angry cyclops"],
  "Floating pink": ["Angry cyclops"],
  "Floating purple": ["Angry cyclops"],
  "Floating red": ["Angry cyclops"],
  "Floating yellow": ["Angry cyclops"],

}

// WORKINGS
const incompatibleXXXXXXXXXX = {
  // TINNIES INCOMPATABILITIES

  "Stoner": "Apollo",
  "Unicorn": "Headphones",
  "Unicorn": "Rocket blue",

  // JARHEAD INCOMPATABILITIES
  "Soldier": ["Cat"],
  // "Gadget Alien": ["Speakers"," Halo", "Crown", "Spikes", "Devil"],

  // FLATSCREEN INCOMPATABILITIES

  // Horns: Prevent stickie-out things overlapping
  "Purple horns flatscreen": ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Rodent"],
  "Yellow horns flatscreen": ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Rodent"],
  "Blue horns flatscreen": ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Rodent"],
  "Pink horns flatscreen": ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Rodent"],

  "Node flatscreen": ["Rainbow chad", "Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy"],

  // Prevent arrow overlap with stickie outties
  "Green arrow flatscreen": stickieOuties,
  "Red arrow flatscreen": stickieOuties,
  "Blue arrow flatscreen": stickieOuties,

  // Prevent pixel faces and sockets on speaker ears
  "Pink speakers flatscreen": stickieOutiesAndPixelFaces,
  "Blue speakers flatscreen": stickieOutiesAndPixelFaces,

  // Prevent pixel faces and glasses on console
  // "Console flatscreen": ["Pixel cry", "Pixel excitement", "Pixel grimace", "Pixel happy", "Pixel tongue", "Star-eyed smile", "Star-eyed toothy"],
  "Console flatscreen": stickieOutiesAndPixelFaces,

  // Prevent skull overlapping pencil or socket
  "Pencil pink and green": ["Flaming skull", "Low battery"],

  // Prevent wings overlapping skull flames or socket
  "Insect flyer blue": ["Flaming skull", "Low battery"],

  // Prevent fish and pixel faces inside helmet, also prevent helmet clashing with socket, rodent, and bear ears
  "Yellow helmet flatscreen" : ["Fishface", "Pixel cry", "Pixel excitement", "Pixel grimace", "Pixel happy", "Pixel tongue", "Low battery", "Ninja bear", "Triple chad", "Rodent"],
  "Pink helmet flatscreen" : ["Fishface", "Pixel cry", "Pixel excitement", "Pixel grimace", "Pixel happy", "Pixel tongue", "Low battery", "Ninja bear", "Triple chad", "Rodent"],

  // Prevent rodent (tail) over sword
  "Swordsman white and pink" : ["Rodent"]

};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
const forcedCombinations = {
  // TINNIES

  // JARHEADS
  "Alien Insect": ["Cracked Jar"],
  "Gadget Alien": ["Nodule Jar"],

  // FLATSCREENS
  "Low battery": ["Drone NONE"],
  "Flaming skull": ["NONE", "NONE"]

};

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
const traitValueOverrides = {
  // "Body Jarhead": "Body",
  // "gold chain": "GOLDEN NECKLACE",
};

const debugLogs = true;

const format = {
  width: 1500,
  height: 1500,
};

const background = {
  generate: true,
  brightness: "100%",
};

const extraMetadata = {};

const extraAttributes = () => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  {
  trait_type: "Strength",
    value: Math.round(Math.random() * 100)
  },
  {
  trait_type: "Intelligence",
    value: Math.round(Math.random() * 100)
  },
  {
  trait_type: "Luck",
    value: Math.round(Math.random() * 100)
  }
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

/**
 * Set to true to always use the root folder as trait_tybe
 * Set to false to use weighted parent folders as trait_type
 * Default is true.
 */
const useRootTraitType = true;

const preview = {
  thumbPerRow: 12,
  thumbWidth: 300,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  background,
  baseUri,
  buildDir,
  debugLogs,
  description,
  emptyLayerName,
  extraAttributes,
  extraMetadata,
  forcedCombinations,
  format,
  hashImages,
  incompatible,
  layerConfigurations,
  layersDir,
  outputJPEG,
  preview,
  rarityDelimiter,
  shuffleLayerConfigurations,
  startIndex,
  traitValueOverrides,
  uniqueDnaTorrance,
  useRootTraitType,
};
