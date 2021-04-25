import * as firebase from "firebase";
import "firebase/firestore";

export async function signUp(email, pass, phone, age, gender, bgroup, name) {
  await firebase.auth().createUserWithEmailAndPassword(email, pass).catch((error) => {
    throw error
  });
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();
  await db.collection("users").add({
    uid: currentUser.uid,
    email: currentUser.email,
    phone: phone,
    age: age,
    gender: gender,
    bgroup: bgroup,
    name: name,


  }).catch((error) => {
    throw error
  })
}

export async function logIn(mail, pass) {
  await firebase.auth().signInWithEmailAndPassword(mail, pass).catch(() => {
    throw ('email or password is incorrect!')
  });
}

export async function loggingOut() {
  await firebase.auth().signOut().catch(() => {

    throw ('Unknown error occurred')
  });
}

export async function getUserInfo() {
  let user = [];
  const currentUser = firebase.auth().currentUser;
  let snapshot = await firebase.firestore()
    .collection('users')
    .where('uid', '==', currentUser.uid)
    .get().catch(() => {
      throw ('user token is expired')
    });

  snapshot.forEach((doc) => {
    user.push({
      key: doc.id,
      email: doc.data().email,
      phone: doc.data().phone,
      name: doc.data().name,
      age: doc.data().age,
      gender: doc.data().gender,
      bgroup: doc.data().bgroup,
    });
  });
  return user
}

export async function updateProfileInfo(key, email, nameValue, age, gender, bgroup, phone) {
  const updateDetail = {
    email: email,
    name: nameValue,
    age: age,
    gender: gender,
    bgroup: bgroup,
    phone: phone
  };

  await firebase.firestore()
    .collection('users')
    .doc(key)
    .update(updateDetail)
    .catch(() => {
      throw ('Unknown error occurred.')
    });
}