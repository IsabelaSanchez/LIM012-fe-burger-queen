import 'firebase/firestore';
import Firebase from '../firebase-config';

const db = Firebase.firestore();
const food = db.collection('food');
export const getPriceAndNameBreakfast = () => food.where('breakfast', '==', true).get().then((snapshot) => {
  const foodBreakfast = [];
  snapshot.forEach((doc) => {
    const breakfastObj = {
      price: doc.data().price,
      name: doc.data().name,
      id: doc.id,
    };
    foodBreakfast.push(breakfastObj);
  });
  return foodBreakfast;
})
  .catch((err) => {
    console.log('Error getting documents', err);
  });

export const getPriceAndNameMenu = () => food.where('menu', '==', true).get().then((snapshot) => {
  const foodMenu = [];
  snapshot.forEach((doc) => {
    const menuObj = {
      price: doc.data().price,
      name: doc.data().name,
      id: doc.id,
    };
    foodMenu.push(menuObj);
  });
  return foodMenu;
});

export const getPriceAndNameDrinks = () => food.where('drinks', '==', true).get().then((snapshot) => {
  const foodDrinks = [];
  snapshot.forEach((doc) => {
    const drinksObj = {
      price: doc.data().price,
      name: doc.data().name,
      id: doc.id,
    };
    foodDrinks.push(drinksObj);
  });
  return foodDrinks;
});

export const sendOrder = (obj) => {
  db.collection('orders').doc().set(obj);
};

export const getOrders = () => db.collection('orders').get().then((snapshot) => {
  const arrOrders = [];
  snapshot.forEach((doc) => {
    const objOrder = {
      hour: doc.data().hour,
      items: doc.data().items,
      name: doc.data().name,
      status: doc.data().status,
      id: doc.id,
    };
    arrOrders.push(objOrder);
  });
  return arrOrders;
})
  .catch((err) => console.log(err));

export const updateStatus = (id, newStatus) => {
  db.collection('orders').doc(id).update({
    status: newStatus,
  });
};
