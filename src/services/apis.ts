/*
 * @Author: yixin yixin_ecy@163.com
 * @Date: 2022-07-14 20:59:03
 * @LastEditors: yixin yixin_ecy@163.com
 * @LastEditTime: 2022-07-14 21:41:57
 * @FilePath: /VideoWebManager/src/services/apis.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 接口统一定义
 * 接口名为key, `method path`为接口值；未填写'method'时默认为'Get'
 * 支持形式如'/{id}'的path参数定义
 */
const apis: Record<string, string> = {
    /**
     * 用户相关
     */
    login: "Post /login",
    // 登录
    logout: "Post /logout",
    // 登出
    refreshToken: "Post /refresh",
    // 刷新Token

    /**
     * 内容相关
     */
    getContentList: "Get /content/list",
    // 获取内容列表
    createContent: "Post /content/create",
    // 创建内容
    updateContent: "Post /content/update",
    // 更新内容

    /**
     * 分类相关
     */
    getCategoryList: "Get /category/list",
    // 获取分类列表
    createCategory: "Post /category/create",
    // 创建分类
    updateCategory: "Post /category/update",
    // 更新分类

    /**
     * 标签相关
     */
    getLabelCategoryList: "Get /label/category/list",
    // 获取标签分类列表
    getLabelList: "Get /label/list",
    // 获取标签列表
    createLabelCategory: "Post /label/category/create",
    // 创建标签分类
    updateLabelCategory: "Post /label/category/update",
    // 更新标签分类
};

export default apis;
