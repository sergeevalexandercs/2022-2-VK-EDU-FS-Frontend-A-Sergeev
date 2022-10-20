/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
    // declare a list for binary prefixes
    let byteUnits = [' B', ' KB', ' MB', ' GB', ' TB'];
    // error handling
    try {
        if(typeof(bytes) !== 'number') {
            throw TypeError('Variable bytes should be a number')
        }
        if(bytes < 0 || isNaN(bytes)) throw TypeError('Variable bytes should be positive number')
        let u = 0;
        while (Math.round(bytes) >= 1024 && u < byteUnits.length - 1) {
            bytes /= 1024;
            ++u;
        }
        return bytes.toFixed(bytes - Math.trunc(bytes) > 0 ? 2 : 0) + byteUnits[u];
    } catch(e) {
        console.log(e.message)
        return false
    }
}
