import moment from "moment";

/**
 * 时间处理相工具函数
 * @author xinxinzi
 */

/**
 * 时间戳转化为时间字符串
 * @param {number} timestamp - 10位或13位时间戳
 * @returns {string} 日期的字符串表示 "YYYY-MM-DD HH:mm:ss"
 */
export function timestampToTimeString(timestamp: number | undefined | null): string {
    if (!timestamp || isNaN(timestamp)) {
        return " ";
    }
    if (timestamp.toString().length === 10) {
        return moment(timestamp * 1000).format("YYYY-MM-DD HH:mm:ss");
    }
    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
}