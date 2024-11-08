import { create } from "zustand";

const initialState = {
  vouchers: [],
};

const useVoucherStore = create((set) => ({
  ...initialState,
  deleteVoucher: (id) =>
    set((oldState) => ({
      vouchers: oldState.vouchers.filter((voucher) => voucher.id !== id),
    })),
}));

export default useVoucherStore;
