// read.js
import { collection, getDocs } from "firebase/firestore";

const dbCollection = collection (db, "tasks");
const dbSnapshot = await getDocs(dbCollection);
dbSnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    }
);

