const baseUrl = 'http://localhost:3000';
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjAxR0tUSk0xN1NDQkZRVEhSRUZXQlE4MDZGIiwiaWF0IjoxNjcwNTYwNDg1LCJleHAiOjIyNzA1NjA0ODV9.y3Fxp_sDTleeG6OnY-S0ke1G4W5yIxMVI8XWVL4PC8c";

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