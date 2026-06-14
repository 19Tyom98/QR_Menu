import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  hy: {
    translation: {
      "Coffee": "Սուրճ",
      "Breakfast": "Նախաճաշ",
      "Burgers": "Բուրգերներ",
      "Desserts": "Աղանդեր",
      "Drinks": "Ըմպելիքներ",
      "our_menu": "Մեր մենյուն",
      "amd": "դրամ",
      "coffee_cafe": "ՍՈՒՐՃԻ ՍՐՃԱՐԱՆ",
      // Coffee
      "Espresso": "Էսպրեսո",
      "Americano": "Ամերիկանո",
      "Cappuccino": "Կապուչինո",
      "Latte": "Լատտե",
      "Macchiato": "Մակիատո",
      "Flat White": "Ֆլեթ Ուայթ",
      "Mocha": "Մոկկո",
      "Caffè Breve": "Կաֆե Բրևե",
      "Iced Coffee": "Սառը սուրճ",
      // Breakfast
      "Omelette": "Օմլետ",
      "Scrambled Eggs": "Ձվածեղ",
      "Pancakes": "Փանկեյքներ",
      "Croissant": "Կրուասան",
      "Chia Pudding": "Չիա Պուդինգ",
      "Toast with Butter": "Տոստ կարագով",
      "Strawberry Yogurt Bowl": "Յոգուրտ ելակով",
      "French Toast": "Ֆրանսիական տոստ",
      "Waffles": "Վաֆլիներ",
      // Burgers
      "Classic Burger": "Դասական Բուրգեր",
      "Cheeseburger": "Չիզբուրգեր",
      "Double Cheeseburger": "Կրկնակի Չիզբուրգեր",
      "Chicken Burger": "Հավի Բուրգեր",
      "Big Boss Burger": "Բիգ Բոս Բուրգեր",
      "King Burger": "Քինգ Բուրգեր",
      "Mega Burger": "Մեգա Բուրգեր",
      "Burger Deluxe": "Բուրգեր Դելյուքս",
      "Golden Burger": "Ոսկե Բուրգեր",
      // Desserts
      "Chocolate Cake": "Շոկոլադե Տորթ",
      "Cheesecake": "Չիզքեյք",
      "Brownie": "Բրաունի",
      "Chocolate Lava Cake": "Շոկոլադե Լավա",
      "Chocolate Brownie": "Շոկոլադե Բրաունի",
      "Nutella Pancakes": "Նուտելլայով Փանկեյքներ",
      "Mango Dessert": "Մանգոյի Աղանդեր",
      "Banana Split": "Բանանա Սփլիթ",
      "Strawberry Cheesecake": "Ելակի Չիզքեյք",
      // Drinks
      "Orange Juice": "Նարնջի Հյութ",
      "Virgin Mojito": "Վիրջին Մոխիտո",
      "Pineapple Juice": "Անանասի Հյութ",
      "Tropical Mix": "Տրոպիկական Միքս",
      "Tea": "Թեյ",
      "Soda Water": "Գազավորված Ջուր",
      "Orange Cocktail": "Նարնջի Կոկտեյլ",
      "Blue Lagoon": "Բլյու Լագուն",
      "Strawberry Mojito": "Ելակի Մոխիտո",
      // Descriptions
      "espresso_desc": "Թարմացնող և թունդ սուրճ:",
      "americano_desc": "Էսպրեսո՝ տաք ջրով:",
      "cappuccino_desc": "Էսպրեսո, տաք կաթ և փրփուր:",
      "latte_desc": "Կաթնային սուրճ՝ նուրբ համով:",
      "macchiato_desc": "Էսպրեսո՝ մի կաթիլ կաթով:",
      "flat_white_desc": "Թունդ սուրճ՝ շատ կաթով:",
      "mocha_desc": "Սուրճ՝ շոկոլադի համով:",
      "caffe_breve_desc": "Սուրճ՝ սերուցքով:",
      "iced_coffee_desc": "Սառը և թարմացնող սուրճ:",
      "default_desc": "Համեղ և թարմ պատրաստված:"
    }
  },
  en: {
    translation: {
      "Coffee": "Coffee",
      "Breakfast": "Breakfast",
      "Burgers": "Burgers",
      "Desserts": "Desserts",
      "Drinks": "Drinks",
      "our_menu": "Our Menu",
      "amd": "AMD",
      "coffee_cafe": "COFFEE CAFE",
      // Items (Names are the same for EN)
      // Descriptions
      "espresso_desc": "Strong and refreshing coffee.",
      "americano_desc": "Espresso with hot water.",
      "cappuccino_desc": "Espresso with steamed milk and foam.",
      "latte_desc": "Creamy coffee with a smooth taste.",
      "macchiato_desc": "Espresso with a dash of milk.",
      "flat_white_desc": "Strong coffee with velvet milk.",
      "mocha_desc": "Coffee with chocolate flavor.",
      "caffe_breve_desc": "Coffee made with half-and-half.",
      "iced_coffee_desc": "Cold and refreshing coffee.",
      "default_desc": "Delicious and freshly prepared."
    }
  },
  ru: {
    translation: {
      "Coffee": "Кофе",
      "Breakfast": "Завтрак",
      "Burgers": "Бургеры",
      "Desserts": "Десерты",
      "Drinks": "Напитки",
      "our_menu": "Наше меню",
      "amd": "драм",
      "coffee_cafe": "КОФЕЙНЯ",
      // Coffee
      "Espresso": "Эспрессо",
      "Americano": "Американо",
      "Cappuccino": "Капучино",
      "Latte": "Латте",
      "Macchiato": "Макиато",
      "Flat White": "Флэт Уайт",
      "Mocha": "Мокко",
      "Caffè Breve": "Кофе Бреве",
      "Iced Coffee": "Аյս-кофе",
      // Breakfast
      "Omelette": "Омлет",
      "Scrambled Eggs": "Яичница",
      "Pancakes": "Блинчики",
      "Croissant": "Круассан",
      "Chia Pudding": "Чиа пудинг",
      "Toast with Butter": "Тост с маслом",
      "Strawberry Yogurt Bowl": "Йогурт с клубникой",
      "French Toast": "Французский тост",
      "Waffles": "Вафли",
      // Burgers
      "Classic Burger": "Классический бургер",
      "Cheeseburger": "Чизбургер",
      "Double Cheeseburger": "Двойной чизбургер",
      "Chicken Burger": "Куриный бургер",
      "Big Boss Burger": "Биг Босс бургер",
      "King Burger": "Кинг бургер",
      "Mega Burger": "Мега бургер",
      "Burger Deluxe": "Бургер Делюкс",
      "Golden Burger": "Золотой бургер",
      // Desserts
      "Chocolate Cake": "Шоколадный торт",
      "Cheesecake": "Чизкейк",
      "Brownie": "Брауни",
      "Chocolate Lava Cake": "Шоколадная лава",
      "Chocolate Brownie": "Шоколадный брауни",
      "Nutella Pancakes": "Блинчики с Нутеллой",
      "Mango Dessert": "Манговый десерт",
      "Banana Split": "Банановый сплит",
      "Strawberry Cheesecake": "Клубничный чизкейк",
      // Drinks
      "Orange Juice": "Апельсиновый сок",
      "Virgin Mojito": "Безалкогольный Мохито",
      "Pineapple Juice": "Ананасовый сок",
      "Tropical Mix": "Тропический микс",
      "Tea": "Чай",
      "Soda Water": "Газированная вода",
      "Orange Cocktail": "Апельсиновый коктейль",
      "Blue Lagoon": "Голубая лагуна",
      "Strawberry Mojito": "Клубничный Мохито",
      // Descriptions
      "espresso_desc": "Крепкий и освежающий кофе.",
      "americano_desc": "Эспрессо с горячей водой.",
      "cappuccino_desc": "Эспрессо с горячим молоком и пенкой.",
      "latte_desc": "Молочный кофе с нежным вкусом.",
      "macchiato_desc": "Эспрессо с каплей молока.",
      "flat_white_desc": "Крепкий кофе с большим количеством молока.",
      "mocha_desc": "Кофе с шоколадным вкусом.",
      "caffe_breve_desc": "Кофе со сливками.",
      "iced_coffee_desc": "Холодный и освежающий кофе.",
      "default_desc": "Вкусно и свежеприготовлено."
    }
  }
};

// Map all description keys to default if not specific
const categories = ['omelette', 'scrambled_eggs', 'pancakes', 'croissant', 'chia_pudding', 'toast_butter', 'yogurt_bowl', 'french_toast', 'waffles', 'classic_burger', 'cheeseburger', 'double_cheeseburger', 'chicken_burger', 'big_boss_burger', 'king_burger', 'mega_burger', 'burger_deluxe', 'golden_burger', 'chocolate_cake', 'cheesecake', 'brownie', 'lava_cake', 'chocolate_brownie', 'nutella_pancakes', 'mango_dessert', 'banana_split', 'strawberry_cheesecake', 'orange_juice', 'virgin_mojito', 'pineapple_juice', 'tropical_mix', 'tea', 'soda_water', 'orange_cocktail', 'blue_lagoon', 'strawberry_mojito'];

categories.forEach(cat => {
  const key = `${cat}_desc`;
  if (!resources.hy.translation[key]) resources.hy.translation[key] = resources.hy.translation.default_desc;
  if (!resources.en.translation[key]) resources.en.translation[key] = resources.en.translation.default_desc;
  if (!resources.ru.translation[key]) resources.ru.translation[key] = resources.ru.translation.default_desc;
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
