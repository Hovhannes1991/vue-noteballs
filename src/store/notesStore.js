// stores/counter.js
import { defineStore } from "pinia";

export const useNotesStore = defineStore("notes", {
  state: () => {
    return {
      notes: [
        {
          id: 1,
          content: "Ipsum has been the industry's standard dummy",
        },
        {
          id: 2,
          content: "Lorem Lorem Ipsum has been the industry's standard dummy",
        },
        {
          id: 3,
          content:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        },
      ],
    };
  },

  getters: {
    allNotes(state) {
      return state.notes.length;
    },

    allCharacters(state) {
      return state.notes.reduce((acc, current) => {
        return acc + current.content.length;
      }, 0);
    },
  },

  actions: {
    addNote(note) {
      this.notes.push(note);
    },
    updateNote(id, newContent) {
      let note = this.notes.find((note) => note.id === id);
      note.content = newContent;
    },
    deleteNote(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },

    getNoteCurrentValue(id) {
      const note = this.notes.find((note) => note.id === id);
      return note.content;
    },
  },
});
