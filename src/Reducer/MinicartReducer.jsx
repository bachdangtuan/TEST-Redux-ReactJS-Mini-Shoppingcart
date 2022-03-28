const stateMinicart = {
    Minicart: []
}

export const MinicartReducer = (state = stateMinicart, action) => {
    let MinicartUpdate = [...state.Minicart]
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            console.log('test',action.index);
            //Xu ly logic them  gio hang
            console.log('action.spGioHang.id',action.spGioHang.id);
            let index = MinicartUpdate.findIndex(spGH => {
                console.log('spGH',spGH.id);
                return spGH.id === action.spGioHang.id;
            })
            if (index !== -1) {
                MinicartUpdate[index].soluong += 1;
            } else {
                MinicartUpdate.push(action.spGioHang);
            }
            state.Minicart = MinicartUpdate;
            return { ...state }
        } 
        case "XOA_GIO_HANG": {
            MinicartUpdate.splice(action.index, 1);
            state.Minicart = MinicartUpdate;
            return { ...state }

        }
        default:
        break;
    }
    return { ...state }
}

