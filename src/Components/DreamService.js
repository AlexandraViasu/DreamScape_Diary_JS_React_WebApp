const baseURL = 'http://localhost:9000/api/dreamscapeDiary/'

export const getDream = () =>{
    return fetch(baseURL)
    .then(res => res.json())
}

export const postDream = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json'}
    })
    .then(res => res.json())
}

export const deleteDream = (id) =>{
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}