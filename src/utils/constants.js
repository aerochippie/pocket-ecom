import { toast } from 'react-toastify';
export const urlProducts = "https://api.noroff.dev/api/v1/online-shop/"


export const notify = (message) => toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
})

