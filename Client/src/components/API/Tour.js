import axiosClient from './axiosClient'

const Product = {

    Get_All_Tour: () => {
        const url = '/client/tour/getTour'
        return axiosClient.get(url)
    },

    Get_Tour_Id: (id) => {
        const url = `/client/tour/getTourId/${id}`
        return axiosClient.get(url)
    },

    Get_All_Tour_Country: (quocgia_id) => {
        const url = `/client/tour/getTourCountry/${quocgia_id}`
        return axiosClient.get(url)
    },

    Get_Country: () => {
        const url = 'client/quocgia/getCountry'
        return axiosClient.get(url)
    },

}

export default Product