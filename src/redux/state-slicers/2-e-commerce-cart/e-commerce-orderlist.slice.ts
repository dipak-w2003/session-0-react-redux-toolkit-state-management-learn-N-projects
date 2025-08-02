import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IProducts } from "./e-commerce-cart.type";



export interface IOrderProduct {

  // productInfo: IProducts,
  productInfo: {},
  ProductReceiverInfo?: {},
  productOwnerInfo?: {},
  productDeliverInfo?: {}

}
const initialState: IOrderProduct = {
  productInfo: {},
  ProductReceiverInfo: {},
  productDeliverInfo: {},
  productOwnerInfo: {}

}
const orderListSlice = createSlice({
  name: "orderList",
  initialState: initialState,
  reducers: {

    addOrder: (state){ },
    addOrderReceiverInfo: (state, action: PayloadAction<{}>){ },
    addProductOwnerInfo(state, action: PayloadAction<{}>) { },
    addProductOwnerInfo(state, action: PayloadAction<{}>),







  }



})


export default orderListSlice
