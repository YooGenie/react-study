import {Config} from "../../config/Config";
import {HttpUtil} from "../../config/HttpUtil";

export const getMenus = (param) => {
    const queryString = '?page=' + param.page + '&pageSize=' + param.pageSize;

    return fetch(`${Config.API_SERVER()}/menu` + queryString)
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => res.json());
};

export const createMenu = (data) => {
    return fetch(`${Config.API_SERVER()}/menu`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: HttpUtil.getHeader(),
    })
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => res.status);
};

export const updateMenu = (id, data) => {
    return fetch(`${Config.API_SERVER()}/menu/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: HttpUtil.getHeader(),
    })
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => res => res.status);
};

export const deleteMenu = (id) => {
    let apiPath = `${Config.API_SERVER()}/menu/${id}`;

    return fetch(apiPath, {
        headers: HttpUtil.getHeader(),
        method: "DELETE",
    })
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => res.json());
};

export const getDetail = (id) => {
    return fetch(`${Config.API_SERVER()}/menu/${id}`)
        .then(HttpUtil.handleHttpStatus)
        .catch(HttpUtil.handleHttpStatusError)
        .then(res => res.json()
        );
};