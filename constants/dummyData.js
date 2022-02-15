import images from "./images";

const dummyData = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Ooni Pizza",
    image: images.oonipizza,
    description: "Neapolitan style pizza for the Ooni Oven",
    ingredients: [
      {
        id: 1,
        description: "Cold water",
        quantity: "300g",
      },
      {
        id: 2,
        description: "Salt",
        quantity: "4 tsp",
      },
      {
        id: 3,
        description: "Fresh yeast",
        quantity: "20g",
      },
      {
        id: 4,
        description: "00 flour",
        quantity: "500g",
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Place two-thirds of the water in a large bowl. In a saucepan or microwave, bring the other third of water to boil, then add it to the cold water in the bowl. This creates the correct temperature for activating yeast. Whisk the salt and yeast into the warm water.",
      },
      {
        id: 2,
        description:
          "Fit the mixer with the dough hook and place the flour in the mixer bowl. Turn the machine on at a low speed and gradually add the yeast mixture to the flour. Once combined, leave the dough to keep mixing to at the same speed for 5-10 minutes, or until the dough is firm and stretchy. Cover the dough with cling film and leave to rise in a warm place for about 2 hours or until doubled in size",
      },
      {
        id: 3,
        description:
          "When the dough has roughly doubled in size, divide it into 3 or 4 equal pieces, depending on what size you want your pizzas to be (either 12 inches or 16 inches wide). Place each piece of dough in a separate bowl or tray, cover with cling film and leave to rise for another 30 - 60 minutes, or until doubled in size",
      },
      {
        id: 4,
        description:
          "Kneading and stretching the dough: Our top tip is always to start with a perfectly rounded ball of pizza dough as this helps to keep the shape of the pizza base circular during the stretching process. Place the ball on a lightly floured surface, flour your hands and use your fingertips to press the dough into a small, flat disc. Working from the center, push the dough outwards while spreading your fingers, making the disc slightly bigger. Pick up the pizza dough and gently pinch it all around the edge, allowing gravity to pull it downwards into a circle. Neapolitan-style pizza bases are very thin, so you should be able to see through the base when you hold it up to the light. Take care when doing this – you don’t want it to tear.",
      },
      {
        id: 5,
        description:
          "Once the pizza dough is fully stretched, lightly flour your pizza peel and lay the base on it. If at this point you see any small holes in the dough, gently pinch them back together. Once you’re happy with the base, add your toppings and bake it",
      },
    ],
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Bacon Cheeseburger ",
    image: images.baconburger,
    description: "Serve with a dollop of truffle mayo and garlic butter fries",
    ingredients: [
      {
        id: 1,
        description: "Rocket",
        quantity: "50g",
      },
      {
        id: 2,
        description: "Italian hard cheese",
        quantity: "35g",
      },
      {
        id: 3,
        description: "smoked streaky bacon",
        quantity: "90g",
      },
      {
        id: 4,
        description: "panko breadcrumbs",
        quantity: "30g",
      },
      {
        id: 5,
        description: "beef mince",
        quantity: "250g",
      },
      {
        id: 6,
        description: "brioche buns",
        quantity: "2",
      },
      {
        id: 7,
        description: "balsamic vinegar",
        quantity: "15ml",
      },
      {
        id: 8,
        description: "truffle flavoured olive oil",
        quantity: "16ml",
      },
      {
        id: 9,
        description: "onion marmalade",
        quantity: "40g",
      },
      {
        id: 10,
        description: "parsley",
        quantity: "5g",
      },
      {
        id: 11,
        description: "garlic cloves",
        quantity: "2",
      },
      {
        id: 12,
        description: "tomato",
        quantity: "1",
      },
      {
        id: 13,
        description: "white potatoes",
        quantity: "3",
      },
      {
        id: 14,
        description: "mayonnaise ",
        quantity: "50ml",
      },
    ],
    steps: [
      {
        id: 1,
        description: "Preheat the oven to 220°C/ 200°C (fan)/ gas 7",
      },
      {
        id: 2,
        description: "Cut the potatoes (skins on) into thin chips",
      },
      {
        id: 3,
        description:
          "Add the chips to a baking tray with a drizzle of vegetable oil and a pinch of salt and pepper, give everything a good mix up and put the tray in the oven for an initial 25-30 min or until golden and crisp.",
      },
      {
        id: 4,
        description:
          "While the chips are cooking, add the beef mince to a bowl with the panko breadcrumbs and a pinch of pepper, give everything a good mix up until fully combined (clean hands is the best way!) then shape into equal sized patties.",
      },
      {
        id: 5,
        description:
          "Add the burger patties to an oiled baking tray with the streaky bacon, put the tray in the oven for 12-15 min or until the burgers are cooked through and the bacon is crispy.",
      },
      {
        id: 6,
        description:
          "Meanwhile, peel and finely chop (or grate) the garlic, chop the parsley, and chop a large knog of butter into small cubes.",
      },
      {
        id: 7,
        description:
          "Once the chips are golden, remove them from the oven and push to one side of the tray, then top the chips with the chopped butter, garlic and parsley and gently toss everything together – these are your garlic butter fries",
      },
      {
        id: 8,
        description: "Slice the brioche buns in half and add them to the tray",
      },
      {
        id: 9,
        description:
          "Once the burgers are cooked through, remove the tray[s] from the oven and top each patty with the Italian hard cheese shavings.",
      },
    ],
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Caramel Flan",
    image: images.pudim,
    description: "Brazilian Style Flan or Pudim de Leite",

    ingredients: [
      {
        id: 1,
        description: "white sugar",
        quantity: "1 cup",
      },
      {
        id: 2,
        description: "eggs, separated",
        quantity: "4",
      },
      {
        id: 3,
        description: "condensed milk",
        quantity: "1 can",
      },
      {
        id: 4,
        description: "milk",
        quantity: "3/4 cups",
      },
    ],
    steps: [
      {
        id: 1,
        description: "Preheat an oven to 350 degrees F (175 degrees C).",
      },
      {
        id: 2,
        description:
          "Melt the sugar in a heavy saucepan over low heat, stirring constantly. Once the sugar becomes a golden brown syrup after about 10 minutes, pour it immediately into a round baking dish, swirling so that the syrup coats all sides of the dish. Set aside to cool.",
      },
      {
        id: 3,
        description:
          "Place the egg yolks into a blender and blend on medium for 5 minutes, then add condensed milk, 3/4 cup plus 2 tablespoons milk, and egg whites. Continue to blend until all ingredients are combined. Pour egg mixture into the baking dish and cover with aluminum foil. Line a roasting pan with a damp kitchen towel. Place baking dish on towel, inside roasting pan, and place roasting pan on oven rack. Fill roasting pan with boiling water to reach halfway up the sides of the baking dish.",
      },
      {
        id: 4,
        description:
          "Bake in the preheated oven until a knife inserted 1 inch from the edge comes out clean, 45 to 50 minutes. The center of the flan will still be soft. Allow flan to cool before unmolding onto a plate. Refrigerate before serving.",
      },
    ],
  },
  {
    id: "58694a0f-3da1-471f-bd96-152141e29d72",
    title: "Bangers 'N’ Mash",
    image: images.bangersnmash,
    description: "British comfort classic dish with a little twist",
    ingredients: [
      {
        id: 1,
        description: "onion marmalade",
        quantity: "20g",
      },
      {
        id: 2,
        description: "Proper Porker sausages",
        quantity: "6",
      },
      {
        id: 3,
        description: "beef stock mix",
        quantity: "11g",
      },
      {
        id: 4,
        description: "white potatoes",
        quantity: "4",
      },
      {
        id: 5,
        description: "carrots",
        quantity: "2",
      },
      {
        id: 6,
        description: "red onion",
        quantity: "1",
      },
      {
        id: 7,
        description: "fine green beans",
        quantity: "80g",
      },
    ],
    steps: [
      {
        id: 1,
        description: "Preheat the oven to 220°C/ 200°C (fan)/ gas 7",
      },
      {
        id: 2,
        description:
          "Top, tail and slice the carrots at an angle, add it to a baking tray, drizzle with olive oil and season with a pinch of pepper.",
      },
      {
        id: 3,
        description:
          "Add the sausages to the tray and put everything in the oven for 20 min or until the sausages are cooked through",
      },
      {
        id: 4,
        description:
          "Peel and finely slice the red onion[s], add the red onions to a heated large pan (with a knob of butter). Caramelise the onions until soft",
      },
      {
        id: 5,
        description:
          "Meanwhile, cut the potatoes (skins on) into small bite-sized pieces, Add the chopped potatoes to a pot of plenty of boiled water with a pinch of salt and bring to the boil over a high heat",
      },
      {
        id: 6,
        description:
          "Dissolve the beef stock mix and onion marmalade in 250ml  boiled water and mix until fully combined - this is your onion gravy stock",
      },
      {
        id: 7,
        description:
          "Once the onions have caramelised, add 1 tsp [2 tsp] flour to the pan and cook for 1 min, stirring until the onions are evenly coated in the flour, add the onion gravy stock, increase the heat to medium and cook for 7-8 min or until thickened to a gravy-like consistency - this is your red onion gravy",
      },
      {
        id: 8,
        description:
          " trim the green beans, then add them to a pot with plenty of boiling water and a pinch of salt and bring to the boil over a high heat, Once cooked, drain and return to the pot and keep covered until serving",
      },
      {
        id: 9,
        description:
          "While the green beans are boiling, return the drained potatoes to a low heat and add a splash of milk and a knob of butter, Season with a pinch of salt and pepper and mash until smooth",
      },
      {
        id: 10,
        description:
          "Serve the sausages over the mash with the carrots and green beans to the side, Pour the red onion gravy all over and enjoy!",
      },
    ],
  },
  {
    id: "85479a0f-3da1-471f-bd96-152141e29d72",
    title: "Breakfast super-shake",
    image: images.smoothie,
    description: "Strawberry and Blueberry smoothie",

    ingredients: [
      {
        id: 1,
        description: "full-fat milk",
        quantity: "100ml",
      },
      {
        id: 2,
        description: "natural yogurt",
        quantity: "2 tbsp",
      },
      {
        id: 3,
        description: "banana",
        quantity: "1",
      },
      {
        id: 4,
        description: "frozen strawberries",
        quantity: "150g",
      },
      {
        id: 5,
        description: "blueberries",
        quantity: "50g",
      },
      {
        id: 6,
        description: "honey ",
        quantity: "1 tbsp",
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Put the ingredients in a blender and blitz until smooth. Pour into a glass and enjoy!",
      },
    ],
  },
  {
    id: "85479a0f-3da1-123f-bd96-265421e29d72",
    title: "Spaghetti Bolognese",
    image: images.spagbol,
    description: "Easy and low cost SpagBol",

    ingredients: [
      {
        id: 1,
        description: "Olive Oil",
        quantity: "2 tbsp",
      },
      {
        id: 2,
        description: "Beef Mince",
        quantity: "400g",
      },
      {
        id: 3,
        description: "Onion (diced)",
        quantity: "1",
      },
      {
        id: 4,
        description: "Garlic",
        quantity: "2 cloves",
      },
      {
        id: 5,
        description: "Carrot (grated)",
        quantity: "100g",
      },
      {
        id: 6,
        description: "tin chopped tomatoes",
        quantity: "¼ tbsp",
      },
      {
        id: 7,
        description: "dried spaghetti",
        quantity: "400g",
      },
      {
        id: 8,
        description: "beef stock cube",
        quantity: "1",
      },
    ],
    steps: [
      {
        id: 1,
        description:
          "Heat a large saucepan over a medium heat. Add a tablespoon of olive oil and once hot add the beef mince and a pinch of salt and pepper. Cook the mince until well browned over a medium-high heat (be careful not to burn the mince. It just needs to be a dark brown colour). Once browned, transfer the mince to a bowl and set aside",
      },
      {
        id: 2,
        description:
          "Add another tablespoon of oil to the saucepan you browned the mince in and turn the heat to medium. Add the onions and a pinch of salt and fry gently for 5-6 minutes, or until softened and translucent. Add the garlic and cook for another 2 minutes. Add the grated carrot then pour the mince and any juices in the bowl back into the saucepan.",
      },
      {
        id: 3,
        description:
          "Add the tomatoes to the pan and stir well to mix. Pour in the stock, bring to a simmer and then reduce the temperature to simmer gently for 45 minutes, or until the sauce is thick and rich. Taste and adjust the seasoning as necessary",
      },
      {
        id: 4,
        description:
          "When ready to cook the spaghetti, heat a large saucepan of water and add a pinch of salt. Cook according to the packet instructions. Once the spaghetti is cooked through, drain and add to the pan with the bolognese sauce. Mix well and serve.",
      },
    ],
  },
];

const data = dummyData;

export default {
  data,
  dummyData,
};
