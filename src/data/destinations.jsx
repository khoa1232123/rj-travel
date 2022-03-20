import {
  destination1,
  destination2,
  destination3,
  destination4,
  destination5,
  destination6,
} from "./imgs";

export const destinations = [
  {
    id: "ct1",
    name: "Europe",
    img: destination1,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
  {
    id: "ct5",
    name: "Netherlands",
    parent: "ct1",
    img: destination2,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
  {
    id: "ct6",
    name: "Italy",
    parent: "ct1",
    img: destination3,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
  {
    id: "ct2",
    name: "Asia",
    img: destination4,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
  {
    id: "ct4",
    name: "Thailandia",
    parent: "ct2",
    img: destination5,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
  {
    id: "ct3",
    name: "United States",
    img: destination6,
    desc: "Vivamus volutpat eros pulvinar velit laoreet, sit amet egestas erat dignissim. Sed quis rutrum tellus, sit amet viverra felis. Cras sagittis sem sit amet urna feugiat rutrum. Nam nulla ipsum, venenatis malesuada felis quis, ultricies convallis neque. Pellentesque tristique fringilla tempus.    ",
  },
];
