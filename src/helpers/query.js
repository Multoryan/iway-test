// Хотел отправлять запрос как массив склееный запятыми,
// Для меня как то странно дублирущийся ключ, объекты разные ключи не поддерживают
// поэтому пришлось сформировать строку специально для массивов
export const objectToQueryParams = opt => {
    return Object.keys(opt).map(key => {
        if (Array.isArray(opt[key])) {
            return opt[key].map(val => encodeURIComponent(key) + '=' + encodeURIComponent(val)).join('&');
        } else {
            return encodeURIComponent(key) + '=' + encodeURIComponent(opt[key]);
        }
    }).join('&');
}