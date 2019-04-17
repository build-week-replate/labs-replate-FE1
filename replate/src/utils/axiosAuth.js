import axios from 'axios'

export default Auth = () => {
    const token = localStorage.getItem('replateToken')

    return axios.create({
        headers: {
            'Content-type': 'application/json',
            Authorization: `${token}`
        }
    })
}