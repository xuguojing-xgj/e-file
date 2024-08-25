import Cookies from "js-cookie";
import { storageLocal, isString, isIncludeAllChildren } from "@pureadmin/utils";

/** 格式化token（jwt格式） */
export const formatToken = (token: string): string => {
    return "Bearer " + token;
};

export interface DataInfo<T> {
    /** token */
    accessToken: string;
    /** `accessToken`的过期时间（时间戳） */
    expires: T;
    /** 用于调用刷新accessToken的接口时所需的token */
    refreshToken: string;
    /** 头像 */
    avatar?: string;
    /** 用户名 */
    username?: string;
    /** 昵称 */
    nickname?: string;
    /** 当前登录用户的角色 */
    roles?: Array<string>;
    /** 当前登录用户的按钮级别权限 */
    permissions?: Array<string>;
}

export const userKey = "user-info";
export const TokenKey = "authorized-token";

/**
 * 通过`multiple-tabs`是否在`cookie`中，判断用户是否已经登录系统，
 * 从而支持多标签页打开已经登录的系统后无需再登录。
 * 浏览器完全关闭后`multiple-tabs`将自动从`cookie`中销毁，
 * 再次打开浏览器需要重新登录系统
 * */
export const multipleTabsKey = "multiple-tabs";

/** 获取`token` */
export function getToken(): DataInfo<number> {
    // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
    return Cookies.get(TokenKey)
        ? JSON.parse(Cookies.get(TokenKey))
        : storageLocal().getItem(userKey);
}