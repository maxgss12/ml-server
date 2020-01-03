const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');
const url = 'https://api.mercadolibre.com/'

router.get('/', async (require, response) => {
    const response_items = await fetch(`${url}sites/MLA/search?q=${ require.query.search }&limit=${require.query.limit}`);
    const items = await response_items.json();
    response.json(items);
})

router.get('/:id', async (require, response) => {
    const { id } = require.params;
    const response_items = await fetch(`${url}items/${ id }`);
    const items = await response_items.json();
    response.json(items);
})


module.exports = router;