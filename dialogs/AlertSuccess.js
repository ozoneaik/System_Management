import Swal from "sweetalert2";

export const AlertSuccess = (title = '' ,text = '')=> {
    Swal.fire({
        icon : 'success',
        title,
        text,
    });
}