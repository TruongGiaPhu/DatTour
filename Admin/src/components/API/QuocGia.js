import axiosAdmin from './axiosAdmin'

const QG = {

    Get_All_QuocGia: () => {
        const url = '/admin/quocgia/api/get'
        return axiosAdmin.get(url)
    },

    Get_QuocGia: (id) => {
        const url = `/admin/quocgia/api/get/?id=${id}`
        return axiosAdmin.get(url)
    },

    Post_QuocGia: (data) => {
        const url = '/admin/quocgia/api/post'
        return axiosAdmin.post(url, data)
    },

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

export default QG