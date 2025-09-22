import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LeadInput {
  name: string;
  phone: string;
  message?: string;
  pkg?: string | null;
}
export interface Lead extends LeadInput {
  id: string;
  createdAt: string;
}

interface LeadsState {
  items: Lead[];
  preselectedPackage: string | null;
  sending: boolean;
}

const initialState: LeadsState = {
  items: [],
  preselectedPackage: null,
  sending: false,
};

// мімік сервера: «відправляємо» лід і вертаємо payload з id
export const submitLead = createAsyncThunk(
  "leads/submit",
  async (payload: LeadInput) => {
    await new Promise((r) => setTimeout(r, 900));
    const id = crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
    return {
      ...payload,
      id,
      createdAt: new Date().toISOString(),
    } as Lead;
  }
);

const leadsSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {
    setPreselectedPackage: (s, a: PayloadAction<string | null>) => {
      s.preselectedPackage = a.payload;
    },
  },
  extraReducers: (b) => {
    b.addCase(submitLead.pending, (s) => { s.sending = true; });
    b.addCase(submitLead.fulfilled, (s, a) => {
      s.items.unshift(a.payload);
      s.sending = false;
    });
    b.addCase(submitLead.rejected, (s) => { s.sending = false; });
  },
});

export const { setPreselectedPackage } = leadsSlice.actions;
export default leadsSlice.reducer;
