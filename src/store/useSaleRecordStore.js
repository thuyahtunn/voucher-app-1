import { create } from "zustand";

const initialState = {
  records: [],
};

const useSaleRecordStore = create((set) => ({
  ...initialState,
  addRecord: (newRecord) =>
    set((oldState) => ({ records: [...oldState.records, newRecord] })),
  deleteRecord: (id) =>
    set((oldState) => ({
      records: oldState.records.filter((record) => record.id !== id),
    })),
  updateRecord: (id, q) =>
    set((oldState) => ({
      records: oldState.records.map((record) => {
        if (record.id === id) {
          const newQuantity = parseInt(record.quantity) + parseInt(q);
          const newCost = record.price * newQuantity;
          return { ...record, quantity: newQuantity, cost: newCost };
        } else {
          return record;
        }
      }),
    })),
  resetRecord: () => set({ records: [] }),
}));
export default useSaleRecordStore;
