import axiosAdmin from './axiosAdmin'

const Ticket = {

    Get_All_Ve: () => {
        const url = '/admin/ve/api/get'
        return axiosAdmin.get(url)
    },

    Post_Ve: (data) => {
        const url = '/admin/ve/api/post'
        return axiosAdmin.post(url, data)
    }
    // Get_KhachHang: (id) => {
    //     const url = `/admin/khach_hang/api/get/?id=${id}`
    //     return axiosAdmin.get(url)
    // },
    // Delete_NhanVien: (id) => {
    //     const url = `/admin/nhan_vien/api/delete/${id}`
    //     return axiosClient.get(url)
    // },

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

    // Post_Tour: (data) => {
    //     const url = '/api/post/'
    //     return axiosAdmin.post(url, data)
    // }

}

export default Ticket