const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0tOSFlKQkE5WTAxNFpDNEFXMVRUVFdDIiwiaWF0IjoxNjcwMzkzMzEwLCJleHAiOjIyNzAzOTMzMTB9.h_hFL_7DnLpury3UueCBEbUB_8z68gZ8M4C45Q0Xq8Y";

export class HttpClient {
    async get<T>(endPoint = "products") {
        const response = await fetch(`${baseUrl}/${endPoint}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const data: T = await response.json();

        return data;
    }
}