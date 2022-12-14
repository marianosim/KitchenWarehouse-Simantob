import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCkHXkt1Np0qpMu1RPl7N072jEUc0h9IE",
  authDomain: "kitchenwarehouse-7ed28.firebaseapp.com",
  projectId: "kitchenwarehouse-7ed28",
  storageBucket: "kitchenwarehouse-7ed28.appspot.com",
  messagingSenderId: "194041223975",
  appId: "1:194041223975:web:74324e7d053c697656a702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getItems = async () => {
  try {
    const myCollection = collection(firestore, 'products');
    let snapShotDB = await getDocs(myCollection);
    let dataDocs = snapShotDB.docs.map(doc => {
      let docsFormat = {
        ...doc.data(),
        id: doc.id
      };
      return docsFormat
    });
    return dataDocs;
  } catch (error) {
    console.log(error)
  }
};

export const getSingleItem = async (idParams) => {
  try {
    const docRef = doc(firestore, 'products', idParams);
    const docSnapShot = await getDoc(docRef);
    if (docSnapShot.exists()) {
      return { ...docSnapShot.data(), id: docSnapShot.id };
    } else {
      throw new Error('Item no encontrado')
    }
  } catch (error) {
    console.error(error);
  }
};

export const getItemsByCategory = async (catParams) => {
  try {
    const myCollection = collection(firestore, 'products');
    const queryCategory = query(myCollection, where('category', '==', catParams));
    const querySnapShot = await getDocs(queryCategory);
    let dataDocs = querySnapShot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })
    return dataDocs
  } catch (error) {
    console.log(error)
  }
};

export const createBuyOrder = async (orderData) => {
  const collectionRef = collection(firestore, 'orders');
  let doc = await addDoc(collectionRef, orderData)
  return doc.id;
}

export const getBuyOrder = async (orderIdParams) => {
  try {
    const docRef = doc(firestore, 'orders', orderIdParams);
    const docSnapshot = await getDoc(docRef);
    return docSnapshot.data();
  } catch (error) {
    console.log(error)
  }
}

//Exports data from local to firebase
export const exportData = async () => {
  const data = [
    {
      id: 1,
      title: "Batidora Kitchenaid Artisan 4,8 lts Rojo",
      description: 'Batidora Kitchen Aid de acero in??xidable color rojo. Capacidad del bowl: 4,8lts. Motor de 325W de potencia y 10 velocidades. Incluye un batidor plano para mezclar unificando ingredientes, 1 batidor globo para batir incorporando aire, 1 gancho amasador y 1 tapa antisalpicaduras.',
      price: 105000,
      category: "electro",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294191/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.46.12_hqegtu.png",
      sale: false
    },
    {
      id: 2,
      title: "Bowl Kitchenaid 4,8L para batidora Artisan",
      description: 'Accesorio bowl de acero inoxidable KitchenAid 4,8L. Su composici??n lo hace durable y perfecto para todo tipo de preparaciones calientes o fr??as. Compatible con los modelos Artisan y Artisan Heavy Duty.',
      price: 50650,
      category: "accesorios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294190/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.48.20_jce73p.png",
      sale: false
    },
    {
      id: 3,
      title: "Balanza Digital Soehnle Food Control",
      description: 'Marca leifheit/Soehnle modelo food control. Color blanco. Peso del producto 853 g. Dimensiones del producto 26,6 x 21,5 x 5,3 cm. Capacidad m??xima 5 kilogramos. Capacidad m??nima de pesado 1 g. Material cristal y pl??stico. Apagado autom??tico No. Caracter??sticas especiales. Conversi??n de pesos. Control de alimentos escala de cocina digital f??cil por soehnle. C??lculo de nutrici??n para control de porciones. Cuenta con tecnolog??a t??ctil sensor patentada. Funci??n tara con suma total de memoria. Los alimentos se seleccionan a trav??s de c??digos num??ricos; 950 valores de alimentos pre-almacenados-El Food Control nos indica cu??ntas calor??as posee lo que pesamos , con un ligero toque en las teclas.',
      price: 17800,
      category: "electro",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.49.45_xwy9yh.png",
      sale: false
    },
    {
      id: 4,
      title: "Palo de amasar marmol con base de madera",
      description: 'Palo de amasar confeccionado en m??rmol y terminaciones de madera. Su peso natural hace m??s f??cil el amasado.',
      price: 6199,
      category: "utensilios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.53.39_tm4rmk.png",
      sale: false
    },
    {
      id: 5,
      title: "Tartera redonda 23cm Ocuisine",
      description: 'Vidrio de Borosilicato, resistente a temperaturas de -40??C a 300??C. Resistente a shock termicos. Material higienico resistente a rayaduras y manchas. 100% hecho en Francia. Medidas: 23 cms de diametro',
      price: 7999,
      category: "cocina",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.55.25_rdqs67.png",
      sale: false
    },
    {
      id: 6,
      title: "Whiskpro Micro Perforated Mat Medium 40x30",
      description: 'SilMat es una tela revestida de siliconas aptas para el contacto con alimentos. Se coloca en la bandeja de cocci??n con la seguridad de que los bizcochos u otros preparados dulces no se peguen.Tambi??n es apto para la congelaci??n, se puede utilizar a temperaturas de entre -40??C y +250??C. Garantizan una durabilidad de 2000 cocciones, adem??s es de muy f??cil limpieza. Medida 40x60 Cm',
      price: 2500,
      category: "accesorios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.56.44_efwloi.png",
      sale: false
    },
    {
      id: 7,
      title: "Mortero de piedra granito gris - Kitchen Supply - mediano - con protecci??n anti-deslizante",
      description: 'Mortero realizado en piedra. Ideal para moler o triturar todo tipo de alimentos y especias. Consiga una molienda ultra fina. Indispensable en toda cocina.',
      price: 3099,
      category: "utensilios",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.58.21_l1yp7x.png",
      sale: false
    },
    {
      id: 8,
      title: "Cafetera Express Saeco Lirika Black",
      description: 'Capacidad del tanque de agua: 2,5 Litros. Potencia: 1850 watts. Presi??n de la bomba: 15 bar. Capacidad de granos de caf??: 500 gr. Capacidad del recipiente para caf??: 15 tazas. Eficiencia Energ??tica: "A". Propiedades: molinillo, dispensador de caf?? ajustable, tanque de agua extra??ble, funci??n agua caliente, filtro para el agua, funci??n vapor r??pido. Sistema de limpieza incorporado: programa autom??tico de descalcificaci??n. Funci??n programable: temperatura del caf??. Funciones ecol??gicas: modo standby, funci??n ahorro energ??tico. Molinillo: molinillo de cer??mica. Pantalla digital. Dimensiones: An 215 x Alt: 381 x Prof 430 mm. Peso: 7Kg',
      price: 123900,
      category: "electro",
      image: "https://res.cloudinary.com/dzxg6dw84/image/upload/v1663294189/KitchenWarehouse/Captura_de_Pantalla_2022-09-15_a_la_s_22.59.51_blwsbj.png",
      sale: false
    },
    {
      id: 9,
      title: 'Soplete Recargable Aluminio',
      description: 'Soplete recargable de aluminio. Ideal para flambear o caramelizar. Recargable con gas butano.',
      price: 8300,
      category: 'accesorios',
      image: 'https://res.cloudinary.com/dzxg6dw84/image/upload/v1665694464/KitchenWarehouse/Captura_de_Pantalla_2022-10-13_a_la_s_17.32.36_jfzvq6.png',
      sale: false
    },
    {
      id: 10,
      title: 'Betty Crocker?? Molde Muffin 12 CUP 35X26.5X3 0.4 MM',
      description: 'Desde 1921, Betty Crocker ha estado en el coraz??n de la reposter??a casera. Mientras que los tiempos pueden haber cambiado, nuestra pasi??n por la comida permanece como el ingrediente principal en todos los productos que hacemos. MEDIDAS: 35X26.5X3 GROSOR: 0.4 MM',
      price: 3600,
      category: 'pasteleria',
      image: 'https://res.cloudinary.com/dzxg6dw84/image/upload/v1665694465/KitchenWarehouse/Captura_de_Pantalla_2022-10-13_a_la_s_17.42.15_vys4y6.png',
      sale: false
    },
    {
      id: 11,
      title: 'Fondue Antiadherente para 6 personas',
      description: 'CONTIENE: Recipiente antiadherente, Sosten Recipiente, 6 pinches, Quemador. Alto: 17 cm. Di??metro: 21 cm.',
      price: 10380,
      category: 'cocina',
      image: 'https://res.cloudinary.com/dzxg6dw84/image/upload/v1665694465/KitchenWarehouse/Captura_de_Pantalla_2022-10-13_a_la_s_17.48.26_pmuw8h.png',
      sale: false
    }
  ];
  const collectionRef = collection(firestore, 'products');

  for (let item of data) {
    delete item.id;
    const newDoc = await addDoc(collectionRef, item);
  }

}

export default firestore;