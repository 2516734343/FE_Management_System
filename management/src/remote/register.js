export async function register(params) {
    return await fetch("/api/system/management/register", {
        method: 'POST',
        body: JSON.stringify(params)
    }).then(resp => resp.json()).then(resp => resp.data);
}