import axiosAdmin from './axiosAdmin'

const Staff = {

    Get_All_NhanVien: () => {
        const url = '/admin/nhan_vien/api/get'
        return axiosAdmin.get(url)
    },
    Delete_NhanVien: (id) => {
        const url = `/admin/nhan_vien/api/delete/${id}`
        return axiosAdmin.delete(url)
    },

    Get_NhanVien: (id) => {
        const url = `/admin/nhan_vien/api/get?id=${id}`
        return axiosAdmin.get(url)
    },

    Put_NhanVien: (id, data) => {
        const url = `/admin/nhan_vien/api/put/${id}`
        return axiosAdmin.put(url, data)
    },

    Post_NhanVien: (data) => {
        const url = '/admin/nhan_vien/api/post/'
        return axiosAdmin.post(url, data)
    },

    Post_Login: (data) => {
        const url = '/admin/nhan_vien/api/login'
        return axiosAdmin.post(url, data)
    },

    Put_Change_Password: (id, data) => {
        const url = `/admin/nhan_vien/api/change_password/${id}`
        return axiosAdmin.put(url, data)
    }
}

export default Staff