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

 // Pre-defined sets

const stickieOuties = ["Whiskers","Spikes","Halo","Rainbow chad", "Bandana","Triple chad", "Toothy chad", "Ninja bear", "Low battery", "Fishface", "Star-eyed smile", "Star-eyed toothy", "Flaming skull", "Unicorn", "Devil", "3D glasses", "Cat"];

const pixelFaces = ["Pixel excitement", "Pixel happy", "Pixel tongue"];

const stickieOutiesAndPixelFaces = stickieOuties.concat(pixelFaces);

const incompatible = {

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  //
  // TINNIE INCOMPATABILITIES
  //
  Stoner: ["Apollo","Node", "Headphones"],

  "Floating green": ["Angry cyclops"],
  "Floating pink": ["Angry cyclops"],
  "Floating purple": ["Angry cyclops"],
  "Floating red": ["Angry cyclops"],
  "Floating yellow": ["Angry cyclops"],

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  //
  // JARHEAD INCOMPATABILITIES
  //

  "Warrior": ["Cat"],
  "Angry cloud": ["Cloud"],
  // "Gadget Alien": ["Speakers"," Halo", "Crown", "Spikes", "Devil"],

  /////////////////////////////////////////////
  /////////////////////////////////////////////
  //
  // FLATSCREEN INCOMPATABILITIES
  //

  // Prevent stickie-out things overlapping
  "Horny": stickieOuties,

  // Prevent arrow overlap with stickie outties
  "Arrow": stickieOuties,

  // Prevent USB/CD drive overlaps
  "Noughties": stickieOuties,

  // Prevent Unicorn overlaps
  "Unicorn": stickieOuties,

  // Prevent pixel faces and sockets on speaker ears
  "Console": stickieOutiesAndPixelFaces,

  // Prevent skull overlapping pencil or socket
  "Artist": ["Flaming skull", "Low battery"],

  // Prevent pixel / bandana overlaps
  // TODO: **** Update with latest pixel face selection! ****
  "Pixel excitement": ["Bandana"],
  "Pixel happy": ["Bandana"],
  "Pixel tongue": ["Bandana"],

  // Prevent Ninja bear overlaps
  "Ninja bear": ["Bandana"],

  // Prevent speaker overlaps
  "Speakers": ["Halo", "Bandana", "Spikes", "Whiskers", "3D glasses", "Flaming skull"],

  // Prevent Chad overlaps
  "Toothy chad": ["Spikes", "Whiskers", "Halo"],
  "Triple chad": ["Spikes", "Whiskers", "Halo", "Bandana"],

  // Prevent speaker overlaps
  "3D glasses": ["Whiskers", "Spikes", "Halo", "Bandana"],

  // Prevent spoke overlaps
  "Spikes": ["Rainbow chad"],

  // Prevent bandana overlaps
  "Fishface": ["Bandana", "Halo"],
  "Triple grimace": ["Bandana"],

  // Prevent node overlaps
  "Node": ["Spikes"],

  // Prevent wings overlapping skull flames or socket
  "Insect flyer": ["Flaming skull", "Low battery"],
  "Flyer": ["Flaming skull", "Low battery"],
  "Water canon": ["Flaming skull", "Low battery"],

  // Prevent helmet extrusions
  "Helmet" : ["Fishface", "Pixel excitement", "Pixel happy", "Pixel tongue", "Low battery", "Ninja bear", "Triple chad", "Rodent", "Flaming skull", "Halo", "Bandana"],

  // Prevent rodent (tail) over sword
  "Warrior" : ["Rodent"],

  // Prevent rodent ears over halo
  "Rodent" : ["Halo"]

}


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
  "Ponzi": ["Yellow","Halo","Money printer","Yellow floating","Yellow rivet"],
  "Money": ["Green","Curved","Green chart","Yellow floating","Green basic"],

  // JARHEADS
  "Insectoid": ["Cracked"],
  // "Gadget alien": ["Nodule Jar"],

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
};

const debugLogs = true;

const format = {
  width: 3000,
  height: 3000,
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
    value: Math.round(Math.random() * 9) + 1
  },
  {
  trait_type: "Intelligence",
    value: Math.round(Math.random() * 9) + 1
  },
  {
  trait_type: "Luck",
    value: Math.round(Math.random() * 9) + 1
  }
  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
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
  thumbPerRow: 10,
  thumbWidth: 400,
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
