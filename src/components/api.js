import axios from 'axios';

export async function findImages() {
  const resp = await axios.get(
    `https://pixabay.com/api/?key=39980960-8181afd9891da861448a3d5ca&q=${this.state.keyword}&per_page=12`
  );
  return resp.data.hits;
}
