const axios = require('axios');
const { getBasiqAuthorizationHeader } = require('../../serverAuthentication');

/**
 * This API endpoint retrieves a list of institutions. Each entry in the array is a separate institution object.
 *
 * https://api.basiq.io/reference/list-all-institutions
 */

export default async function institutions(req, res) {
  try {
    const { data } = await axios.get('https://au-api.basiq.io/institutions', {
      headers: {
        Authorization: await getBasiqAuthorizationHeader(),
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const sortedData = data.data
      // Sort institutions by the "tier" attribute
      .sort((a, b) => a.tier - b.tier);

    res.status(200).json(sortedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
