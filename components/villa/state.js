import create from 'zustand'

const useStore = create((set) => ({
id:'',
name:'',
price:0,
show:'block',
call:false,
errorText:'',
setId: (i) => set(state => ({ id:i })),
setName: (n) => set(state => ({ name:n })),
setPrice: (p) => set(state => ({ price:p })),
setShow: (s) => set(state => ({ show:s })),
setCall: (c) => set(state => ({ call:c })),
setErrorText: (q) => set(state => ({ errorText:q })),
}));

export   {useStore};