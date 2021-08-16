export function homePagePreloading(): Promise<any> {
  return import("./home/home.vue").catch((error) => {
    return dealOccurred(error, "Home");
  });
}

export function loginPagePreloading(): Promise<any> {
  return import("./login/login.vue").catch((error) => {
    return dealOccurred(error, "Login");
  });
}

export function framePagePreloading(): Promise<any> {
  return import("./frame/frame.vue").catch((error) => {
    return dealOccurred(error, "Frame");
  });
}

/**
 * 处理错误
 */
function dealOccurred(error: any, pageName = "") {
  location.href = (window as any).__SWNextFullPath;
}
