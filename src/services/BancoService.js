import { initializeApp } from "firebase/app";
import {app} from '../services/FirebaseConnect'
import { getDocs, getFirestore, query } from "firebase/firestore";
import { collection, addDoc, doc, getDoc } from "firebase/firestore"; 
 

const db = getFirestore(app);

export function salvarDados(dados) {

    return new Promise (async(resolve, reject) => {
        try {
            const docRef = await addDoc(collection(db, "salvar"), {dados});
            resolve(docRef.id)
            
          } catch (e) {
            reject(e)
        
          }
    })

}

export function PegarDados(dados) {

        return new Promise (async(resolve, reject) => {
            try{
            const q = query(collection(db, "salvar"));
            const querySnapshot = await getDocs(q);
            let resultados = []
            querySnapshot.forEach((doc) => {
                let objeto = {
                    id: doc.id,
                    ...doc.data()
                }
            // doc.data() is never undefined for query doc snapshots
            resultados.push(objeto)
            });
            resolve(resultados)
        } catch (error) {
            reject(error)
        }
        })

}

