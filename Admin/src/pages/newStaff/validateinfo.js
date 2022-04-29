export default function validateInfo(values) {
    let errors = {};

    if (!values.username) {
        errors.username = 'Vui lòng nhập tài khoản';
    }
    if (!values.password) {
        errors.password = 'Vui lòng nhập mật khẩu';
    } else if (values.password.length < 6) {
        errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    } else if (values.password.length > 32) {
        errors.password = 'Mật khẩu không được vượt quá 32 ký tự';
    } else if (!values.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,32}/)) {
        errors.password = 'Mật khẩu phải có ít nhất 1 ký tự hoa, 1 ký tự thường, 1 ký tự số và 1 ký tự đặc biệt';
    }
    if (!values.email) {
        errors.email = 'Vui lòng nhập email';
    } else if (!values.email.match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)) {
        errors.email = 'Email không hợp lệ';
    } else if (values.email.length > 64) {
        errors.email = 'Email không được vượt quá 64 ký tự';
    } else if (values.email.length < 6) {
        errors.email = 'Email phải có ít nhất 6 ký tự';
    } else if (values.email.match(/^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/)) {
        errors.email = 'Email không hợp lệ';
    }
    if (!values.fullname) {
        errors.fullname = 'Vui lòng nhập họ tên';
    }
    if (!values.phone) {
        errors.phone = 'Vui lòng nhập số điện thoại';
    }
    if (!values.address) {
        errors.address = 'Vui lòng nhập địa chỉ';
    }
    if (!values.birthday) {
        errors.birthday = 'Vui lòng nhập ngày sinh';
    }
    if (!values.img) {
        errors.img = 'Vui lòng chọn ảnh đại diện';
    }
    if (!values.sex) {
        errors.sex = 'Vui lòng chọn giới tính';
    }
    if (!values.identity) {
        errors.identity = 'vui lòng nhập CMND|CCCD'
    }

    return errors;
}