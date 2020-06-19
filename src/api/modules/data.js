import axios from '../base'

function getData () {
  return axios({
    url: `/comment/`,
    method: 'get',
  })
}


export {
  getData
}
