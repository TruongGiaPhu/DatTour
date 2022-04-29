export default function validateInfo(values) {
    let errors = {};

    if (!values.username) {
        errors.username = 'Vui lòng nhập tài khoản';
    }
    if (!values.password) {
        errors.password = 'Vui lòng nhập mật khẩu';
    }

    return errors;
}