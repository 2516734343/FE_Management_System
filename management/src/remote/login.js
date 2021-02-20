export async function login(params) {
    return await fetch("/api/system/management/login", {
        method: 'POST',
        body: JSON.stringify(params)
    }).then(resp => resp.json()).then(resp => resp.data);
}