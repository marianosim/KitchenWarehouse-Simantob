const data = [
    {
        id:1,
        title:"Batidora Kitchenaid Artisan 4,8 lts Rojo",
        description:null,
        price:"$67216.89",
        category:"Jewelry",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294191/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.46.12_hqegtu.png"
    },
    {
        id:2,
        title:"Bowl Kitchenaid 4,8L para batidora Artisan",
        description:null,
        price:"$50640.40",
        category:"Jewelry",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294190/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.48.20_jce73p.png"
    },
    {
        id:3,
        title:"Balanza Soehnle Food Control",
        description:null,
        price:"$50560.74",category:"Industrial",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.49.45_xwy9yh.png"
    },
    {
        id:4,
        title:"Palo de amasar marmol con base de madera",
        description:null,
        price:"$66952.57",
        category:"Movies",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.53.39_tm4rmk.png"
    },
    {
        id:5,
        title:"Tartera redonda 23cm Ocuisine",
        description:null,
        price:"$54679.49",
        category:"Home",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.55.25_rdqs67.png"
    },
    {
        id:6,
        title:"Whiskpro Micro Perforated Mat Medium 40x30",
        description:null,
        price:"$21593.68",
        category:"Automotive",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.56.44_efwloi.png"
    },
    {
        id:7,
        title:"Mortero de piedra",
        description:null,
        price:"$11641.72",
        category:"Shoes",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.58.21_l1yp7x.png"
    },
    {
        id:8,
        title:"Cafetera Express Saeco Lirika Black",
        description:null,
        price:"$16682.45",
        category:"Music",
        image:"https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.59.51_blwsbj.png"
    }
];

export default function getItems() {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
    }, 2000);
  });
}

