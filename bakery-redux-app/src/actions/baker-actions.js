export const GET_BAKERS = 'GET_BAKERS'

export const getBakers = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_BAKERS,
                payload: data
            })
        })
    }
}