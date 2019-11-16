import config from '../config';

const FolderApiService = {
    getFolders() {
        return fetch(`${config.API_ENDPOINT}/folders`, {
          headers: {
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
      getFolder(folderId) {
        return fetch(`${config.API_ENDPOINT}/folders/${folderId}`, {
          headers: {
            //'authorization': `bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },

}

export default FolderApiService