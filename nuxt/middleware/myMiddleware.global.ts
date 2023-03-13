export default defineNuxtRouteMiddleware((to, from) => {
    // console.log(to);
    // console.log(from);

    const myArray: string[] = ["/Login", "/Calendar", "/Register"];

    if (myArray.includes(to.fullPath)) {
        return navigateTo("/PageInProgress");
    }
});
