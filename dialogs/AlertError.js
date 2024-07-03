import Swal from "sweetalert2";

export const AlertError = (title = 'เกิดข้อผิดพลาด',text= '') => {
    Swal.fire({
        icon : 'error',
        title,
        text,
    })
}