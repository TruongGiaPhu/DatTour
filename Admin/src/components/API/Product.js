import axiosAdmin from './axiosAdmin'

const Product = {

    Get_All_Tour: () => {
        const url = '/admin/tour/api/get'
        return axiosAdmin.get(url)
    },

    Delete_Tour: (id) => {
        const url = `/admin/tour/api/delete/${id}`
        return axiosAdmin.delete(url)
    },

    Get_Detail_Tour: (id) => {
        const url = `/admin/tour/api/get?id=${id}`
        return axiosAdmin.get(url)
    },

    Put_Tour: (id, data) => {
        const url = `/admin/tour/api/put/${id}`
        return axiosAdmin.put(url, data)
    },

    // Get_User: (id) => {
    //     const url = `/api/User/${id}`
    //     return axiosClient.get(url)
    // },

    // Put_User: (data) => {
    //     const url = `/api/User`
    //     return axiosClient.put(url, data)
    // },

    // Get_Detail_User: (query) => {
    //     const url = `/api/User/detail/login${query}`
    //     return axiosClient.get(url)
    // },

    Post_Tour: (data) => {
        const url = '/admin/tour/api/post/'
        return axiosAdmin.post(url, data)
    }


}

export default Product