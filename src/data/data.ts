import { images } from "./images";
import { category } from "./category";
import { Notes } from "../data/interfaces";


export let notes: Notes | [] = [
  {
    picture: images[`Idea`],
    name: "Good Idea",
    createdAt: " 1662026665000",
    category: category["Idea"],
    content: "Buy a car",
    dates: "",
    status: "active",
  },
  {
    picture: images["Task"],
    name: "Shopping list",
    createdAt: "1662113065000",
    category: category["Task"],
    content: "Tomatoes,bread",
    dates: "",
    status: "active",
  },
  {
    picture: images["Random Thought"],
    name: "New Feature",
    createdAt: "1662199465000",
    category: category["Random Thought"],
    content: "Implement new feature",
    dates: "",
    status: "active",
  },
  {
    picture: images[`Idea`],
    name: "Touch the sky",
    createdAt: "1663063465000",
    category: category["Idea"],
    content: "I need to get high",
    dates: "",
    status: "active",
  },
  {
    picture: images[`Idea`],
    name: "Good feature",
    createdAt: "1663236265000",
    category: category["Idea"],
    content: "Make money",
    dates: "",
    status: "active",
  },
  {
    picture: images["Task"],
    name: "Scramble eggs",
    createdAt: "1663409065000",
    category: category["Task"],
    content: "I want to eat",
    dates: "",
    status: "active",
  },
  {
    picture: images["Task"],
    name: "Save the world",
    createdAt: "1663495465000",
    category: category["Task"],
    content: "I want to leave in peace",
    dates: "",
    status: "active",
  },
];
