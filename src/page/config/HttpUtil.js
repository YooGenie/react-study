import HttpStatusError from './HttpStatusError';

export class HttpUtil {

    static getHeader = () => {
        return {
            'Content-Type': 'application/json'
        };
    };

    static handleHttpStatus = (response) => {
        if (response.ok) {
            return response;
        } else {
            throw new HttpStatusError(response.statusMessage, response);
        }
    };

    static handleHttpStatusError = (error) => {
        if (error.name === "HttpStatusError") {
            if (error.status === 401) {
                alert("사용 권한이 없습니다. 다시 로그인해 주세요.");
                document.location.href = "";
            } else {
                throw error;
            }
        } else {
            throw error;
        }
    };

};
