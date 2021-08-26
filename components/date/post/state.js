import create from 'zustand'

const useStore = create((set) => ({
id:'',
date:'',
call:false,
show:'block',
errorText:'',
callDates:false,
disabled:[],
disabledDays:[],
setId: (i) => set(state => ({ id:i })),
setDate: (n) => set(state => ({ date:n })),
setCall: (c) => set(state => ({ call:c })),
setErrorText: (q) => set(state => ({ errorText:q })),
setShow: (s) => set(state => ({ show:s })),
setCallDates: (s) => set(state => ({ callDates:s })),
setDisabled: (s) => set(state => ({ disabled:s })),
setDisabledDays: (s) => set(state => ({ disabledDays:s })),
}));

export   {useStore};