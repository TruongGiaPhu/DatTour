import axiosAdmin from './axiosAdmin'

const DT = {
    Get_All_DoanhThu: () => {
        const url = '/admin/statistic/api/gettongdoanhthu'
        return axiosAdmin.get(url)
    },

    Get_DoanhThu_TheoThang: (year, month) => {
        const url = `/admin/statistic/api/gettongdoanhthutheothang?year=${year}&&month=${month}`
        return axiosAdmin.get(url)
    },

    Get_DoanhThu_TheoQuocGia: (id) => {
        const url = `/admin/statistic/api/gettongdoanhthutheoquocgia?id=${id}`
        return axiosAdmin.get(url)
    },

    Get_DoanhThu_TheoNam: (year) => {
        const url = `/admin/statistic/api/gettongdoanhthutheonam?year=${year}`
        return axiosAdmin.get(url)
    },

    Get_All_KhachHang: () => {
        const url = '/admin/statistic/api/gettongkhachhang'
        return axiosAdmin.get(url)
    }
}

export default DT
