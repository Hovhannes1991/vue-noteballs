import {
  collection,
  doc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../js/firebase";
import { defineStore } from "pinia";

const notesCollectionref = collection(db, "notes");

export const useNotesStore = defineStore("notes", {
  state: () => {
    return {
      dataIsFetched: false,
      notes: [],
    };
  },

  getters: {
    allNotes(state) {
      return state.notes?.length;
    },

    allCharacters(state) {
      return state.notes.reduce((acc, current) => {
        return acc + current.content.length;
      }, 0);
    },
  },

  actions: {
    async getNotes() {
      if (this.dataIsFetched) return;
      // const querySnapshot = await getDocs(collection(db, "notes"));
      // querySnapshot.forEach((doc) => {
      //   const note = {
      //     id: doc.id,
      //     content: doc.data().content,
      //   };
      //   this.notes.push(note);
      // });
      // this.dataIsFetched = true;

      // const q = query(collection(db, "notes"), where("state", "==", "CA"));
      onSnapshot(notesCollectionref, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          data.push(note);
          this.dataIsFetched = true;
        });
        this.notes = data;
      });
    },

    async addNote({ id, content }) {
      // this.notes.push(note);
      await addDoc(notesCollectionref, { id, content, date: Date.now() });
    },

    async updateNote(id, newContent) {
      // let note = this.notes.find((note) => note.id === id);
      // note.content = newContent;
      await updateDoc(doc(notesCollectionref, id), {
        content: newContent,
        date: Date.now(),
      });
    },

    async deleteNote(id) {
      // this.notes = this.notes.filter((note) => note.id !== id);
      await deleteDoc(doc(notesCollectionref, id));
    },

    async getNoteCurrentValue(id) {
      if (this.dataIsFetched) {
        return this.notes.find((n) => n.id === id);
      } else {
        const q = query(notesCollectionref, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        const current = querySnapshot.docs[0];
        const note = current.data();
        return note;
      }
    },
  },
});
