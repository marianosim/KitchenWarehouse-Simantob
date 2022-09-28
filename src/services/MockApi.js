const data = [
    {
        id: 1,
        title: "Batidora Kitchenaid Artisan 4,8 lts Rojo",
        description: 'Batidora Kitchen Aid de acero inóxidable color rojo. Capacidad del bowl: 4,8lts. Motor de 325W de potencia y 10 velocidades. Incluye un batidor plano para mezclar unificando ingredientes, 1 batidor globo para batir incorporando aire, 1 gancho amasador y 1 tapa antisalpicaduras.',
        price: "$67216.89",
        category: "electro",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294191/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.46.12_hqegtu.png"
    },
    {
        id: 2,
        title: "Bowl Kitchenaid 4,8L para batidora Artisan",
        description: 'Accesorio bowl de acero inoxidable KitchenAid 4,8L. Su composición lo hace durable y perfecto para todo tipo de preparaciones calientes o frías. Compatible con los modelos Artisan y Artisan Heavy Duty.',
        price: "$50640.40",
        category: "accesorios",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294190/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.48.20_jce73p.png"
    },
    {
        id: 3,
        title: "Balanza Digital Soehnle Food Control",
        description: 'Marca leifheit/Soehnle modelo food control. Color blanco. Peso del producto 853 g. Dimensiones del producto 26,6 x 21,5 x 5,3 cm. Capacidad máxima 5 kilogramos. Capacidad mínima de pesado 1 g. Material cristal y plástico. Apagado automático No. Características especiales. Conversión de pesos. Control de alimentos escala de cocina digital fácil por soehnle. Cálculo de nutrición para control de porciones. Cuenta con tecnología táctil sensor patentada. Función tara con suma total de memoria. Los alimentos se seleccionan a través de códigos numéricos; 950 valores de alimentos pre-almacenados-El Food Control nos indica cuántas calorías posee lo que pesamos , con un ligero toque en las teclas.',
        price: "$50560.74",
        category: "electro",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.49.45_xwy9yh.png"
    },
    {
        id: 4,
        title: "Palo de amasar marmol con base de madera",
        description: null,
        price: "$66952.57",
        category: "utensilios",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.53.39_tm4rmk.png"
    },
    {
        id: 5,
        title: "Tartera redonda 23cm Ocuisine",
        description: 'Vidrio de Borosilicato, resistente a temperaturas de -40°C a 300°C. Resistente a shock termicos. Material higienico resistente a rayaduras y manchas. 100% hecho en Francia. Medidas: 23 cms de diametro',
        price: "$54679.49",
        category: "cocina",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.55.25_rdqs67.png"
    },
    {
        id: 6,
        title: "Whiskpro Micro Perforated Mat Medium 40x30",
        description: 'SilMat es una tela revestida de siliconas aptas para el contacto con alimentos. Se coloca en la bandeja de cocción con la seguridad de que los bizcochos u otros preparados dulces no se peguen.También es apto para la congelación, se puede utilizar a temperaturas de entre -40ºC y +250ºC. Garantizan una durabilidad de 2000 cocciones, además es de muy fácil limpieza. Medida 40x60 Cm',
        price: "$21593.68",
        category: "accesorios",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.56.44_efwloi.png"
    },
    {
        id: 7,
        title: "Mortero de piedra",
        description: null,
        price: "$11641.72",
        category: "utensilios",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.58.21_l1yp7x.png"
    },
    {
        id: 8,
        title: "Cafetera Express Saeco Lirika Black",
        description: 'Capacidad del tanque de agua: 2,5 Litros. Potencia: 1850 watts. Presión de la bomba: 15 bar. Capacidad de granos de café: 500 gr. Capacidad del recipiente para café: 15 tazas. Eficiencia Energética: "A". Propiedades: molinillo, dispensador de café ajustable, tanque de agua extraíble, función agua caliente, filtro para el agua, función vapor rápido. Sistema de limpieza incorporado: programa automático de descalcificación. Función programable: temperatura del café. Funciones ecológicas: modo standby, función ahorro energético. Molinillo: molinillo de cerámica. Pantalla digital. Dimensiones: An 215 x Alt: 381 x Prof 430 mm. Peso: 7Kg',
        price: "$16682.45",
        category: "electro",
        image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.59.51_blwsbj.png"
    }
];

export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    });
};

export const getSingleItem = (idItem) => {
    return new Promise((resolve, reject) => {
        let findItem = data.find(item => item.id === parseInt(idItem));
        setTimeout(() => {
            findItem ? resolve(findItem) : reject(new Error('Item no encontrado'));
        }, 2000);
    }
    )
};

export const getItemsByCategory = (cat) => {
    return new Promise((resolve, reject) => {
        let findItem = data.filter(item => item.category === cat);
        setTimeout(() => {
            findItem ? resolve(findItem) : reject(new Error('Item no encontrado'));
        }, 2000);
    }
    )
};

