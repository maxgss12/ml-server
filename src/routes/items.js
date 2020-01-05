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
    const item_description = await fetch(`${url}items/${ id }/description`);

    const parse_item = await response_items.json();
    const parse_item_description = await item_description.json();
    parse_item.description = parse_item_description.plain_text;

    response.json(parse_item);
})

module.exports = router;