const fetchImagesSession = [
  // Nuevas imágenes con category: "babySixMoths"
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1695879245513-44030c0c949a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "babySixMoths",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "babySixMoths",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    category: "babySixMoths",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1453342664588-b702c83fc822?q=80&w=1718&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "babySixMoths",
  },
  {
    id: 5,
    img: "https://plus.unsplash.com/premium_photo-1665296635115-abf751f95e55?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "babySixMoths",
  },
  {
    id: 6,
    img: "https://images.unsplash.com/photo-1586537333626-238ebc85e19f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "babySixMoths",
  },
  // Nuevas imágenes con category: "communion"
  {
    id: 7,
    img: "https://images.unsplash.com/photo-1478906401794-436b072d8452?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "communion",
  },
  {
    id: 8,
    img: "https://plus.unsplash.com/premium_photo-1681828890437-004a8b5eec7e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "communion",
  },
  {
    id: 9,
    img: "https://images.unsplash.com/photo-1505377059067-e285a7bac49b?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "communion",
  },
  {
    id: 10,
    img: "https://images.unsplash.com/photo-1515563562861-4d2514edb3e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "communion",
  },
  {
    id: 11,
    img: "https://images.unsplash.com/photo-1516207336710-1631c23cdc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
    category: "communion",
  },
  {
    id: 12,
    img: "https://images.unsplash.com/photo-1509388677691-f96d7931d63b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "communion",
  },

  // Nuevas imágenes con category: "family"
  {
    id: 13,
    img: "https://plus.unsplash.com/premium_photo-1661475948697-d810b6d36888?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFtaWx5fGVufDB8MHwwfHx8MA%3D%3D",
    category: "family",
  },
  {
    id: 14,
    img: "https://plus.unsplash.com/premium_photo-1661906824543-cd944c5f628c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhbWlseXxlbnwwfDB8MHx8fDA%3D",
    category: "family",
  },
  {
    id: 15,
    img: "https://plus.unsplash.com/premium_photo-1661281339432-2521e2775419?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "family",
  },
  {
    id: 16,
    img: "https://plus.unsplash.com/premium_photo-1661281211518-7bc99840fe64?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "family",
  },
  {
    id: 17,
    img: "https://plus.unsplash.com/premium_photo-1680720885676-81e3bdee4237?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "family",
  },
  {
    id: 18,
    img: "https://plus.unsplash.com/premium_photo-1681997327084-3e4c4b737269?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "family",
  },
  // Nuevas imágenes con category: "maternity"

  {
    id: 19,
    img: "https://images.unsplash.com/photo-1493101670003-a9c7db5858b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWF0ZXJuaXR5fGVufDB8MHwwfHx8MA%3D%3D",
    category: "maternity",
  },
  {
    id: 20,
    img: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "maternity",
  },
  {
    id: 21,
    img: "https://plus.unsplash.com/premium_photo-1664053011441-e61b42285903?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "maternity",
  },
  {
    id: 22,
    img: "https://images.unsplash.com/photo-1555961064-4bc7ec634bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D",
    category: "maternity",
  },
  {
    id: 23,
    img: "https://images.unsplash.com/photo-1664994524000-f753aaa0a594?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hdGVybml0eXxlbnwwfDB8MHx8fDA%3D",
    category: "maternity",
  },
  {
    id: 24,
    img: "https://images.unsplash.com/photo-1566780760836-c405d35230b1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "maternity",
  },

  // Nuevas imágenes con category: "newBorn"

  {
    id: 25,
    img: "https://images.unsplash.com/photo-1542644384-49f9febd8443?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "newBorn",
  },
  {
    id: 26,
    img: "https://plus.unsplash.com/premium_photo-1676400361902-3968d3bc4bd4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "newBorn",
  },
  {
    id: 27,
    img: "https://images.unsplash.com/photo-1630650916169-87efcfd2cd3a?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "newBorn",
  },
  {
    id: 28,
    img: "https://images.unsplash.com/photo-1611883916975-459a79cd0ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    category: "newBorn",
  },
  {
    id: 29,
    img: "https://images.unsplash.com/photo-1605988178022-c85ec62c7267?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "newBorn",
  },
  {
    id: 30,
    img: "https://images.unsplash.com/flagged/photo-1551367361-c4fde64cd97d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "newBorn",
  },
  // Nuevas imágenes con category: "smashCake"

  {
    id: 31,
    img: "https://images.unsplash.com/photo-1504437484202-613bb51ce359?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 32,
    img: "https://images.unsplash.com/photo-1507946116609-bfed19728fdf?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 33,
    img: "https://images.unsplash.com/photo-1503463168353-9d883c7f5255?q=80&w=1748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 34,
    img: "https://images.unsplash.com/photo-1604824621328-5c03580f92bc?q=80&w=1708&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 35,
    img: "https://images.unsplash.com/photo-1595678399575-3b3cfe7c8864?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 36,
    img: "https://plus.unsplash.com/premium_photo-1676501714610-e2ac8cdca720?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "smashCake",
  },
  {
    id: 37,
    img: "https://images.unsplash.com/photo-1519379169146-d4b170447caa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    category: "wedding",
  },
  {
    id: 38,
    img: "https://plus.unsplash.com/premium_photo-1664530452597-fc48cc4a4e45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    category: "wedding",
  },
  {
    id: 39,
    img: "https://plus.unsplash.com/premium_photo-1681841585407-8cc4d427783c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fHdlZGRpbmd8ZW58MHwwfDB8fHww",
    category: "wedding",
  },
  {
    id: 40,
    img: "https://images.unsplash.com/photo-1505427438062-ad01a5cad565?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wedding",
  },
  {
    id: 41,
    img: "https://images.unsplash.com/photo-1505428215601-90f0007b9e83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wedding",
  },
  {
    id: 42,
    img: "https://plus.unsplash.com/premium_photo-1661326211451-83c3cefe9402?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "wedding",
  },
];

module.exports = { fetchImagesSession };
