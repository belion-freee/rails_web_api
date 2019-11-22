import axios from "axios";

export class Api {
    constructor() {
      axios.defaults.baseURL = "http://localhost:3000/api/v1";
    }
    index(block: (body: any[]) => void) {
      axios.get('/contents')
      .then(response => {
          console.log('status:', response.status);
          console.log('body:', response.data);
          block(response.data);
      }).catch(err => {
          console.log('err:', err);
          block([]);
      });
    }

    post(value: string, block: (body: any) => void) {
      axios.post('/contents', { body: value })
      .then(response => {
          console.log('status:', response.status);
          console.log('body:', response.data);
          block(response.data);
      }).catch(err => {
          console.log('err:', err);
          block(false);
      });
    }

    delete(id: string, block: (body: any) => void) {
      axios.delete('/contents/' + id)
      .then(response => {
          console.log('status:', response.status);
          console.log('body:', response.data);
          block(id);
      }).catch(err => {
          console.log('err:', err);
          block(false);
      });
    }
}
