const axios = require('axios');
const { getBasiqAuthorizationHeader } = require('../../serverAuthentication');

export default async function users(req, res) {

  try {
    const { data } = await axios.get(
      `https://au-api.basiq.io/users`,
      {
        headers: {
          Authorization: await getBasiqAuthorizationHeader(),
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    res.status(200).json(data.data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
