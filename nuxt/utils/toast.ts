import toastr from "toastr";

export function toast(title: any, message: any, option: any) {
    toastOptions();

    toastCall(title, message, option);
}

function toastOptions() {
    toastr.options = {
        closeButton: true,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        hideDuration: 1000,
        showDuration: 300,
        timeOut: 6000,
        extendedTimeOut: 1000,
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
}

function toastCall(
    title: string | undefined,
    message: string | JQuery<HTMLElement>,
    option: any
) {
    switch (option) {
        case "success":
            toastr.success(message, title);

            break;
        case "warning":
            toastr.warning(message, title);

            break;
        default:
            toastr.success(message, title);
    }
}
