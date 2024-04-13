export class Cookies {
  static get(name: string) {
    const cookies: Record<string, string> = {};
    const decoded = decodeURIComponent(document.cookie);
    const cookiesArray = decoded.split(";");
    cookiesArray?.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      cookies[key] = value;
    });

    return cookies[name];
  }
}
